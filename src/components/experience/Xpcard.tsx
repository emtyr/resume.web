import { XPCardProps } from './props';
import Bula from './Bula';

const xpcard = ({
  text,
  side,
  company,
  position,
  startDate,
  endDate,
}: XPCardProps) => (
  <div
    className={`flex  items-center justify-end gap-5 ${
      (side === 'left' && 'flex-row -translate-x-1/2 ml-32') ||
      (side === 'right' && 'flex-row-reverse translate-x-1/2 mr-32')
    }`}>
    <div className="w-96 bg-slate-600 p-8 flex items-center relative rounded-2xl">
      <div
        className={`w-8 h-8 bg-slate-600 rotate-45 absolute ${
          (side === 'left' && 'right-0 -mr-2') ||
          (side === 'right' && 'left-0 -ml-2')
        }`}
      />
      <div>
        <div className="text-3xl">{company}</div>
        <div className="text-xl py-4">{position}</div>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
    <Bula startDate={startDate} endDate={endDate} />
  </div>
);
export default xpcard;
