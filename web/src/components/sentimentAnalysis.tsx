import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState, useEffect } from "react";
import DoughnutChart from "./DoughnutChart";
import { BarChart } from "./BarChart";
import { tweets } from '../data';
import LineChart from "./LineChart";
import ChartInfoCard from "./ChartInfoCard";
import EmotionsDoughnutChart from "./EmotionsDoughnutChart";
import MyGaugheChart from "./gaugeChart";
import ApexD from "./ApexChart_Doughnut";
import ApexChartStackedBar from "./ApexChartStackedBar";

Chart.register(CategoryScale);

interface chartDataProps {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        fill?: boolean;
        backgroundColor: string[];
        borderColor: string;
        borderWidth: number;
    }[];
}

interface infoCardProps {
    data: {
        labelValues: number[],
        labelColor: string[],
    },
    infoCardOptions: {
        width: number,
        height: number,
    }

}

export default function SentimentAnalyisBoard() {

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

    const [trendChartData, settrendChartData] = useState<chartDataProps>({
        labels: [],
        datasets: [{
            label: '',
            data: [],
            fill: false,
            backgroundColor: [],
            borderColor: "",
            borderWidth: 2,
        }],

    });

    const [sentimentInfoCardData, setsentimentInfoCardData] = useState<infoCardProps>({
        data: {
            labelValues: [],
            labelColor: [],
        },
        infoCardOptions: {
            width: 0,
            height: 0,
        }
    });

    const [emotionsDognutChartData, setemotionsDognutChartData] = useState<chartDataProps>({
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

        const sentimentValues = tweets.map(tweet => tweet.sentiment === 'POSITIVE' ? 1 : -1);
        const dates = tweets.map(tweet => new Date(tweet.date).toLocaleDateString());

        // Create the chart data
        settrendChartData({
            labels: dates,
            datasets: [
                {
                    label: 'Sentiment',
                    data: sentimentValues,
                    fill: false,
                    backgroundColor: ['rgba(75,192,192,0.4)'],
                    borderColor: 'rgba(75,192,192,1)',
                    borderWidth: 2,
                }
            ]
        });

        const sentimentInfoCardData = {
            data: {
                labelValues: [positivePercentage, negativePercentage],
                labelColor: ['#36A2EB', '#FF6384'],
            },
            infoCardOptions: {
                width: 150,
                height: 200,
            }
        }
        setsentimentInfoCardData(sentimentInfoCardData);

        const emotionsDognutChartData = {
            labels: emotionLabels,
            datasets: [{
                label: 'Emotion',
                data: emotionValues,
                backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#E7E9ED', '#4BC0C0'],
                borderColor: "black",
                borderWidth: 2,
            }],
        };

        setemotionsDognutChartData(emotionsDognutChartData);
    }, []);


    return (
        <div className="flex flex-col gap-10 py-10 px-5">
            <div className="grid grid-cols-8 gap-10">
                <div className="bg-light-1 rounded-md col-span-4">
                    <div className="border-b-2">
                        <p className="px-5  py-2 text-lg text-purple-1 ">Overall sentiment level</p>
                    </div>
                    <div className="grid grid-cols-6 gap-10 py-10">
                        <div className="col-span-4">
                            <MyGaugheChart />
                        </div>
                        <div className="flex flex-col gap-5 col-span-2 text-dark-1">
                            <p className="font-bold text-5xl">4.05</p>
                            <p>out of 5.0</p>
                            <p className="text-primary-500 font-bold text-3xl">Positive</p>
                        </div>
                    </div>
                </div>

                <div className="bg-light-1 rounded-md col-span-4">
                    <div className="border-b-2">
                        <p className="px-5  py-2 text-lg text-purple-1 ">Sentiment Distribution</p>
                    </div>

                    <div>
                        <ApexD />
                    </div>

                </div>

            </div>
            <div>
                <div className="bg-light-1 rounded-md py-16 px-16">
                    <ApexChartStackedBar />
                </div>
            </div>
        </div>





    );
}