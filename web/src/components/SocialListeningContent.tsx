import { useState } from 'react';
import AddStreamDialog from './ui/AddStreamDialog';
import Stream from './ui/Stream';

const SocialListeningContent = () => {


    const [displayStream, setdisplayStream] = useState(false);

    const handleValueReturn = (value: string) => {
        if (value === 'edwardphyoo') {
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
                <Stream onValueReturn={handleStream} />
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

export default SocialListeningContent