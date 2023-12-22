import { useEffect, useState } from 'react';
import AddDashboardDialog from './ui/AddDashboardDialog';
import { handleFetchUserAttributes } from '../context/AuthContext';
import { saveStreamDashboardToDB, getUserStreamDashboards, deleteStreamDashboardFromDB } from '../api/appwrite/api';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';
import { socialMediaStream } from '../types';
import { NavLink } from 'react-router-dom';

export default function SocialListeningLeftBar() {

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
            const stream = "";

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
        }
    }

    function deleteDashboard(dashboardName: string) {
        deleteStreamDashboardFromDB(dashboardName);
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
        <nav className="py-5 mt-1 flex-col justify-between min-w-[200px] max-w-[400px] bg-purple-2 h-screen border-r border-gray-300">
            <div className="pb-5 px-5  flex flex-col gap-5 border-b-2">
                <p className=" text-2xl font-bold">Streams</p>
                <div className='justify-start items-start'>
                    <AddDashboardDialog returnFunction={createNewBoard} />
                </div>
            </div>
            <div className='px-5 py-5 border-b-2'>
                <p>Saved Items</p>
            </div>
            <div className='flex flex-col items-left py-5 px-5'>
                <p className='text-md font-bold'>MY BOARDS</p>
                <ul className='py-5 flex flex-col gap-3'>
                    {boards.map((board, index) => (
                        <li key={index} className='flex flex-row items-center justify-between'>
                            <NavLink to={"/" + board}>
                                <Button key={index} variant="contained" style={{ backgroundColor: "#877EFF" }} >
                                    <div className='flex flex-row gap-2'>
                                        <p className='text-md font-bold'>{board}</p>
                                        <div onClick={() => {
                                            deleteDashboard(board);
                                        }}>
                                            <DeleteForeverIcon />
                                        </div>
                                    </div>
                                </Button>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

        </nav>
    )
}
