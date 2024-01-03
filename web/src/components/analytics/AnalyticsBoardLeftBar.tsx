import { NavLink } from "react-router-dom"
import { MyNavLink } from "../../types"
import { analyticsBoardLinks } from "../../constants"
import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export default function AnalyticsBoardLeftBar() {

    const [isShrunk, setIsShrunk] = useState(false);

    const toggleShrinkNav = () => {
        setIsShrunk(!isShrunk);
    };

    return (
        <nav className="py-5 flex-col justify-between min-w-[250px] max-w-[250px] bg-purple-2 h-screen border-r border-gray-300">
            <div className="flex flex-row justify-center items-center mb-5">
                <p className=" text-2xl font-bold">Analytics</p>



            </div>

            <ul className='px-2 py-5 flex flex-col gap-3 border-t-2'>
                <div className="bg-primary-500 rounded-full p-2 " onClick={toggleShrinkNav} role="button" tabIndex={0} style={{
                    position: 'absolute', top: '50%',
                    left: '20%', transform: 'translateY(-50%)'
                }}>
                    <div className="pl-2 py-1">
                        <ArrowBackIosIcon />
                    </div>
                </div>
                {analyticsBoardLinks?.map((link: MyNavLink) => {
                    return (
                        <li key={link.label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={link.route}
                                className="flex flex-row gap-3
                                    items-center p-4"
                            >
                                <img src={link.imgURL} alt={link.label}
                                    className={``} width={30} height={30}
                                />
                                <p className="text-sm">{link.label}</p>

                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

