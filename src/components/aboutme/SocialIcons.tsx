import { aboutme } from '../../data/text';

const SocialIcons = () => (
  <div className="flex items-center">
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
);
export default SocialIcons;
