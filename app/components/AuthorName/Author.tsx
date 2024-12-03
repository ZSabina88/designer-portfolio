'use client';
import { motion } from "framer-motion";

const proffesion = [
    { text: "Architect", delay: 0.4 },
    { text: "3D Artist", delay: 0.6 },
    { text: "UI/UX Designer", delay: 0.8 },
    { text: "Graphic Designer", delay: 1 },
    { text: "Interior Designer", delay: 1.2 },
]

const Author: React.FC = () => {
    return (
        <div className="mt-32 mr-4 w-[600px] flex flex-col gap-8 text-end overflow-hidden" >
            <motion.h1
                initial={{ fontSize: "32px", opacity: 0 }}
                animate={{ fontSize: "48px", opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            >ORKHAN ZEYNALOV
            </motion.h1>
            {proffesion.map((item, index) => (
                <motion.p
                    className="text-2xl italic"
                    key={index}
                    initial={{ x: 300 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, delay: item.delay, ease: "easeInOut" }}
                >
                    {item.text}
                </motion.p>
            ))}
        </div>
    );
}

export default Author;