import { aboutme } from '../../data/text';

const Introduction = () => (
  <section className="w-2/3 lg:w-1/2 h-full flex flex-col space-y-4 lg:justify-end">
    <div className="w-full flex">{aboutme.right.description}</div>
    <div className="w-full flex">
      <button className="flex h-10 px-4 items-center rounded-xl bg-gray-300 text-stone-900 hover:bg-slate-800 hover:text-white ease-in duration-300">
        {aboutme.right.button}
      </button>
    </div>
  </section>
);

export default Introduction;
