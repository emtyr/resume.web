import { aboutme } from '../../data/text';

const ProfilePicture = () => (
  <div className="w-full lg:w-1/3 flex flex-col space-y-4 items-center">
    <div className="w-full h-80 relative rounded-2xl overflow-hidden flex justify-center items-center">
      <img
        src={aboutme.center.image}
        className="absolute w-auto h-full object-cover object-center rounded-2xl"
        alt=""
      />
    </div>
    <div className="w-2/3 lg:w-full flex flex-col bg-slate-800 rounded-xl items-center p-4">
      <div className="w-full text-4xl text-center">{aboutme.right.name}</div>
      <div className="w-full text-center">{aboutme.right.title}</div>
    </div>
  </div>
);
export default ProfilePicture;
