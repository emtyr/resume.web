import ContactForm from './Contactform';
import Contactinfo from './Contactinfo';
const Contact = () => (
  <section id="contact" className="flex bg-[#1c202b]  justify-center py-16">
    <div className="flex flex-col md:flex-row w-full max-w-5xl gap-4">
      <ContactForm />
      <Contactinfo />
    </div>
  </section>
);

export default Contact;
