import { BulaProps } from './props';

const Bula = ({ startDate, endDate }: BulaProps) => (
  <div className="flex flex-col items-center space-y-2 text-center -mt-14 bg-experience-section py-2">
    <div className="w-12 h-12 rounded-full bg-[#333333]"></div>
    <div className="w-32 h-12 rounded-md bg-[#333333]">
      {startDate} to {endDate}
    </div>
  </div>
);

export default Bula;
