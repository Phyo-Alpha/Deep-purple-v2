import { useEffect, useState } from "react";
import SocialListeningContent from "../components/SocialListeningContent"
import SocialListeningLeftBar from "../components/SocialListeningLeftBar"
import { useParams } from "react-router-dom";
import { getStreamFromDBUsingUseremailAndDashBoadName } from "../api/appwrite/api";
import StreamTopSideBar from "../components/StreamTopSideBar";
import { handleFetchUserAttributes } from "../context/AuthContext";

export default function Home() {


    const [displayAddStreamBar, setDisplayAddStreamBar] = useState(true);
    const [thisDashboardStream, setThisDashboardStream] = useState<string>('');

    function onToggleDisplayRightBar() {
        console.log("Toggle add stream : ", displayAddStreamBar);
        setDisplayAddStreamBar(!displayAddStreamBar);
    }

    const { dashboardname } = useParams<{ dashboardname: string }>();

    useEffect(() => {

        if (dashboardname === undefined) {
            return;
        } else {
            const fetchStream = async () => {
                const email = await handleFetchUserAttributes();
                const streamName = await getStreamFromDBUsingUseremailAndDashBoadName(email, dashboardname);
                if (streamName === undefined) return;

            }
            fetchStream();
        }


    }, [dashboardname]);


    return (
        <div className="flex flex-row">
            <SocialListeningLeftBar />
            <div className="flex-grow flex-col">
                <StreamTopSideBar onToggleDisplayRightBar={onToggleDisplayRightBar} />
                <SocialListeningContent dashboardname={dashboardname ?? ""} displayAddStream={displayAddStreamBar}
                    onToggleDisplayRightBar={onToggleDisplayRightBar} />
            </div>


        </div>
    )
}
