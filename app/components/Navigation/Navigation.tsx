'use client';
import Link from "next/link";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { useToggle } from "../../hooks/useToggle";
import { motion } from "framer-motion";
import { PiTriangleFill } from "react-icons/pi";

const menuItems = [
  { text: "Home", href: "/", leftPosition: 0 },
  { text: "About", href: "/about", leftPosition: 80 },
  { text: "Design", href: "/design", leftPosition: 168 },
  { text: "Architecture", href: "/architecture", leftPosition: 295 },
  { text: "Graphic Design", href: "/graphic-design", leftPosition: 465 },
  { text: "Contact Me", href: "/contact", leftPosition: 627 },
]


const Navigation: React.FC = () => {
  const [menubar, setMenubar] = useToggle(false);
  const [active, setActive] = useState(0);

  return (
    <header className="w-[100vw] h-[50px] flex flex-row justify-end items-center gap-12 fixed top-4">
      <menu className="relative">
        {menubar && (
          <>
            <motion.nav className="flex flex-row gap-4 text-lg uppercase"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, ease: "easeIn", opacity: 1 }}
              transition={{ duration: 2, }}
            >
              {menuItems.map((item, index) => (
                <Link onClick={() => setActive(index)} key={index} href={item.href}>{item.text}</Link>
              ))}
            </motion.nav>
            <motion.div className="absolute top-8 left-5"
              animate={{ x: menuItems[active].leftPosition }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <PiTriangleFill size={14} color="white" />
              </motion.span>
            </motion.div>
          </>
        )}
      </menu>
      <button className="pr-4" onClick={() => setMenubar()}>
        <CgMenuRight color="white" size={36} className="cursor-pointer" />
      </button>
    </header>

  );
}

export default Navigation;