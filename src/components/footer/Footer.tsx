// import ContactForm from '../Contact/Contactform';

import { Copyright } from '~/data/text';
import SocialIcons from '../aboutme/SocialIcons';

const Footer = () => {
  return (
    <section className="w-full h-auto flex flex-col space-y-4 justify-center items-center bg-[#1C202B] bg-divider bg-bottom big-no-repeat bg-cover bg-fixed relative py-24">
      <div className="absolute h-full w-full bg-[#1C202B]/60" />
      <div className="relative">{Copyright.text}</div>
      <SocialIcons />
    </section>
  );
};

export default Footer;
