import { useParams } from "react-router-dom";
import ReportBoardContent from "../components/ReportBoardContent"
import ReportBoardLeftSideBar from "../components/ReportBoardLeftSideBar"
import ReportBoardTopSideBar from "../components/ReportBoardTopSideBar"
import { useEffect } from "react";

export default function ReportsBoard() {

    const { sub_page } = useParams<{ sub_page: string }>();

    useEffect(() => {
        console.log(sub_page);
    }, [sub_page])
    return (
        <section className="flex flex-row h-screen">
            <ReportBoardLeftSideBar />
            <div className="w-full">
                <ReportBoardTopSideBar />
                {(() => {
                    switch (sub_page) {
                        case 'all-report':
                            return <ReportBoardContent />;
                        default:
                            return <ReportBoardContent />;
                    }
                })()}
            </div>
        </section>
    )
}

