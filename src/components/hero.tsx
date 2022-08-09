import { hero } from '../data/text';

const Hero = () => {
  const subtitle = hero.subtitle.split('-');
  return (
    <div className="w-full h-screen bg-black">
      <div className="w-full h-full flex flex-col justify-center items-center space-y-6 pb-20 px-8">
        <div className="text-5xl">{hero.title}</div>
        <div className="text-5xl">{subtitle[0]}</div>
        <div className="text-5xl sm:text-7xl w-full sm:w-max p-4 pt-1 border-8 border-white text-center">
          {subtitle[1]}
        </div>
        <div className="text-4xl text-center">{hero.roles}</div>
      </div>
    </div>
  );
};
export default Hero;
