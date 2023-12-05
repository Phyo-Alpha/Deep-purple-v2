import AddCircleIcon from '@mui/icons-material/AddCircle';

const SocialListeningLeftBar = () => {
    return (
        <nav className="py-5 flex-col justify-between min-w-[300px] bg-purple-2 h-screen border-r border-gray-300">
            <div className="px-6 flex flex-col gap-5 ">
                <p className=" text-lg font-bold">Social profiles</p>
                <div className="pl-4 pb-5 flex flex-row items-center gap-2 border-b-2">
                    <AddCircleIcon />
                    <p className="text-xs font-bold">Add new profile</p>
                </div>

            </div>

        </nav>
    )
}

export default SocialListeningLeftBar