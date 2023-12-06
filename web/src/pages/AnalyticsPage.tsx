import AnalyticsBoardContent from "../components/AnalyticsBoardContent"
import SocialListeningLeftBar from "../components/SocialListeningLeftBar"
import TopSidebar from "../components/TopSidebar"

const AnalyticsPage = () => {
    return (
        <div className="flex flex-row">
            <SocialListeningLeftBar />
            <div className="flex-grow flex-col">
                <TopSidebar />
                <div className="flex-grow flex-col items-center">
                    <AnalyticsBoardContent />
                </div>
            </div>
        </div>
    )
}

export default AnalyticsPage