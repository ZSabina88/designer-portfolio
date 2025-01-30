'use client';
import ContactForm from "../components/ContactForm/ContactForm";
import Icons from "../components/ContactPageIcons/Icons";
import Divider from "@mui/material/Divider";
import { motion } from 'framer-motion';


const Contact: React.FC = () => {
  return (
    <motion.section className='items-center gap-2'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <p>If you liked my work, you can message me.</p>
      <ContactForm />
      <Divider className="w-[50%] before:border-orange-300 after:border-orange-300" variant="middle">OR</Divider>
      <p>Find me on social media</p>
      <Icons />
    </motion.section>
  );
}

export default Contact;