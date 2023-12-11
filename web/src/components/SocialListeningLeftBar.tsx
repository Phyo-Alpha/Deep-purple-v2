import { useState } from 'react';
import AddDashboardDialog from './ui/AddDashboardDialog';

const SocialListeningLeftBar = () => {

    const [boards, setBoards] = useState<string[]>([]);

    function createNewBoard(username: string) {
        setBoards([...boards, "Twitter : " + username]);
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
                            <li key={index}>
                                <p className='text-sm font-bold'>{board}</p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </nav>
    )
}

export default SocialListeningLeftBar