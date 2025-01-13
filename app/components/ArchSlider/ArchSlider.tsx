'use client';
import { useState, useEffect } from 'react';
import { motion, useAnimate } from 'framer-motion';
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { SliderData } from '../../utils/sliderData';

interface Props {
  data: SliderData[];
};

const ImageVariants = {
  expanded: { width: '100vw', height: '100vh', left: 0, top: 0, opacity: 1, display: "block", zIndex: "-1", },
  shrink: { width: '180px', height: '220px', bottom: "100px", opacity: 0, position: 'fixed', display: "none" },
}

const ArchSlider: React.FC<Props> = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const nextBtn = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
    setDirection('next');
  };

  const prevBtn = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
    // setDirection('prev');
  };

  return (
    <>
      <ul className=' flex flex-row items-center justify-center gap-4 overflow-hidden ' >
        {data?.map((slide, index) => {
          return (
            <motion.li key={index}
              variants={ImageVariants}
              initial={index === 0 && { width: '100vw', height: '100vh' }}
              animate={currentSlide === index ? direction === "next" ? 'expanded' : 'shrink' : 'shrink'}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <img className='w-full h-full' src={slide.image} alt={slide.alt} />
            </motion.li>
          );
        })}
      </ul>

      <div className='absolute right-[50px] bottom-[30px] flex flex-col opacity-30 hover:opacity-100'>
        <ul  className='flex flex-row gap-4 items-center justify-center '>
          {data?.map((slide, index) => {
            return (
              <li key={index} className={index === currentSlide ? 'z-50 fixed right-[35%] w-[200px] h-[240px] '
                : 'w-[180px] h-[230px]'}>
                <img className='w-full h-full rounded-2xl border-2 border-slate-800 shadow-lg shadow-stone-950' src={slide.image} alt={slide.alt} />
              </li>
            );
          })}
        </ul>
        <div className=' mt-12 mx-auto flex flex-row gap-6 cursor-pointer'>
          <BiSolidLeftArrow size={24} color='#fff' onClick={prevBtn} />
          <BiSolidRightArrow size={24} color='#fff' onClick={nextBtn} />
        </div>
      </div>
    </>
  );
}

export default ArchSlider;