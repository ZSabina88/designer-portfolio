'use client';
import { motion } from "framer-motion";

const profession = [
    { text: "Architect", delay: 0.4 },
    { text: "3D Artist", delay: 0.6 },
    { text: "UI/UX Designer", delay: 0.8 },
    { text: "Graphic Designer", delay: 1 },
    { text: "Interior Designer", delay: 1.2 },
]

const Author: React.FC = () => {
    return (
        <div className="mt-32 mr-4 w-[600px] flex flex-col gap-8 text-end overflow-hidden text-5xl" >
            <motion.h1
                initial={{ x: 600 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 60 }}
            >ORKHAN ZEYNALOV
            </motion.h1>
            {profession.map((item, index) => (
                <motion.p
                    className="text-2xl italic"
                    key={index}
                    initial={{ x: 300 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, delay: item.delay, type: "spring", stiffness: 60 }}
                >
                    {item.text}
                </motion.p>
            ))}
        </div>
    );
}

export default Author;