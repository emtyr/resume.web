import { aboutme } from '../../data/text';

const ProfilePicture = () => (
  <div className="flex flex-col space-y-4 items-center">
    <div className="w-66 h-88 relative rounded-2xl overflow-hidden flex justify-center items-center">
      <img
        src={aboutme.center.image}
        className="absolute w-auto h-full object-cover object-center rounded-2xl"
        alt=""
      />
    </div>
    <div className="w-full flex flex-col bg-slate-800 rounded-xl items-center p-4">
      <div className="w-full text-4xl text-center">{aboutme.right.name}</div>
      <div className="text-center">{aboutme.right.title}</div>
    </div>
  </div>
);
export default ProfilePicture;
