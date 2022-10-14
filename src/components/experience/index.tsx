import Xpcard from './Xpcard';
import { xpcards } from '../../data/text';
import { XPCardProps } from './props';
const Experience = () => (
  <section
    id="experience"
    className="h-auto w-full bg-experience-section py-16">
    <div className="bg-timeline bg-top bg-repeat-y">
      {xpcards.map(
        ({ company, position, text, startDate, endDate }: XPCardProps, i) => (
          <Xpcard
            key={i}
            company={company}
            position={position}
            startDate={startDate}
            endDate={endDate}
            side={i % 2 === 0 ? 'left' : 'right'}
            text={text}
          />
        ),
      )}
    </div>
  </section>
);
export default Experience;
