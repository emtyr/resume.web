import { Navmenu } from '~/data/text';

const Navbar = () => {
  const hasLinkScrollHandler = (sectionId: string) => {
    setTimeout(() => {
      if (sectionId !== '') {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    });
  };
  return (
    <div className="flex w-screen h-20 bg-[#1E1E1E] text-white px-10 items-center justify-end">
      <ul className="flex space-x-10">
        {Navmenu.map(item => (
          <li key={item.hash}>
            <a href="#id" onClick={() => hasLinkScrollHandler(item.hash)}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Navbar;
