import { useState } from "react";
import SocialListeningContent from "../components/SocialListeningContent"
import SocialListeningLeftBar from "../components/SocialListeningLeftBar"
import { socialMediaStream } from "../types"

const Home = () => {

    const [stream, setStream] = useState<socialMediaStream>();

    function handleFetchStreamFromLeftBar(stream: socialMediaStream) {
        setStream(stream);
    }
    return (
        <div className="flex flex-row">
            <SocialListeningLeftBar returnFunction={handleFetchStreamFromLeftBar} />
            <div className="flex-grow flex-col">
                <SocialListeningContent />
            </div>


        </div>
    )
}

export default Home