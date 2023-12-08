import AnalyticsBoardContent from "../components/AnalyticsBoardContent"
import AnalyticsBoardContentAlt from "../components/AnalyticsBoardContentAlt"
import SocialListeningLeftBar from "../components/SocialListeningLeftBar"
import TopSidebar from "../components/TopSidebar"

const AnalyticsPage = () => {
    return (
        <div className="flex flex-row">
            <SocialListeningLeftBar />
            <div className="flex-grow flex-col px-5 py-5">
                <p className="font-bold text-xl">Social Media Analysis</p>
                <div className="flex-grow flex-col items-center">
                    <AnalyticsBoardContentAlt />
                </div>
            </div>
        </div>
    )
}

export default AnalyticsPage