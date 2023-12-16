import { Button } from "@mui/material";
import SwitchAccountDropDown from "./ui/SwitchAccountDropDown";

export default function StreamTopSideBar() {
    return (
        <section className="px-5 py-2 mt-1 flex flex-col gap-5 justify-center border-b-2">

            <div className="flex flex-row justify-between">
                <p className="text-2xl font-bold">Twitter: Edward</p>
                <p>Signout</p>
            </div>
            <div className="flex flex-row gap-5 items-center">
                <Button variant="contained" style={{ backgroundColor: "#877EFF" }}>
                    Add Stream
                </Button>
                <Button variant="contained" style={{ backgroundColor: "#877EFF" }}>
                    Add Social Account
                </Button>
                <SwitchAccountDropDown />
            </div>
        </section>
    )
}

