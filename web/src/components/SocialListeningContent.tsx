
import RefreshIcon from '@mui/icons-material/Refresh';
import DeleteIcon from '@mui/icons-material/Delete';
import TwitterIcon from '@mui/icons-material/Twitter';
import BarChartIcon from '@mui/icons-material/BarChart';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';

const SocialListeningContent = () => {
    return (
        <div className="grid grid-cols-2 pt-6">
            <div className="flex flex-col px-5 py-2 ">
                <div className="bg-purple-3 px-4 py-4 mb-2">
                    <ul className="flex  justify-between items-center gap-5">
                        <li className="flex flex-row gap-3">
                            <TwitterIcon />
                            <h2>username</h2>
                        </li>

                        <li>
                            <Button>
                                <RefreshIcon />
                            </Button>
                            <Button>
                                <DeleteIcon />
                            </Button>

                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-2 bg-purple-3 px-4 py-4'>
                    <div className='flex flex-row justify-between'>
                        <p className='text-xs font-bold'>Last 7 days</p>
                    </div>
                    <hr />
                    <ul className='flex flex-row gap-10 justify-evenly'>
                        <li className='flex flex-col items-center'>
                            <p className='text-4xl font-bold'>0</p>
                            <p className='text-sm'>posts</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <p className='text-4xl font-bold'>0</p>
                            <p className='text-sm'>comments</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <p className='text-4xl font-bold'>0</p>
                            <p className='text-sm'>reaction</p>
                        </li>
                    </ul>

                </div>
                <div className='flex flex-row justify-center bg-purple-3 mt-1'>
                    <Button>
                        <BarChartIcon />
                        <p className='text-xs'>View Insights</p>
                    </Button>
                </div>

                <div className='flex flex-col bg-light-1 mt-1 px-2 py-1 overflow-y-auto h-96'>
                    <div>
                        <img src={"/src/assets/images/dummypost.png"} alt="twitter-post-1" width={550} height={500} />
                    </div>
                    <div>
                        <img src={"/src/assets/images/dummypost.png"} alt="twitter-post-2" width={550} height={500} />
                    </div>

                </div>


            </div>

            <div className='bg-purple-1 mx-3 h-full rounded-3xl border-dashed border-2'>
                <div className='flex flex-col gap-2 items-center justify-center h-full'>
                    <Button>
                        <AddCircleIcon />
                    </Button>
                    <p>Add Stream</p>
                </div>
            </div>

        </div>
    )
}

export default SocialListeningContent