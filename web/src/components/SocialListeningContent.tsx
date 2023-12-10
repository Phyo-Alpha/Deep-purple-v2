import { useState, useEffect } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import DeleteIcon from '@mui/icons-material/Delete';
import TwitterIcon from '@mui/icons-material/Twitter';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Button } from '@mui/material';
import { axiosInstance as axios } from '../api/config';
import { userFeed } from '../types';
import { Tweet } from 'react-tweet';
import AddStreamDialog from './ui/AddStreamDialog';
import Stream from './ui/Stream';

const SocialListeningContent = () => {

    const [userfeeds, setUserfeeds] = useState<userFeed | undefined>({
        name: 'Phyo',
        username: 'edwardphyoo',
        tweets: [
            {
                tweet: 'Hello World',
                tweet_id: '1733719493585543209',
                replies: [],
            },
            {
                tweet: 'Hello World',
                tweet_id: '1733263530948751671',
                replies: [],
            },
        ]
    });
    const [displayedfeeds, setDisplayedfeeds] = useState(false);
    const [addedStream, setAddedStream] = useState(false);

    useEffect(() => {
        const fetchTweets = async () => {
            try {
                // const response = await axios.get('/streamRequest/Twitter/edwardphyoo');
                // setUserfeeds(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchTweets();

        if (userfeeds !== undefined) {
            setDisplayedfeeds(true);
        }
    }, [])

    console.log(displayedfeeds);

    const handleValueReturn = (value: string) => {
        if (value === 'edwardphyoo') {
            setAddedStream(true);
        }
    };

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
                <div className='flex flex-row justify-center bg-purple-3 border-t-2'>
                    <Button>
                        <BarChartIcon />
                        <p className='text-xs'>View Insights</p>
                    </Button>
                </div>

                <div className='flex flex-col bg-light-1 overflow-y-auto px-2 h-128'>
                    {displayedfeeds === true && userfeeds ? (
                        userfeeds.tweets.map((tweet, index) => (
                            <div key={index} className='flex flex-col h-fit light'>
                                <Tweet id={tweet.tweet_id} />
                            </div>
                        ))

                    ) : (
                        <>
                            <div>
                                <img src={"/src/assets/images/dummypost.png"} alt="twitter-post-1" width={550} height={500} />
                            </div>
                            <div>
                                <img src={"/src/assets/images/dummypost.png"} alt="twitter-post-2" width={550} height={500} />
                            </div>
                        </>
                    )}


                </div>


            </div>

            {addedStream ? (
                <Stream />
            ) : (
                <div className='bg-purple-1 mx-3 h-full rounded-3xl border-dashed border-2'>
                    <div className='flex flex-col gap-2 items-center justify-center h-128'>
                        <AddStreamDialog onValueReturn={handleValueReturn} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default SocialListeningContent