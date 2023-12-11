import { useState } from "react";
import SocialListeningContent from "../components/SocialListeningContent"
import SocialListeningLeftBar from "../components/SocialListeningLeftBar"
import { socialMediaStream } from "../types"

const Home = () => {

    const [stream, setStream] = useState<socialMediaStream>({
        socialMedia: "",
        socialmedia_username: "",
        streamName: "",
    });

    function handleFetchStreamFromLeftBar(stream: socialMediaStream) {
        if (stream === undefined) {
            return;
        } else {
            setStream(stream);
        }
    }
    return (
        <div className="flex flex-row">
            <SocialListeningLeftBar returnFunction={handleFetchStreamFromLeftBar} />
            <div className="flex-grow flex-col">
                <SocialListeningContent stream={stream} />
            </div>


        </div>
    )
}

export default Home