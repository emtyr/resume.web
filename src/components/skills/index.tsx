import { useState } from 'react';
import Tabutton from './Tabutton';
const Skills = () => {
  const [activeTab, setactiveTab] = useState('design');
  return (
    <section className="w-full min-h-full flex flex-col space-y-4 justify-between bg-[#1C202B]">
      <div className="flex flex-col w-full h-full justify-center items-center py-8">
        <div className="flex space-x-12">
          <Tabutton
            text="Design"
            color="pink"
            onClick={() => setactiveTab('design')}
          />
          <Tabutton
            text="Code"
            color="blue"
            onClick={() => setactiveTab('code')}
          />
          <Tabutton
            text="Smoke"
            color="green"
            onClick={() => setactiveTab('smoke')}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
