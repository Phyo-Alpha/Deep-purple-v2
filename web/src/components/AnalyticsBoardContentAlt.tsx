import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState, useEffect } from "react";
import DoughnutChart from "./DoughnutChart";
import { BarChart } from "./BarChart";
import { tweets } from '../data';

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

export default function AnalyticsBoardContentAlt() {

    const [sentimentChartData, setsentimentChartData] = useState<chartDataProps>({
        labels: [],
        datasets: [{
            label: '',
            data: [],
            backgroundColor: [],
            borderColor: "",
            borderWidth: 2,
        }],

    });

    const [emotionChartData, setemotionChartData] = useState<chartDataProps>({
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

        const positiveCount = tweets.filter(tweet => tweet.sentiment === 'POSITIVE').length;
        const negativeCount = tweets.filter(tweet => tweet.sentiment === 'NEGATIVE').length;


        const total = tweets.length;
        const positivePercentage = (positiveCount / total) * 100;
        const negativePercentage = (negativeCount / total) * 100;

        setsentimentChartData({
            labels: ['Positive', 'Negative'],
            datasets: [{
                label: 'Sentiment',
                data: [positivePercentage, negativePercentage],
                backgroundColor: ['#36A2EB', '#FF6384'],
                borderColor: "black",
                borderWidth: 2,
            }],
        });

        const emotionsByLabel = tweets.reduce((acc: Record<string, number[]>, tweet) => {
            tweet.emotion.forEach(emotion => {
                if (!acc[emotion.label]) {
                    acc[emotion.label] = [];
                }
                acc[emotion.label].push(emotion.value);
            });
            return acc;
        }, {});

        const averageEmotions = Object.entries(emotionsByLabel).map(([label, values]) => {
            const total = values.reduce((total, value) => total + value, 0);
            const average = total / values.length;
            return { label, average };
        });

        const emotionLabels = averageEmotions.map(emotion => emotion.label);
        const emotionValues = averageEmotions.map(emotion => emotion.average);

        setemotionChartData({
            labels: emotionLabels,
            datasets: [{
                label: 'Emotion',
                data: emotionValues,
                backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#E7E9ED', '#4BC0C0'],
                borderColor: "black",
                borderWidth: 2,
            }],
        });


    }, []);


    return (

        <div className="flex flex-col justify-center items-center">
            <DoughnutChart chartData={sentimentChartData} />
            <BarChart chartData={emotionChartData} />
        </div>


    );
}