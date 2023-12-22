import { useEffect, useState } from "react";
import ProfilePageLeftBar from "../components/ProfilePageLeftBar";
import ProfileTopBar from "../components/ProfileTopBar";
import { getUsername } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import { CreateProfileForm } from "../components/CreateProfileform";
import ProfileTable from "../components/ProfileTable";
import { ProfileEdit } from "../components/ProfileEdit";

export default function ProfilePage() {

    const { displayOptions } = useParams<{ displayOptions: string }>();

    const { editUsername } = useParams<{ editUsername: string }>();

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
                <div className="p-10">
                    {editUsername && <ProfileEdit ProfileUsername={editUsername} />}
                    {(() => {
                        switch (displayOptions) {
                            case 'createProfile':
                                return <CreateProfileForm />;
                            case 'searchProfile':
                                return <ProfileTable />;
                            default:
                                return <></>;
                        }
                    })()}
                </div>
            </div>
        </section>
    )
}

