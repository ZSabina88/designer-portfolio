'use client';
import { motion, useAnimate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';


const ArchCard: React.FC<{ name: string, size: string }> = ({ name, size }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      const cursorClick = async () => {
        await animate(
          "#border-cursor",
          { scale: [1, 1.5, 1] },
          { duration: 0.2, ease: "easeInOut" }
        );
        await animate(
          "#border-cursor",
          { x: 250 },
          { duration: 1.9, ease: "easeInOut", delay: 0.1 }
        );
        await animate(
          "#border-cursor",
          { scale: [1, 1.5, 1] },
          { duration: 0.2, ease: "easeInOut", delay: 0.2 }
        );
        await animate(
          "#border-cursor",
          { y: 289.7 },
          { duration: 1.9, ease: "easeInOut", delay: 0.3 }
        );
        await animate(
          "#border-cursor",
          { scale: [1, 1.5, 1] },
          { duration: 0.2, ease: "easeInOut", delay: 0.2 }
        );
        await animate(
          "#border-cursor",
          { x: 0 },
          { duration: 1.9, ease: "easeInOut", delay: 0.2 }
        );
        await animate(
          "#border-cursor",
          { scale: [1, 1.5, 1] },
          { duration: 0.2, ease: "easeInOut", delay: 0.2 }
        );
        await animate(
          "#border-cursor",
          { y: 0 },
          { duration: 1.9, ease: "easeInOut", delay: 0.3 }
        );
        await animate(
          "#border-cursor",
          { scale: [1, 1.5, 1] },
          { duration: 0.2, ease: "easeInOut", delay: 0.2 }
        );
        await animate(
          "#border-cursor",
          { display: 'none' },
          { delay: 0.2 }
        );
      };

      const lineApppear = async ()=>{
        await animate(
          "#upper-line",
          {pathLength:  1},
          {duration: 2, delay: 0.3, ease: "easeInOut" }
        );
        await animate(
          "#right-line",
          {pathLength: 1},
          {duration: 2, delay: 0.6, ease: "easeInOut" }
        );
        await animate(
          "#bottom-line",
          {pathLength: 1},
          {duration: 2, delay: 0.6, ease: "easeInOut" }
        );
        await animate(
          "#left-line",
          {pathLength: 1},
          {duration: 2, delay: 0.6, ease: "easeInOut" }
        );
      }
      cursorClick();
      lineApppear();
    }
  }, [isInView]);
  return (
    <div className="relative w-[250px] h-[300px] px-3 py-12 flex flex-col justify-between items-center gap-4 " ref={scope} >
      <svg width="254" height="300" viewBox="0 0 254 300" fill="none"
        className='absolute top-0 left-0'
      >
        <motion.path d="M2 1H252" stroke="white" strokeWidth="2"
          initial={{ pathLength: 0 }}
          id="upper-line"
        />
        <motion.path d="M6 6H247" stroke="white" strokeWidth="2"
          initial={{ pathLength: 0 }}
          id="upper-line"
        />
        <motion.path d="M253 0V300" stroke="white" strokeWidth="2"
          initial={{ pathLength: 0 }}
          id="right-line"
        />
        <motion.path d="M248 5V294" stroke="white" strokeWidth="2"
          initial={{ pathLength: 0 }}
          id="right-line"
        />
        <motion.path d="M252 299H2" stroke="white" strokeWidth="2"
          initial={{ pathLength: 0 }}
          id="bottom-line"
        />
        <motion.path d="M247 293H6" stroke="white" strokeWidth="2"
          initial={{ pathLength: 0 }}
          id="bottom-line"
        />
        <motion.path d="M7 292V7" stroke="white" strokeWidth="2"
          initial={{ pathLength: 0 }}
          id="left-line"
        />
        <motion.path d="M1 300V0" stroke="white" strokeWidth="2"
          initial={{ pathLength: 0 }}
          id="left-line"
        />
      </svg>
      <p>{name}</p>
      <p>{size}</p>
      <span ref={scope}>
        <motion.svg width="30" height="30" viewBox="0 0 30 30" fill="none"
          className='absolute -top-3 -left-3  z-50'
          style={{ filter: 'drop-shadow(0px 1px 1px lime)' }}
          id="border-cursor"
        >
          <rect x="11.5" y="11.5" width="7" height="7" stroke="white" />
          <path d="M15 0V30" stroke="white" strokeWidth="2" />
          <path d="M0 15L30 15" stroke="white" strokeWidth="2" />
        </motion.svg>
      </span>
      <button className=' w-[150px] h-[40px] border-white border-2 text-md rounded-sm mt-auto cursor-pointer z-50'
      >
        Gallery
      </button>
    </div>
  );
}

export default ArchCard;