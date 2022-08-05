import { hero } from '../data/text';

const Hero = () => {
  const subtitle = hero.subtitle.split('-');
  return (
    <div className="w-screen h-screen bg-black">
      <div className="w-full h-full flex flex-col justify-center items-center space-y-6">
        <div className="text-5xl">{hero.title}</div>
        <div className="text-5xl">{subtitle[0]}</div>
        <div className="text-7xl w-max p-4 pt-1 border-8 border-white">
          {subtitle[1]}
        </div>
        <div className="text-4xl">{hero.roles}</div>
      </div>
    </div>
  );
};
export default Hero;
