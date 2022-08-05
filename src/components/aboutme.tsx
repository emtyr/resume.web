import { aboutme } from '../data/text';
const AboutMe = () => {
  const title = aboutme.title.split('-');
  return (
    <div className="w-screen h-full flex flex-col items-center bg-slate-900 leading-normal p-8">
      <div className="w-full flex flex-col items-center space-y-16 max-w-7xl">
        <div className="w-full flex flex-col items-center">
          <h3 className="font-bold">
            <span className="text-red-700">{title[0]}</span>
            <span className="text-gray-700"> {title[1]}</span>
          </h3>
          <div className="font-gib text-3xl">{aboutme.subtitle}</div>
        </div>
        <div className="w-full flex px-16 items-center space-x-8">
          <div className="w-1/3 flex flex-col space-y-4 items-center">
            <div className="w-[32ch] font-gib text-2xl mb-1 flex text-center">
              {aboutme.left.tagline}
            </div>
            <div className="w-1/3 h-1 bg-gray-700" />
            <div className="flex gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/flavius-emanuel-t-a1721078/"
                target="_blank">
                <img
                  className="hover:brightness-0 hover:invert ease-in duration-300"
                  src="/images/icons/linkedin-filled.svg"
                  alt="linkedIn Icon"
                />
              </a>
              <a href="https://github.com/emtyr" target="_blank">
                <img
                  className="hover:brightness-0 hover:invert ease-in duration-300"
                  src="/images/icons/github-filled.svg"
                  alt="Github Icon"
                />
              </a>
            </div>
          </div>
          <div className="w-1/3 flex flex-col">
            <div className="w-full h-80 relative rounded-2xl overflow-hidden flex justify-center items-center">
              <img
                src={aboutme.center.image}
                className="absolute w-full h-auto object-cover object-center"
                alt=""
              />
            </div>
          </div>
          <div className="w-1/3 flex flex-col space-y-4">
            <div className="w-full flex flex-col bg-slate-800 rounded-xl items-center p-4">
              <div className="w-full text-4xl text-center">
                {aboutme.right.name}
              </div>
              <div className="w-full text-center">{aboutme.right.title}</div>
            </div>
            <div className="w-full flex">{aboutme.right.description}</div>
            <div className="w-full flex">
              <button className="flex h-10 px-4 items-center rounded-xl bg-gray-300 text-stone-900 hover:bg-slate-800 hover:text-white ease-in duration-300">
                {aboutme.right.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
