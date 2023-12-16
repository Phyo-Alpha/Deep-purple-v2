import SentimentAnalyisBoard from "../components/sentimentAnalysis";
import AnalyticsBoardLeftBar from "../components/AnalyticsBoardLeftBar"
import { useParams } from "react-router-dom";
import AnalyticsBoardWelcome from "../components/AnalyticsBoardWelcome";
import MetadataAnalysisBoard from "../components/MetadataAnalysisBoard";
import NegativeSentimentBoard from "../components/NegativeSentimentBoard";
import { useEffect, useState } from "react";
import NegativePostDetails from "../components/NegativePostDetails";
import AnalyticsTopSidebar from "../components/AnalyticsTopSideBar";
import SentimentIndividualPost from "../components/SentimentIndividualPost";

const AnalyticsPage = () => {

    const { analyticsType } = useParams<{ analyticsType: string }>();
    const { postId } = useParams<{ postId: string }>();
    const { displayType } = useParams<{ displayType: string }>();

    const [displayPostDetail, setDisplayPostDetail] = useState(false);
    const [displaySentimentDetail, setDisplaySentimentDetail] = useState(false);

    useEffect(() => {
        if (postId !== undefined) {
            setDisplayPostDetail(true);
        } else {
            setDisplayPostDetail(false);
        }

        if (displayType !== undefined) {
            setDisplaySentimentDetail(true);
        } else {
            setDisplaySentimentDetail(false);
        }
    }, [postId, displayType])
    return (
        <div className="flex flex-row min-h-screen">
            <AnalyticsBoardLeftBar />
            <div className="flex-grow flex-col">
                <div className="flex-grow flex-col items-center">

                    {displayPostDetail ? (
                        <>
                            <AnalyticsTopSidebar title={"POST# " + postId?.toUpperCase()} />
                            <div className="px-6">
                                <NegativePostDetails />
                            </div>
                        </>

                    ) : displaySentimentDetail ? (
                        <>
                            <AnalyticsTopSidebar title={"SENTIMENT"} />
                            <div className="px-6">
                                <SentimentIndividualPost />
                            </div>
                        </>

                    ) : (
                        <>
                            <AnalyticsTopSidebar title={analyticsType?.toUpperCase() || "ANALYTICS"} />
                            <div className="px-6">
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

                        </>
                    )}


                </div>
            </div>
        </div>
    )
}

export default AnalyticsPage