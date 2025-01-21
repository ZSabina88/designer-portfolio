'use client';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.section 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    >
      <p className="py-4 pl-12 pr-40 text-wrap indent-12 text-xl">
      Hello, I’m Orkhan Zeynalov, a passionate Designer and Architect committed to crafting meaningful spaces and designs that inspire and endure. With a background in Architectural Design from Azerbaijan State Architecture and Construction University and over 20 years of experience, I specialize in modern and neoclassic design, functional interior design.
      </p>
      <p className="py-4 pl-12 pr-40 text-wrap indent-12 text-xl">I believe that great design stems from understanding the client’s needs and blending creativity with functionality. Each project is an opportunity to tell a story of a place, a purpose, and the people who inhabit it.</p>
        <ul className="py-4 pl-12 pr-40 text-wrap indent-12 text-xl list-disc">
        I expertise in:
          <li className="indent-2 my-4 ml-16">
            <strong>Architectural Design:</strong>&nbsp; &nbsp;
           Conceptualizing and bringing to life residential, commercial, and public spaces.
          </li>
          <li className="indent-2 mb-4 ml-16">
          <strong>Interior Design:</strong>&nbsp; &nbsp;
          Transforming interiors into comfortable, aesthetic, and functional environments.
          </li>
          <li className="indent-2 mb-4 ml-16">
          <strong>Graphic Design:</strong>&nbsp; &nbsp;
          Crafting visually compelling designs for branding, presentations, and architectural documentation, ensuring clarity and creativity in every visual communication.
          </li>
          <li className="indent-2 mb-4 ml-16">
          <strong>3D Visualization:</strong>&nbsp; &nbsp;
          Creating realistic renderings to help clients visualize their future spaces.
          </li>
        </ul>
        <p className="py-4 pl-12 pr-40 text-wrap indent-12 text-xl">I’m always excited to collaborate with clients who share a passion for design and innovation. Whether you’re looking to transform a space, develop a concept, or just explore creative possibilities, I’d love to connect.</p>
    </motion.section>
  );
}

export default About;



// import React from 'react';
// import ArchSlider from '../components/ArchSlider/ArchSlider';
// import { sliderData } from '../utils/sliderData';

// const About: React.FC = () => {
//   return (
//     <div >
//       <ArchSlider data={sliderData}/>
//     </div>
//   );
// }

// export default About;
