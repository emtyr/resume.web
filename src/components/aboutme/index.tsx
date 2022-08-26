import { aboutme } from '../../data/text';
import Introduction from './Introduction';
import ProfilePicture from './ProfilePicture';
import SocialIcons from './SocialIcons';
const AboutMe = () => {
  const title = aboutme.title.split('-');
  return (
    <div className="w-screen min-h-full flex flex-col items-center bg-[#1C202B] leading-normal p-8">
      <div className="w-full flex flex-col items-center space-y-16 max-w-7xl">
        <div className="w-full flex flex-col items-center">
          <h3 className="font-bold">
            <span className="text-red-700">{title[0]}</span>
            <span className="text-gray-700"> {title[1]}</span>
          </h3>
          <div className="font-gib text-3xl">{aboutme.subtitle}</div>
        </div>
        <div className="w-full h-full flex flex-col px-16 gap-8">
          <div className="w-full h-full flex flex-col lg:flex-row gap-8">
            <ProfilePicture />
            <Introduction />
          </div>
          <div className="w-full h-full">
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
