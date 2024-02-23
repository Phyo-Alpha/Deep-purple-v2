import { MyUserReplies } from "../../types";
import InboxFeedback from "../ui/InboxFeedback";
import React from "react";

interface InboxContentProps {
    replies: MyUserReplies[]
}

export default function InboxContent({ replies }: InboxContentProps) {
    return (
        <section>
            <div className="flex flex-row flex-wrap gap-5 justify-center items-start">
                {replies.map((reply, index) => (
                    <InboxFeedback key={index} reply={reply} />
                ))}
            </div>
        </section>
    )
}