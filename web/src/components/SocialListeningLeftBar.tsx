import AddCircleIcon from '@mui/icons-material/AddCircle';

const SocialListeningLeftBar = () => {
    return (
        <nav className="px-6 py-5 flex-col justify-between min-w-[100px] bg-purple-2 h-screen border-r border-gray-300">
            <div className="flex flex-col gap-5">
                <p className="text-xl font-bold">Social profiles</p>
                <div className="flex flex-row items-center gap-2">
                    <AddCircleIcon />
                    <p className="text-sm">Add new profile</p>
                </div>
                <hr />
            </div>

        </nav>
    )
}

export default SocialListeningLeftBar