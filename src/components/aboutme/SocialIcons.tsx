import { aboutme } from '../../data/text';

const SocialIcons = () => (
  <div className="flex items-center gap-8 z-10">
    <div className="w-full flex flex-col space-y-4 items-center">
      <div className="w-[32ch] font-gib text-6xl mb-1 flex text-center">
        {aboutme.left.tagline}
      </div>
      <div className="w-1/2 h-1 bg-white" />
      <div className="flex gap-4 justify-center">
        <a
          href="https://www.linkedin.com/in/flavius-emanuel-t-a1721078/"
          target="_blank"
          rel="noreferrer">
          <img
            className="brightness-0 invert hover:brightness-100 hover:invert-0 ease-in duration-300"
            src="/images/icons/linkedin-filled.svg"
            alt="linkedIn Icon"
          />
        </a>
        <a href="https://github.com/emtyr" target="_blank" rel="noreferrer">
          <img
            className="brightness-0 invert hover:brightness-100 hover:invert-0 ease-in duration-300"
            src="/images/icons/github-filled.svg"
            alt="Github Icon"
          />
        </a>
      </div>
    </div>
  </div>
);
export default SocialIcons;
