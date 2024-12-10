'use client';
import { motion } from 'framer-motion';

const pathVariants = {
  hidden: {
    // opacity: 0,
    pathLength: 0,
  },
  visible: {
    // opacity: 1,
    pathLength: 1,
    // transition: {
    //   duration: 2,
    //   ease: "easeInOut",
    // },
  },
}

const ArchCard: React.FC = () => {
  return (
    <div className="relative w-[250px] h-[300px] px-3 py-6 flex flex-col justify-between items-center">
      <svg width="254" height="300" viewBox="0 0 254 300" fill="none"
        className='absolute top-0 left-0'
      >
        <motion.path d="M2 1H252" stroke="white" strokeWidth="2"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path d="M6 6H247" stroke="white" strokeWidth="2"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path d="M253 0V300" stroke="white" strokeWidth="2"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2, delay: 1.9, ease: "easeInOut" }}
        />
        <motion.path d="M248 5V294" stroke="white" strokeWidth="2"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2, delay: 1.9, ease: "easeInOut" }}
        />
        <motion.path d="M252 299H2" stroke="white" strokeWidth="2"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2, delay: 3.7, ease: "easeInOut" }}
        />
        <motion.path d="M247 293H6" stroke="white" strokeWidth="2"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2, delay: 3.7, ease: "easeInOut" }}
        />
        <motion.path d="M7 292V7" stroke="white" strokeWidth="2"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2, delay: 5.5, ease: "easeInOut" }}
        />
        <motion.path d="M1 300V0" stroke="white" strokeWidth="2"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2, delay: 5.5, ease: "easeInOut" }}
        />
      </svg>
      <p>project name</p>
      <p>size</p>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
      className='absolute -top-3 -left-3'
      >
        <motion.rect x="12" y="12" width="6" height="6" stroke="white" strokeWidth= "0.5"
        // initial={{ fill: "none" }}
        // animate={{ fill: "white" }}
        // transition={{ duration: 1,  }}
        />
        <path d="M15 0V30" stroke="white" />
        <path d="M0 15L30 15" stroke="white" />
      </svg>
      <button className='w-[150px] h-[50px] bg-white text-black rounded-lg mt-auto'>Gallery</button>
    </div>
  );
}

export default ArchCard;


