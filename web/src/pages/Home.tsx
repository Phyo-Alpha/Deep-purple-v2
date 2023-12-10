import SocialListeningContent from "../components/SocialListeningContent"
import SocialListeningLeftBar from "../components/SocialListeningLeftBar"

const Home = () => {

    return (
        <div className="flex flex-row">
            <SocialListeningLeftBar />
            <div className="flex-grow flex-col">
                <SocialListeningContent />
            </div>


        </div>
    )
}

export default Home