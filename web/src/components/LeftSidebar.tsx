import { Link, NavLink } from 'react-router-dom';
import { sidebarLinks } from "../constants";
import { MyNavLink } from '../types';
import SignOutButton from './ui/SignOutButton';
import logo from '../assets/images/logo.png';
import { log } from 'console';


const LeftSidebar = () => {
    return (
        <nav className="py-5 flex flex-col justify-between max-w-[80px] min-w-[80px] bg-purple-1 ">
            <div className="flex flex-col gap-8 items-center">
                <Link to="/" className="flex gap-3 items-center">
                    <img src={logo} alt="logo" width={50} height={36} />
                </Link>

                <ul className='flex flex-col gap-3'>
                    {sidebarLinks?.map((link: MyNavLink) => {
                        return (
                            <li key={link.label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                                <NavLink to={link.route}
                                    className="flex gap-10
                                    items-center p-4"
                                >
                                    <img src={link.imgURL} alt={link.label} width={20} height={20}
                                        className={`group-hover:invert-white ${'invert-white'}`}
                                    />

                                </NavLink>
                            </li>
                        )
                    })}
                </ul>



            </div>
            <SignOutButton />
        </nav>
    )
}

export default LeftSidebar