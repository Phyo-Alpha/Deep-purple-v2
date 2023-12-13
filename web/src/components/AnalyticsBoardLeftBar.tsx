import { NavLink } from "react-router-dom"
import { MyNavLink } from "../types"
import { analyticsBoardLinks } from "../constants"


export default function AnalyticsBoardLeftBar() {
    return (
        <nav className="py-5 flex-col justify-between max-w-[300px] bg-purple-2 h-screen border-r border-gray-300">
            <div className="px-6 py-10 flex flex-col gap-5 mb-10 ">
                <p className=" text-2xl font-bold">Analytics</p>
            </div>

            <ul className='px-4 py-5 flex flex-col gap-3 border-t-2'>
                {analyticsBoardLinks?.map((link: MyNavLink) => {
                    return (
                        <li key={link.label} className='rounded-full base-medium hover:bg-primary-500 transition'>
                            <NavLink to={link.route}
                                className="flex gap-10
                                    items-center p-4"
                            >
                                <img src={link.imgURL} alt={link.label}
                                    className={``}
                                />
                                <p>{link.label}</p>

                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

