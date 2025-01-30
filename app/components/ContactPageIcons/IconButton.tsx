import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
    href: string,
    children?: React.ReactNode
};

const childVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 60
        }
    }
};

const IconButton: React.FC<Props> = ({ href, children }) => {
    return (
        <motion.span
            variants={childVariants}
            style={{
                outline: "none", border: "4px solid #090909", background: "linear-gradient(145deg, #051432,rgb(44, 53, 71))",
                boxShadow: "inset 1px 1px 0px #fefce8, inset -2px -2px 0px #1c1c1c"
            }}
            className="w-16 h-16 bg-white rounded-full pt-[14px] pl-[14px] hover:scale-110 cursor-pointer">
            <Link href={href} rel="noopener noreferrer" target="_blank">
                {children}
            </Link>
        </motion.span>
    )
}

export default IconButton
