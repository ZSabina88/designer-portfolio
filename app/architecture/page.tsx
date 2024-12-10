import React from 'react';
import ArchCard from '../components/ArchCard/ArchCard';

const Arch: React.FC = () => {
  return (
    <section className='items-center'>
      <div className='w-[90%] h-full px-4'>
        <ArchCard />
      </div>
    </section>
  );
}

export default Arch;