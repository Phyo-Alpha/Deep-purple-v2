import { useEffect, useState } from "react";
import { MyReports } from "../types";
import { getAllBugReports } from "../api/appwrite/api";
import BugReportTopBar from "../components/bugreports/BugReportTopBar";
import BugReportContent from "../components/bugreports/BugReportContent";
import React from "react";

export default function BugReportPage() {

    const [accountName] = useState<string>("");
    const [bugReports, setBugReports] = useState<MyReports[]>([]);

    async function getReports() {
        const bugReports = await getAllBugReports();

        if (bugReports === undefined) return;

        const reports = bugReports.documents.map((report) => ({
            report_text: report.report_text,
            report_date: report.report_date,
            report_by_name: report.report_by_name,
        }));

        return reports;
    }

    useEffect(() => {
        const fetchReplies = async () => {
            const reports = await getReports();
            if (reports === undefined) return;
            setBugReports(reports);
        }
        fetchReplies();

    }, [accountName]);

    return (
        <section className="flex flex-row min-h-screen">

            <div className="flex flex-col w-full">
                <div className="border-b-2 ">
                    <BugReportTopBar />
                </div>
                <div className="m-5">
                    <BugReportContent replies={bugReports} />
                </div>
            </div>
        </section>
    )
}