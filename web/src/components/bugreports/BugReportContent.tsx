import { MyReports } from "../../types";
import BugReportObject from "../ui/BugReportObject";
import React from "react";


interface InboxContentProps {
    replies: MyReports[]
}

export default function BugReportContent({ replies }: InboxContentProps) {
    return (
        <section>
            <div className="flex flex-col gap-5 justify-center items-start">
                {replies.map((reply, index) => (
                    <BugReportObject key={index} reply={reply} />
                ))}
            </div>
        </section>
    )
}