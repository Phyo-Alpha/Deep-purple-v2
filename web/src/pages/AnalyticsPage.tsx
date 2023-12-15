import SentimentAnalyisBoard from "../components/sentimentAnalysis";
import AnalyticsBoardLeftBar from "../components/AnalyticsBoardLeftBar"
import { useParams } from "react-router-dom";
import AnalyticsBoardWelcome from "../components/AnalyticsBoardWelcome";
import MetadataAnalysisBoard from "../components/MetadataAnalysisBoard";
import TopSidebar from "../components/TopSidebar";
import NegativeSentimentBoard from "../components/NegativeSentimentBoard";
import { useEffect, useState } from "react";
import NegativePostDetails from "../components/NegativePostDetails";

const AnalyticsPage = () => {

    const { analyticsType } = useParams<{ analyticsType: string }>();
    const { postId } = useParams<{ postId: string }>();
    const [displayPostDetail, setDisplayPostDetail] = useState(false);

    useEffect(() => {
        if (postId !== undefined) {
            setDisplayPostDetail(true);
        } else {
            setDisplayPostDetail(false);
        }
    }, [postId])
    return (
        <div className="flex flex-row min-h-screen">
            <AnalyticsBoardLeftBar />
            <div className="flex-grow flex-col px-5">
                <div className="flex-grow flex-col items-center">
                    {displayPostDetail ? (
                        <>
                            <TopSidebar title={"post #" + postId} />
                            <NegativePostDetails />
                        </>

                    ) : (
                        <>
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
                        </>
                    )}


                </div>
            </div>
        </div>
    )
}

export default AnalyticsPage