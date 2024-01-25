import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getEmotionDataOfThatAccont } from "../../services";
import { MyEmotionData } from "../../types";
import EmotionDistBarChart from "./EmotionDistBarChart";
import EmotionStackedBar from "./EmotionStackedBar";
import { Chart as GoogleChart } from "react-google-charts";

Chart.register(CategoryScale);

interface UserAnalysisBoardProps {
    username: string;
}

export const data = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
];

export default function UserAnalysisBoard({ username }: UserAnalysisBoardProps) {

    const [emotiondata, setEmotionData] = useState<MyEmotionData>();

    const defaultEmotionData: MyEmotionData = {
        anger: 0,
        fear: 0,
        joy: 0,
        sadness: 0,
        surprise: 0,
        love: 0,
        positiveCount: 0,
        negativeCount: 0,
    };

    useEffect(() => {
        const fetchEmotionData = async () => {
            const emotiondata = await getEmotionDataOfThatAccont(username);
            setEmotionData(emotiondata);
            console.log(emotiondata);
        };

        fetchEmotionData();
    }, [username]);


    return (
        <div className="flex flex-col gap-10 py-10 px-5">
            <div className="flex flex-row justify-between items-center">
                <p className="font-bold text-5xl ">Last 7 days</p>
                <NavLink to={"/analytics/sentiment/individualAnalysis"}>
                    {/* <Button variant="contained" style={{ backgroundColor: "#877EFF" }}>
                        Individual Posts <ArrowForwardIcon />
                    </Button> */}
                </NavLink>

            </div>

            <div className="bg-light-1 rounded-md">
                <div className="border-b-2">
                    <p className="px-5  py-2 text-lg text-purple-1 ">Sentiment Distribution Last Week</p>
                </div>
                <div className="py-2">

                    <GoogleChart
                        chartEvents={[
                            {
                                eventName: "select",
                                callback: ({ chartWrapper }) => {
                                    const chart = chartWrapper.getChart();
                                    const selection = chart.getSelection();
                                    if (selection.length === 0) return;
                                    const region = data[selection[0].row + 1];
                                    console.log("Selected : " + region);
                                },
                            },
                        ]}
                        chartType="GeoChart"
                        width="100%"
                        height="400px"
                        data={data}
                    />

                </div>
            </div>
            <div className="bg-light-1 rounded-md">
                <div className="border-b-2">
                    <p className="px-5  py-2 text-lg text-purple-1 ">Emotion Distribution Last Week</p>
                </div>
                <div className="py-2">

                    <GoogleChart
                        chartEvents={[
                            {
                                eventName: "select",
                                callback: ({ chartWrapper }) => {
                                    const chart = chartWrapper.getChart();
                                    const selection = chart.getSelection();
                                    if (selection.length === 0) return;
                                    const region = data[selection[0].row + 1];
                                    console.log("Selected : " + region);
                                },
                            },
                        ]}
                        chartType="GeoChart"
                        width="100%"
                        height="400px"
                        data={data}
                    />

                </div>
            </div>



        </div>





    );
}