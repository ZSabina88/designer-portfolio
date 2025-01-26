import ContactForm from "../components/ContactForm/ContactForm";
import Icons from "../components/ContactPageIcons/Icons";
import Divider from "@mui/material/Divider";


const Contact: React.FC = () => {
  return (
    <section className='items-center gap-4 overflow-visible'>
      <p>If you liked my work, you can message me.</p>
      <ContactForm />
      <Divider className="w-[50%] before:border-orange-300 after:border-orange-300" variant="middle">OR</Divider>
      <p>Find me on social media</p>
      <Icons />
    </section>
  );
}

export default Contact;