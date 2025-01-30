'use client';
import { motion } from "framer-motion";

const profession = [
    { text: "Architect" },
    { text: "3D Artist" },
    { text: "UI/UX Designer" },
    { text: "Graphic Designer" },
    { text: "Interior Designer" },
];

const variants = {
    hidden: {x: 600}, 
    visible: {
        x: 0,
        transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 60,
            staggerChildren: 0.1,
            when: "beforeChildren"
        }
    }
};

const childVariants = {
    hidden: {x: 600}, 
    visible: {
        x: 0,
        transition: {
            // duration: 0.3,
            type: "spring",
            stiffness: 60
        }
    }
};

const Author: React.FC = () => {
    return (
        <motion.div className="mt-32 mr-4 w-[600px] flex flex-col gap-8 text-end overflow-hidden text-5xl" 
        variants= {variants}
        initial="hidden"
        animate="visible"
        >
            <h1
            >ORKHAN ZEYNALOV
            </h1>
            {profession.map((item, index) => (
                <motion.p
                    className="text-2xl italic"
                    key={index}
                    variants={childVariants}
                >
                    {item.text}
                </motion.p>
            ))}
        </motion.div>
    );
}

export default Author;