'use client';
import { useState } from 'react';
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { SliderData } from '../../utils/sliderData';

interface Props {
  data: SliderData[];
}
const ArchSlider: React.FC<Props> = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide)


  const nextBtn = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  };

  const prevBtn = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  };

  return (
    <>
      {/* <div className='mt-20 flex flex-col'> */}
      <ul className=' flex flex-row items-center justify-center gap-4 overflow-hidden'>
        {data?.map((slide, index) => {
          return (
            <li key={index} className={index === currentSlide ? 'w-[100vw] h-[100vh] ' : 'w-[30%] h-[500px] hidden'} >
              <img className='w-full h-full' src={slide.image} alt={slide.alt} />
            </li>
          );
        })}
      </ul>
      <div className='absolute right-[50px] bottom-[30px] flex flex-col'>
        <ul className='flex flex-row gap-4 items-center justify-center'>
          {data?.map((slide, index) => {
            return (
              <li key={index} className={index === currentSlide ? 'w-[200px] h-[240px]' : 'w-[180px] h-[200px]'}>
                <img className='w-full h-full' src={slide.image} alt={slide.alt} />
              </li>
            );
          })}
        </ul>
        <div className=' mt-6 mx-auto flex flex-row gap-6 cursor-pointer'>
          <BiSolidLeftArrow size={24} color='#fff' onClick={prevBtn} />
          <BiSolidRightArrow size={24} color='#fff' onClick={nextBtn} />
        </div>
      </div>

      {/* </div> */}
    </>
  );
}

export default ArchSlider;
