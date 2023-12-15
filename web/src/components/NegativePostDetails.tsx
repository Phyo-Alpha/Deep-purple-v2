import { Button } from "@aws-amplify/ui-react"
import { Tweet } from "react-tweet"

export default function NegativePostDetails() {
    return (
        <section className="py-10 px-5 mt-10 bg-purple-1 rounded-2xl">
            <div className="grid grid-cols-2 justify-center border-b-2">
                <div className="light max-w-fit">
                    <Tweet id="1683920951807971329" />
                </div>
                <div className="pl-10 py-10 flex flex-row gap-24">
                    <div className="flex flex-col gap-10 text-start ">
                        <p>ID</p>
                        <p>Negativity Scale</p>
                        <p>Platform</p>
                        <p>Date Posted</p>
                        <p>Link to Post</p>
                        <p>Status</p>
                    </div>
                    <div className="flex flex-col gap-10 text-start">
                        <p>ID</p>
                        <p>Negativity Scale</p>
                        <p>Platform</p>
                        <p>Date Posted</p>
                        <p>Link to Post</p>
                        <p>Status</p>
                    </div>
                </div>
            </div>
            <div className="mt-5 flex flex-row gap-20 justify-center items-center">
                <Button className="text-light-1 bg-primary-600">
                    Export
                </Button>
                <Button className="text-light-1 bg-primary-600">
                    Report
                </Button>
                <Button className="text-light-1 bg-primary-600">
                    Suspend
                </Button>
            </div>

        </section>
    )
}

