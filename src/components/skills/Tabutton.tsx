import { TabuttonProps } from './props';

const Tabutton = ({ text, color, onClick }: TabuttonProps) => (
  <button
    onClick={onClick}
    className={`w-48 h-12 flex flex-col justify-center rounded-md items-center overflow-hidden relative bg-[#333333] border-l-4 ${
      (color === 'pink' && 'border-[#F3377A] focus:bg-[#F3377A]') ||
      (color === 'blue' && 'border-[#1b7ee4] focus:bg-[#1b7ee4]') ||
      (color === 'green' && 'border-[#A5DA26] focus:bg-[#A5DA26]')
    }  group`}>
    <div
      className={`w-full h-0 group-hover:h-full top-0 absolute group-hover:transition-[height] duration-300 ease-in-out ${
        (color === 'pink' && 'bg-[#F3377A]') ||
        (color === 'blue' && 'bg-[#1b7ee4]') ||
        (color === 'green' && 'bg-[#A5DA26]')
      }`}></div>
    <div className="group-hover:text-gray-900 group-focus:text-gray-900 relative">
      <div className="-bottom-12 group-hover:translate-y-12 duration-300 ease-in-out group-focus:translate-y-0">
        {text}
      </div>
      <div className="absolute -top-12 group-hover:translate-y-12 group-focus:translate-y-0 duration-300 ease-in-out">
        {text}
      </div>
    </div>
  </button>
);

export default Tabutton;
