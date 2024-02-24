import { Button } from "@mui/material";
import SocialMediaPopUp from "../ui/SocialMediaPopup";
import React from "react";

interface StreamTopBarProps {
    onToggleDisplayRightBar: () => void;
}

export default function StreamTopSideBar({ onToggleDisplayRightBar }: StreamTopBarProps) {
    return (
        <section className="px-5 py-4 mt-2 flex flex-col gap-5 justify-center border-b-2">

            <div className="flex flex-row justify-between">
                <p className="text-2xl font-bold">Twitter: Edward</p>
            </div>
            <div className="flex flex-row gap-5 items-center">
                <Button variant="contained" style={{ backgroundColor: "#877EFF" }}
                    onClick={onToggleDisplayRightBar}>
                    Add Stream
                </Button>
                <SocialMediaPopUp />
            </div>
        </section>
    )
}

