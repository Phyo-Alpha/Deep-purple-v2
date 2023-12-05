import { Link, NavLink } from 'react-router-dom';
import { sidebarLinks } from "../constants";
import { MyNavLink } from '../types';


const LeftSidebar = () => {
    return (
        <nav className="px-6 py-10 flex-col justify-between min-w-[50px] bg-purple-1 h-screen">
            <div className="flex flex-col gap-8 items-center">
                <Link to="/" className="flex gap-3 items-center">
                    <img src="" alt="logo" width={50} height={36} />
                </Link>

                <Link to={'/'} className="flex gap-3 items-center">
                    <img src={'/src/assets/images/profile-placeholder.svg'} alt="profile"
                        className="h-14 w-14 rounded-full" />

                </Link>

                <ul className='flex flex-col gap-3'>
                    {sidebarLinks?.map((link: MyNavLink) => {
                        return (
                            <li key={link.label} className='rounded-lg base-medium hover:bg-primary-500 transition'>
                                <NavLink to={link.route}
                                    className="flex gap-10
                                    items-center p-4"
                                >
                                    <img src={link.imgURL} alt={link.label}
                                        className={`group-hover:invert-white ${'invert-white'}`}
                                    />

                                </NavLink>
                            </li>
                        )
                    })}
                </ul>

            </div>
        </nav>
    )
}

export default LeftSidebar