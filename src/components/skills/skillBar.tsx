import { SkillBarprops } from './props';

const SkillBar = ({ name, color, value }: SkillBarprops) => (
  <div className="relative w-20 h-full group">
    <div
      style={{ height: `${value}%` }}
      className={`flex w-full justify-center absolute bottom-0 rounded-t-md border-r-4 border-white/[0.5] transition-[height] duration-500 ease-in ${
        (color === 'pink' && 'bg-[#f3377a]') ||
        (color === 'blue' && 'bg-[#1b7ee4]') ||
        (color === 'green' && 'bg-[#A5DA26]')
      }`}
    />
    <div
      style={{ writingMode: 'vertical-rl' }}
      className="relative w-full h-full flex rotate-180 items-center -my-3">
      {name} {value}%
    </div>
  </div>
);

export default SkillBar;
