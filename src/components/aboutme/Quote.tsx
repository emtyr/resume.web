import { aboutme } from '../../data/text';
import { QuoteProps } from './props';

const Quote = ({ text }: QuoteProps) => (
  <div className="flex flex-col items-center z-10">
    <div className="w-[32ch] font-gib text-6xl flex text-center">{text}</div>
    <div className="w-1/2 h-1 bg-white" />
  </div>
);
export default Quote;
