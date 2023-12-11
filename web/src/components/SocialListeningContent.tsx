import { useEffect, useState } from 'react';
import AddStreamDialog from './ui/AddStreamDialog';
import Stream from './ui/Stream';
import { socialMediaStream } from '../types';
import { saveStreamToDB, getStreamFromDB } from '../api/appwrite/api';

interface SocialListeningContentProps {
    stream: socialMediaStream;
}

export default function SocialListeningContent({ stream }: SocialListeningContentProps) {

    const [accountName, setAccountName] = useState<string>('');
    const [displayStream, setdisplayStream] = useState(false);

    useEffect(() => {
        checkStreamAlrCreated(stream).then((res) => {
            if (res === true) {
                setdisplayStream(true);
            }
        });
    }, [stream]);

    async function checkStreamAlrCreated(stream: socialMediaStream) {
        const streamFromDB = await getStreamFromDB(stream.streamName);
        if (streamFromDB === undefined || streamFromDB.total === 0) {
            return false;
        } else {
            console.log(streamFromDB);
            setAccountName(streamFromDB.documents[0].socialmedia_username);
            return true;
        }
    }

    const handleValueReturn = (value: string) => {
        if (value === '' || value === undefined) {
            return;
        } else {
            stream.socialmedia_username = value;
            saveStreamToDB(stream);
            setAccountName(value);
            setdisplayStream(true);
        }
    };

    const handleStream = (value: string) => {
        if (value === 'delete') {
            setdisplayStream(false);
        }
    };

    return (
        <div className="grid grid-cols-2 pt-6">

            {displayStream ? (
                <Stream username={accountName} onValueReturn={handleStream} />
            ) : (
                <div className='bg-purple-1 mx-3 h-160 rounded-3xl border-dashed border-2'>
                    <div className='flex flex-col gap-2 items-center justify-center h-160'>
                        <AddStreamDialog onValueReturn={handleValueReturn} />
                    </div>
                </div>
            )}
        </div>
    )
}

