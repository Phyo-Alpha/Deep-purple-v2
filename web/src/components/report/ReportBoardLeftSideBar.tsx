import { NavLink } from "react-router-dom";
import AddReportDialog from "../ui/AddReportDialog";


export default function ReportBoardLeftSideBar() {
    return (
        <nav className="py-9 flex-col justify-between min-w-[200px] bg-purple-2 h-screen border-r border-gray-300">
            <div className="px-6 flex flex-col gap-5 border-b-2 justify-center items-center">
                <p className=" text-2xl font-bold">My Reports</p>
                <div className='justify-start pb-3  '>
                    <AddReportDialog />
                </div>


            </div>
            <div className='py-3 flex flex-col items-center justify-center border-b-2'>
                <p className='text-md font-bold'>My Reports</p>
                <NavLink to="/report/all-report" className="text-sm text-gray-500 hover:bg-primary-500 rounded-md px-3 py-2 mt-2">
                    All reports
                </NavLink>
            </div>

            <div className="py-3 flex flex-col items-center justify-center border-b-2">
                <p className='text-md font-bold pb-2'>Social Media Reports</p>
                <div className="flex flex-col gap-3 items-center">
                    <NavLink to="/report/all-report" className="text-sm  text-gray-500 hover:bg-primary-500 rounded-md">
                        Instagram Posts
                    </NavLink>
                    <NavLink to="/report/all-report" className="text-sm  text-gray-500 hover:bg-primary-500 rounded-md">
                        LinkedIn Posts
                    </NavLink>
                    <NavLink to="/report/all-report" className="text-sm  text-gray-500 hover:bg-primary-500 rounded-md">
                        Twitter Posts
                    </NavLink>
                    <NavLink to="/report/all-report" className="text-sm  text-gray-500 hover:bg-primary-500 rounded-md">
                        Facebook Posts
                    </NavLink>
                    <NavLink to="/report/all-report" className="text-sm  text-gray-500 hover:bg-primary-500 rounded-md">
                        Youtube Posts
                    </NavLink>
                </div>
            </div>
            <div className="border-b-2">
                <div className="py-3 flex flex-col items-center justify-center ">
                    <p className='text-lg font-bold pb-2'>Organic Reports</p>
                    <div className="flex flex-col gap-3 items-center">
                        <NavLink to="/report/all-report" className="text-sm text-gray-500 hover:bg-primary-500 rounded-md">
                            Audience growth
                        </NavLink>
                        <NavLink to="/report/all-report" className="text-sm text-gray-500 hover:bg-primary-500 rounded-md">
                            Brand engagement
                        </NavLink>
                        <NavLink to="/report/all-report" className="text-sm text-gray-500 hover:bg-primary-500 rounded-md">
                            Post engagement
                        </NavLink>
                        <NavLink to="/report/all-report" className="text-sm text-gray-500 hover:bg-primary-500 rounded-md">
                            Mixed overview
                        </NavLink>
                    </div>

                </div>
            </div>
            <div>
                <div className="py-3 flex flex-col items-center justify-center">



                    <div className="flex flex-col py-5">
                        <NavLink to="/report/all-report"
                            className="flex 
                                    items-center p-4"
                        >
                            <img src="/src/assets/icons/setting.svg" alt="setting-icon"
                                width={40}
                                className="invert-white" />
                            <p>Setting</p>

                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

