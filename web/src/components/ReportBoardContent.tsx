export default function ReportBoardContent() {
    return (
        <section className="flex flex-col justify-center items-center h-full">
            <div className="py-5">
                <img src="/src/assets/icons/EmptyReportBoardIcon.svg" alt="emptyPage"
                    className="invert-white" />
            </div>
            <div className="flex flex-col gap-5 items-center justify-center">
                <p className="font-bold text-md">Please choose the account you want to compare</p>
                <p className="ml-5 px-5 text-sm max-w-sm">
                    Compare the reports to get insight on your content performance and new ideas for your content strategy.
                </p>
            </div>
        </section>
    )
}

