import React from 'react';
import ArchSlider from '../components/ArchSlider/ArchSlider';
import { sliderData } from '../utils/sliderData';

const About: React.FC = () => {
  return (
    <div >
      <ArchSlider data={sliderData}/>
    </div>
  );
}

export default About;
