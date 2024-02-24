import { Link, NavLink } from 'react-router-dom';
import { sidebarLinks } from "../constants";
import { MyNavLink } from '../types';
import SignOutButton from './ui/SignOutButton';
import logo from '../assets/images/logo.png';
import { useEffect, useState } from 'react';
import { getUsername } from '../context/AuthContext';
import React from "react";

const LeftSidebar = () => {

    const [currentUser, setCurrentUser] = useState({} as any);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUsername();
            setCurrentUser(user);
        }
        fetchUser();
    }, [currentUser])


    return (
        <nav className="flex flex-col justify-between max-w-[80px] min-w-[80px] h-screen bg-purple-1 fixed">
            <div className="pt-5 flex flex-col gap-8 items-center">
                <Link to="/" className="flex gap-3 items-center">
                    <img src={logo} alt="logo" width={50} height={36} />
                </Link>

                <ul className='flex flex-col'>
                    {currentUser === 'theoed' && sidebarLinks?.map((link: MyNavLink) => {
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

                {currentUser === 'account1' && (
                    <ul className='flex flex-col gap-3'>
                        <li key={sidebarLinks[0].label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={sidebarLinks[0].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[0].imgURL} alt={sidebarLinks[0].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>
                        <li key={sidebarLinks[1].label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={sidebarLinks[1].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[1].imgURL} alt={sidebarLinks[1].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>
                        <li key={sidebarLinks[2].label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={sidebarLinks[2].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[2].imgURL} alt={sidebarLinks[2].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>
                        <li key={sidebarLinks[3].label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={sidebarLinks[3].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[3].imgURL} alt={sidebarLinks[2].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>

                    </ul>
                )}

                {currentUser === 'account2' && (
                    <ul className='flex flex-col gap-3'>
                        <li key={sidebarLinks[5].label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={sidebarLinks[5].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[5].imgURL} alt={sidebarLinks[5].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>
                        <li key={sidebarLinks[4].label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={sidebarLinks[4].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[4].imgURL} alt={sidebarLinks[4].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>


                    </ul>
                )}

                {currentUser === 'account3' && (
                    <ul className='flex flex-col gap-3'>
                        <li key={sidebarLinks[6].label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={sidebarLinks[6].route}
                                className="flex gap-10 items-center p-4"
                            >
                                <img src={sidebarLinks[6].imgURL} alt={sidebarLinks[6].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>
                        <li key={sidebarLinks[7].label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={sidebarLinks[7].route}
                                className="flex gap-10 items-center p-5"
                            >
                                <img src={sidebarLinks[7].imgURL} alt={sidebarLinks[7].label} width={20} height={20}
                                    className={`group-hover:invert-white ${'invert-white'}`}
                                />
                            </NavLink>
                        </li>


                    </ul>
                )}



            </div>

            <div className='pt-7'>
                <SignOutButton />
            </div>
        </nav>
    )
}

export default LeftSidebar