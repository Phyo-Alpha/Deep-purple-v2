import SocialListeningContent from "../components/SocialListeningContent"
import SocialListeningLeftBar from "../components/SocialListeningLeftBar"
import TopSidebar from "../components/TopSidebar"

const Home = () => {

    return (
        <div className="flex flex-row">
            <SocialListeningLeftBar />
            <div className="flex-grow flex-col">
                <TopSidebar />
                <SocialListeningContent />
            </div>


        </div>
    )
}

export default Home