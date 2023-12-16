import SwitchAccountDropDown from "./ui/SwitchAccountDropDown";

interface TopSidebarProps {
    title: string | undefined;
}

export default function AnalyticsTopSidebar({ title }: TopSidebarProps) {
    return (
        <section>
            <div className="sticky py-2 top-0 z-50 bg-purple-2 w-full border-b-2">
                <div className="flex justify-between px-5 ">
                    <div className="flex flex-row gap-3 justify-center items-center">

                        <p className="font-bold text-3xl text-light-1">{title}</p>
                        <div className="sticky top-0 z-50 bg-purple-2 w-full px-5">
                            <div>
                                <SwitchAccountDropDown />
                            </div>
                        </div>
                    </div>


                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 rounded">
                        Sign Out
                    </button>

                </div>
            </div>
        </section>



    )
}