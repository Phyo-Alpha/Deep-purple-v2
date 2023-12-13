import SentimentAnalyisBoard from "../components/sentimentAnalysis";
import AnalyticsBoardLeftBar from "../components/AnalyticsBoardLeftBar"
import { useParams } from "react-router-dom";
import AnalyticsBoardWelcome from "../components/AnalyticsBoardWelcome";
import MetadataAnalysisBoard from "../components/MetadataAnalysisBoard";
import TopSidebar from "../components/TopSidebar";
import NegativeSentimentBoard from "../components/NegativeSentimentBoard";

const AnalyticsPage = () => {
    const { analyticsType } = useParams<{ analyticsType: string }>();
    return (
        <div className="flex flex-row min-h-screen">
            <AnalyticsBoardLeftBar />
            <div className="flex-grow flex-col px-5">
                <div className="flex-grow flex-col items-center">

                    <TopSidebar title={analyticsType || "Analytics"} />
                    {(() => {
                        switch (analyticsType) {
                            case 'metadata':
                                return <MetadataAnalysisBoard />;
                            case 'sentiment':
                                return <SentimentAnalyisBoard />;
                            case 'negativeposts':
                                return <NegativeSentimentBoard />;
                            default:
                                return <AnalyticsBoardWelcome />;
                        }
                    })()}
                </div>
            </div>
        </div>
    )
}

export default AnalyticsPage