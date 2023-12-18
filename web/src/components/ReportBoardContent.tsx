import ReportDoughnut from "./ui/ReportDoughnut";
import { useEffect, useState } from "react";
import { getAllReportCharts } from "../api/appwrite/api";
import { MyReportChart } from "../types";

export default function ReportBoardContent() {

    const [reports, setReports] = useState<MyReportChart[]>();

    async function AllReports() {
        const reports = await getAllReportCharts();

        if (!reports) {
            return undefined;
        }
        return reports.documents;
    }

    useEffect(() => {

        const fetchReports = async () => {
            const reports = await AllReports();

            if (reports !== undefined) {
                const chartsdata: MyReportChart[] = reports.map((report) => {
                    const data: MyReportChart = {
                        platform: report.platform,
                        charttype: report.charttype,
                        charttitle: report.charttitle,
                        labels: report.labels,
                        values: report.values,
                    }
                    return data;
                });
                setReports(chartsdata);
            }
        }
        console.log(reports);

        fetchReports();
    }, []);
    return (
        <section className="my-10 flex flex-col items-center h-full">
            {/* <div className="py-5">
                <img src="/src/assets/icons/EmptyReportBoardIcon.svg" alt="emptyPage"
                    className="invert-white" />
            </div>
            <div className="flex flex-col gap-5 items-center justify-center">
                <p className="font-bold text-md">Please select the reports you want to compare</p>
                <p className="ml-5 px-5 text-sm max-w-sm">
                    Compare the reports to get insight on your content performance and new ideas for your content strategy.
                </p>
            </div> */}
            <div className="flex flex-row flex-wrap gap-10 justify-center items-center">

                {reports?.map((report, index) => {
                    return (
                        <div className="flex flex-col bg-light-1 py-3 px-3 rounded-md
                        justify-center" key={index}>
                            <p className="font-bold text-dark-1 text-xl">{report.charttitle}</p>
                            <ReportDoughnut values={report.values} labels={report.labels} />
                        </div>
                    )
                })}
                {reports?.map((report, index) => {
                    return (
                        <div className="flex flex-col bg-light-1 py-3 px-3 rounded-md
                        justify-center" key={index}>
                            <p className="font-bold text-dark-1 text-xl">{report.charttitle}</p>
                            <ReportDoughnut values={report.values} labels={report.labels} />
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

