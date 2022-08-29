import { SkillBarprops } from './props';

const SkillBar = ({ name, value }: SkillBarprops) => (
  <div className="w-20 h-full relative">
    <div
      style={{ height: `${value}%` }}
      className=" w-full bg-[#F3377A] absolute bottom-0 rounded-t-md"
    />
    <div
      style={{ writingMode: 'vertical-rl' }}
      className="relative w-full h-full flex rotate-180 items-center -my-3">
      {name} {value}%
    </div>
  </div>
);

export default SkillBar;
