import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { tweets } from '../data';
import MetadataLineChart from "./MetadataLineChart";
import { useEffect, useState } from "react";
import { MyChartDataset } from "../types";

Chart.register(CategoryScale);

interface chartDataProps {
    labels: string[];
    datasets: MyChartDataset[];
}

export default function MetadataAnalysisBoard() {

    const [chartDataMetrics, setchartDataMetrics] = useState<chartDataProps>({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
        const data: chartDataProps = {
            labels: labels,
            datasets: [
                {
                    label: 'Likes',
                    data: [65, 80, 55, 57, 75, 65, 40],
                    fill: false,
                    backgroundColor: ['#3DA5D1'],
                    borderColor: '#3DA5D1',
                    borderWidth: 2,
                },
                {
                    label: 'Views',
                    data: [80, 95, 70, 67, 90, 80, 55],
                    fill: false,
                    backgroundColor: ['#A97AD0'],
                    borderColor: '#A97AD0',
                    borderWidth: 2,
                },
                {
                    label: 'Comments',
                    data: [45, 40, 55, 56, 67, 44, 40],
                    fill: false,
                    backgroundColor: ['#CBE137'],
                    borderColor: '#CBE137',
                    borderWidth: 2,
                }
            ]
        };
        setchartDataMetrics(data);
    }, []);


    return (
        <div>
            <section className="flex flex-row gap-32 mt-5 justify-start items-center">
                <div className="flex flex-col pl-3 gap-3 justify-start">
                    <p className="text-lg">Total likes</p>
                    <p className="text-5xl font-bold text-primary-500">491,012</p>
                    <p className="text-xl text-positive-green">0.8%</p>
                </div>
                <div className="flex flex-col pl-3 gap-3 justify-start">
                    <p className="text-lg">New likes</p>
                    <p className="text-5xl font-bold text-primary-500">4913</p>
                    <p><span className="text-2xl">332</span>   (daily avg)</p>
                </div>
                <div className="flex flex-col pl-3 gap-3 justify-start">
                    <p className="text-lg">Engaged Viewer</p>
                    <p className="text-5xl font-bold text-primary-500">501,012</p>
                    <p className="text-xl text-positive-green">4.8%</p>
                </div>
            </section>

            <section className="mt-10">
                <div className="py-2 border-b-2">
                    <p className="font-bold text-xl">Weekly Post Feedbacks</p>
                </div>
                <div className="py-5">
                    <MetadataLineChart chartData={chartDataMetrics} />
                </div>
            </section>
        </div>

    )
}
