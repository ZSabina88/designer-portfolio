'use client';
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { useToggle } from "../hooks/useToggle";


const Navigation: React.FC = () => {
  const [menubar, setMenubar] = useToggle(false);
  return (
    <menu className="absolute top-10 right-4 w-[60%] flex flex-row justify-center  ml-auto z-50">
      <button className="absolute top-1 right-4" onClick={() => setMenubar()}>
        <CgMenuRight color="white" size={36} className="cursor-pointer" />
      </button>
      {menubar && (
        <nav className="w-full h-[50px] flex flex-row items-center pl-4 mr-8 gap-8 text-black rounded-l-full">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/design">Design</Link>
          <Link href="/architecture">Architecture</Link>
          <Link href="/graphic-design">Graphic Design</Link>
          <Link href="/contact">Contact Me</Link>
        </nav>

      )}
    </menu>
  );
}

export default Navigation;
