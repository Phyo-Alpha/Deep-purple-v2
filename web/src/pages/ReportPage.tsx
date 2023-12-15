import ReportBoardContent from "../components/ReportBoardContent"
import ReportBoardLeftSideBar from "../components/ReportBoardLeftSideBar"
import ReportBoardTopSideBar from "../components/ReportBoardTopSideBar"

export default function ReportsBoard() {
    return (
        <section className="flex flex-row h-screen">
            <ReportBoardLeftSideBar />
            <div className="w-full">
                <ReportBoardTopSideBar />
                <ReportBoardContent />
            </div>
        </section>
    )
}

