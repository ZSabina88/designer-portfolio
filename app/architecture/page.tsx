import ArchCard from '../components/ArchCard/ArchCard';
import { archCards } from '../utils/archcard';

const Arch: React.FC = () => {
  return (
    <section className='items-center'>
      <ul className='w-[90%] h-full px-4 flex flex-wrap justify-center gap-8'>
        {archCards.map((card, index) => (
          <ArchCard key={index} name={card.name} size={card.size} />
        ))}
      </ul>
    </section>
  );
}

export default Arch;