import { Contact } from '~/data/text';
const Contactinfo = () => (
  <div className="w-1/3 space-y-2">
    <div className="text-2xl font-semibold">Contact Info</div>
    <ul className="space-y-2">
      <li className="flex items-center space-x-2">
        <img src={Contact.phone.icon} alt="" className="w-8 h-8 invert" />
        <span>{Contact.phone.number}</span>
      </li>
      <li className="flex items-center space-x-2">
        <img src={Contact.email.icon} alt="" className="w-8 h-8 invert" />
        <span>{Contact.email.address}</span>
      </li>
      <li className="flex items-center space-x-2">
        <img src={Contact.website.icon} alt="" className="w-8 h-8 invert" />
        <span>{Contact.website.address}</span>
      </li>
    </ul>
  </div>
);
export default Contactinfo;
