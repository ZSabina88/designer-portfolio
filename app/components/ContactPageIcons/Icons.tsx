'use client';
import { ImLinkedin2 } from "react-icons/im";
import { BiLogoBehance } from "react-icons/bi";
import { BiLogoTelegram } from "react-icons/bi";
import { RiFacebookFill } from "react-icons/ri";
import { PiPhoneFill } from "react-icons/pi";
import IconButton from "./IconButton";

const Icons: React.FC = () => {
    return (
        <div className="flex flex-row gap-20">
            <IconButton href="https://www.linkedin.com/in/zeynalovorkhan" >
                <ImLinkedin2 size={40} color="black" />
            </IconButton>
            <IconButton href="https://www.behance.net/ZeynalovOrkhan" >
                <BiLogoBehance  size={46} color="black"/>
            </IconButton>
            <IconButton href="https://t.me/Orkhan_Zeynalov" >
                <BiLogoTelegram  size={46} color="black"/>
            </IconButton>
            <IconButton href="https://www.facebook.com/derogm" >
                <RiFacebookFill  size={42} color="black"/>
            </IconButton>
            <IconButton href="//" >
                <PiPhoneFill  size={42} color="black"/>
            </IconButton>
        </div>
    )
}

export default Icons
