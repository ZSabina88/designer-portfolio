'use client';
import { ImLinkedin2 } from "react-icons/im";
import { BiLogoBehance } from "react-icons/bi";
import { BiLogoTelegram } from "react-icons/bi";
import { RiFacebookFill } from "react-icons/ri";
import { PiPhoneFill } from "react-icons/pi";
import IconButton from "./IconButton";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, y: 200 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 60,
            staggerChildren: 0.1,
            when: "beforeChildren"
        }
    }
};



const Icons: React.FC = () => {
    return (
        <motion.div className="flex flex-row gap-20"
            variants={variants}
            initial="hidden"
            animate="visible"
        >
            <IconButton href="https://www.linkedin.com/in/zeynalovorkhan" >
                <ImLinkedin2 size={24} color="white" />
            </IconButton>
            <IconButton href="https://www.behance.net/ZeynalovOrkhan" >
                <BiLogoBehance size={24} color="white" />
            </IconButton>
            <IconButton href="https://t.me/Orkhan_Zeynalov" >
                <BiLogoTelegram size={24} color="white" />
            </IconButton>
            <IconButton href="https://www.facebook.com/derogm" >
                <RiFacebookFill size={24} color="white" />
            </IconButton>
            <IconButton href="//" >
                <PiPhoneFill size={24} color="white" />
            </IconButton>
        </motion.div>
    )
}

export default Icons
