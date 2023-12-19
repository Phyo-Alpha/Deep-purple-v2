import { MyUserReplies } from "../../types"

interface InboxFeedbackProps {
    reply: MyUserReplies
}

export default function InboxFeedback({ reply }: InboxFeedbackProps) {
    return (
        <div className="flex flex-col gap-3 bg-purple-1 w-full p-5 rounded-lg">
            <div className="flex flex-row justify-between items-start max-w-[400px]">
                <p>From user: @{reply.author}</p>
                <p>Date: 11/12/2022</p>
            </div>
            <div className="flex flex-col mt-2">
                <p>Sentiment : {reply.sentiment}</p>
                <p>Emotion : {reply.emotion}</p>
            </div>
            <p>Content : </p>
            <p>{reply.reply_text}</p>
        </div>
    )
}