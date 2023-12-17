import { useEffect, useState } from 'react';
import AddStreamDialog from './ui/AddStreamDialog';
import Stream from './ui/Stream';
import { socialMediaStream } from '../types';
import { saveStreamToDB, getStreamFromDB } from '../api/appwrite/api';
import StreamContentRightBar from './StreamContentRightBar';

interface SocialListeningContentProps {
    stream: socialMediaStream;
    displayAddStream: boolean;
    onToggleDisplayRightBar: () => void;
}

export default function SocialListeningContent({ stream, displayAddStream, onToggleDisplayRightBar }: SocialListeningContentProps) {

    const [accountName, setAccountName] = useState<string>('');
    const [displayStream, setdisplayStream] = useState(false);

    function addStream(username: string) {
        setAccountName(username);
    }

    useEffect(() => {
        if (accountName !== '') {
            setdisplayStream(true);
        }
    }, [stream, accountName]);

    const handleStream = (value: string) => {
        if (value === 'delete') {
            setdisplayStream(false);
            setAccountName('');
        }
    };

    return (

        <section className="flex ">
            <div className='flex-grow border-r-2 max-w-[600px]'>
                {displayStream ? (
                    <Stream username={accountName} onValueReturn={handleStream} />
                ) : (
                    <div className="flex flex-col justify-center items-center min-h-[650px] w-full">
                        <div className="py-5">
                            <img src="/src/assets/icons/EmptyReportBoardIcon.svg" alt="emptyPage"
                                className="invert-white" />
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-center">
                            <p className="font-bold text-md">Add a stream to get live feeds from your account</p>

                        </div>
                    </div>
                )}
            </div>
            {displayAddStream && (
                <StreamContentRightBar addStream={addStream} onToggleDisplayRightBar={onToggleDisplayRightBar} />
            )}
        </section>


    )
}

