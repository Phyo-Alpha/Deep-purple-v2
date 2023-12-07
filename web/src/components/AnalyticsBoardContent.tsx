import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState, useEffect } from "react";
import { Data, tweets } from "../data";
import DoughnutChart from "./DoughnutChart";
import { BarChart } from "./BarChart";
import { axiosInstance } from "../api/config";

Chart.register(CategoryScale);

interface chartDataProps {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string[];
        borderColor: string;
        borderWidth: number;
    }[];
}

export default function AnalyticsBoardContent() {

    const [tweetData, setTweetData] = useState(tweets);

    const [chartData, setChartData] = useState<chartDataProps>({
        labels: [],
        datasets: [{
            label: '',
            data: [],
            backgroundColor: [],
            borderColor: "",
            borderWidth: 2,
        }],

    });

    useEffect(() => {
        const fetchSentiments = async () => {
            try {
                const responses = await Promise.all(
                    tweets.map((tweet) =>
                        axiosInstance.post("/analysis/getSentiment", tweet)
                    )
                );

                const sentiments = responses.map((response) => {
                    const scoreLabels = response.data.scored_labels;

                    if (!scoreLabels || scoreLabels.length === 0) {
                        return null;
                    }
                    const scoreLabel = scoreLabels[0];
                    return scoreLabel.label;
                }).filter(Boolean);

                const positiveCount = sentiments.filter(sentiment => sentiment === 'POSITIVE').length;
                const negativeCount = sentiments.filter(sentiment => sentiment === 'NEGATIVE').length;

                const total = sentiments.length;
                const positivePercentage = (positiveCount / total) * 100;
                const negativePercentage = (negativeCount / total) * 100;

                setChartData({
                    labels: ['Positive', 'Negative'],
                    datasets: [{
                        label: 'Sentiment',
                        data: [positivePercentage, negativePercentage],
                        backgroundColor: ['#36A2EB', '#FF6384'],
                        borderColor: "black",
                        borderWidth: 2,
                    }],
                });
                // Store sentiments in state or somewhere else if necessary
            } catch (error) {
                console.error('Failed to fetch sentiments:', error);
            }
        };

        fetchSentiments();
    }, []);

    return (

        <div className="flex flex-col justify-center items-center">
            <DoughnutChart chartData={chartData} />
            <BarChart chartData={chartData} />
        </div>


    );
}