import { useEffect, useState } from "react";
import ProfilePageLeftBar from "../components/ProfilePageLeftBar";
import ProfileTopBar from "../components/ProfileTopBar";
import { getUsername } from "../context/AuthContext";

export default function ProfilePage() {

    const [username, setUsername] = useState<string>("");

    useEffect(() => {
        const fetchUsername = async () => {
            const username = await getUsername();
            if (username === undefined) return;
            setUsername(username);
            console.log(username);
        }
        fetchUsername();
    }, [username]);

    return (
        <section className="flex flex-row min-h-screen">
            <div className="border-r-2">
                <ProfilePageLeftBar />
            </div>
            <div className="flex flex-col w-full">
                <div className="border-b-2 ">
                    <ProfileTopBar username={username} />
                </div>
            </div>
        </section>
    )
}

