import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { NavLink } from 'react-router-dom';
import ReportBoardTopBarSelectDropDown from './ui/ReportBoardTopBarSelectDropDown';

export default function ReportBoardTopSideBar() {
    return (
        <section className='flex flex-col py-5 border-b-2 px-10'>
            <div className='flex flex-row items-center justify-between'>
                <div className='px-5 flex flex-row gap-5 items-center'>
                    <NavLink className='px-2 py-2 rounded-full base-medium bg-primary-500' to='/report'>
                        <ArrowBackIosNewIcon />
                    </NavLink>
                    <p className='text-xl font-bold'>Report</p>
                </div>
                <div>
                    <p className='font-bold text-lg'>SignOut</p>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-12 items-center justify-center pl-48'>
                    <p className='font-bold text-lg'>Compare</p>
                    <div>
                        <ReportBoardTopBarSelectDropDown />
                    </div>
                    <p>
                        with
                    </p>
                    <div>
                        <ReportBoardTopBarSelectDropDown />
                    </div>
                </div>
                <div>
                    <p className='font-bold text-lg'>Export</p>
                </div>
            </div>
        </section>
    )
}