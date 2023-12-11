import { useEffect, useState } from 'react';
import AddDashboardDialog from './ui/AddDashboardDialog';
import { handleFetchUserAttributes } from '../context/AuthContext';
import { saveStreamDashboardToDB, getUserStreamDashboards, deleteStreamDashboardFromDB } from '../api/appwrite/api';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';
import { socialMediaStream } from '../types';

interface SocialListeningLeftBarProps {
    returnFunction: (stream: socialMediaStream) => void;
}


export default function SocialListeningLeftBar({ returnFunction }: SocialListeningLeftBarProps) {

    const [userEmail, setUserEmail] = useState<string>();
    const [boards, setBoards] = useState<string[]>([]);

    handleFetchUserAttributes().then((res) => {
        setUserEmail(res);
    });

    function createNewBoard(dashboardName: string) {

        setBoards([...boards, "Twitter : " + dashboardName]);

        if (userEmail === undefined) {
            return;
        } else {
            const email = userEmail;
            dashboardName = "Twitter : " + dashboardName;
            const stream = dashboardName + " - " + "streamfeeds";

            const dashboard = {
                useremail: email,
                dashboard: dashboardName,
                stream: stream,
            }

            saveStreamDashboardToDB(dashboard);

            const socialMediaStream: socialMediaStream = {
                socialMedia: "twitter",
                socialmedia_username: "",
                streamName: stream,
            }

            returnFunction(socialMediaStream);
        }
    }

    function deleteDashboard(dashboardName: string) {
        console.log(dashboardName);
        console.log(deleteStreamDashboardFromDB(dashboardName));
        setBoards(boards.filter((boardName) => boardName !== dashboardName));
    }

    useEffect(() => {
        getDashboardName().then((dashboardNames) => {
            if (dashboardNames === undefined) {
                return;
            }
            setBoards(dashboardNames);
        });
    }, [userEmail]);

    async function getDashboardName() {
        try {
            const result = await getUserStreamDashboards(userEmail);
            if (result === undefined) {
                return [];
            }
            const dashboardNames = result.documents.map(doc => doc.dashboard)
            return dashboardNames;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <nav className="py-5 flex-col justify-between min-w-[300px] bg-purple-2 h-screen border-r border-gray-300">
            <div className="px-6 flex flex-col gap-5 ">
                <p className=" text-2xl font-bold">Streams</p>
                <div className='justify-start pl-5 py-3 border-b-2 '>
                    <AddDashboardDialog returnFunction={createNewBoard} />
                </div>
                <div className='flex flex-col items-left'>
                    <p className='text-md font-bold'>MY BOARDS</p>
                    <ul className='py-5 flex flex-col gap-3'>
                        {boards.map((board, index) => (
                            <li key={index} className='flex flex-row items-center justify-between'>
                                <Button>
                                    <p className='text-sm font-bold'>{board}</p>
                                </Button>
                                <Button key={index} onClick={() => {
                                    deleteDashboard(board);
                                }}>
                                    <DeleteForeverIcon />
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </nav>
    )
}
