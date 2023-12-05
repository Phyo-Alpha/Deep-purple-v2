const TopSidebar = () => {
    return (
        <section className="sticky top-0 z-50 bg-purple-2 w-full">
            <div className="flex justify-between py-5 px-5 ">
                <p className="font-mono font-bold text-xl">
                    TopSideBar
                </p>

                <button className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 rounded">
                    Sign Out
                </button>

            </div>
            <hr />
        </section>


    )
}

export default TopSidebar