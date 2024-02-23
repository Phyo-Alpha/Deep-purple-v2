import { TwitterIcon } from "lucide-react"
import { MyReports } from "../../types"
import React from "react";


interface MyReportProps {
    reply: MyReports
}

export default function BugReportObject({ reply }: MyReportProps) {
    return (
        <div className="flex flex-col gap-3 bg-light-1 text-dark-1 w-full p-5 rounded-lg max-w-[500px]
        min-h-[200px]">
            <div className="flex flex-row justify-between items-start max-w-[400px]">
                <div className="flex flex-row gap-2 justify-center items-center">
                    <div className="bg-twitter-blue p-3 max-w-[50px] rounded-full text-light-1">
                        <TwitterIcon />
                    </div>
                    <div>
                        <p>User</p>
                        <p>@{reply.report_by_name}</p>
                    </div>
                </div>

            </div>
            <hr />
            <p>Message</p>
            <p>{reply.report_text}</p>
        </div>
    )
}