import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState, useEffect } from "react";
import { tweets } from '../data';
import MyGaugheChart from "./gaugeChart";
import ApexD from "./ApexChart_Doughnut";
import ApexChartStackedBar from "./ApexChartStackedBar";
import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { NavLink } from "react-router-dom";
import { getSentimentDataOfThatAccount } from "../services";
import { MySentimentData } from "../types";
import Sentiment_Doughnut from "./Sentiment_Doughnut";

Chart.register(CategoryScale);

interface SentimentAnalysisBoardProps {
    username: string;
}

export default function SentimentAnalyisBoard({ username }: SentimentAnalysisBoardProps) {

    const [sentimentData, setSentimentData] = useState<MySentimentData>();

    useEffect(() => {
        const fetchSentimentData = async () => {
            const sentimentData = await getSentimentDataOfThatAccount(username);
            setSentimentData(sentimentData);
        };
        console.log(sentimentData);
        fetchSentimentData();
    }, [username]);


    return (
        <div className="flex flex-col gap-10 py-10 px-5">
            <div className="pb-10 flex flex-row justify-between items-center">
                <p className="font-bold text-5xl ">Last 7 days</p>
                <NavLink to={"/analytics/sentiment/individualAnalysis"}>
                    <Button variant="contained" style={{ backgroundColor: "#877EFF" }}>
                        Individual Posts <ArrowForwardIcon />
                    </Button>
                </NavLink>

            </div>
            <div className="grid grid-cols-8 gap-10">
                <div className="bg-light-1 rounded-md col-span-4">
                    <div className="border-b-2">
                        <p className="px-5  py-2 text-lg text-purple-1 ">Overall sentiment level</p>
                    </div>
                    <div className="grid grid-cols-6 gap-10 py-10">
                        <div className="col-span-4">
                            <MyGaugheChart positivePercentage={sentimentData?.positivePercentage} />
                        </div>
                        <div className="flex flex-col gap-5 col-span-2 text-dark-1">
                            <p className="font-bold text-5xl">{(sentimentData?.positivePercentage ?? 0) * 100}%</p>
                            <p>out of 100%</p>
                            <p className="text-primary-500 font-bold text-3xl">Positive</p>
                        </div>
                    </div>
                </div>

                <div className="bg-light-1 rounded-md col-span-4">
                    <div className="border-b-2">
                        <p className="px-5  py-2 text-lg text-purple-1 ">Sentiment Distribution</p>
                    </div>

                    <div>
                        <Sentiment_Doughnut positivePercentage={(sentimentData?.positivePercentage ?? 0) * 100}
                            negativePercentage={(sentimentData?.negativePercentage ?? 0) * 100} />
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