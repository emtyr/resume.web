import { useState } from 'react';
import Skillchart from './skillChart';
import Tabutton from './Tabutton';
import { skillchart } from '~/data/text';
const Skills = () => {
  const [activeTab, setactiveTab] = useState({
    name: 'businessOp',
    color: 'pink',
  });
  console.log(activeTab);
  return (
    <section
      id="skills"
      className="w-full h-full flex flex-col pt-4 justify-end bg-[#1C202B]">
      <div className="flex flex-col w-full h-full justify-center items-center">
        <div className="flex space-x-12">
          <Tabutton
            text="Business Operations"
            color="pink"
            onClick={() => setactiveTab({ name: 'businessOp', color: 'pink' })}
          />
          <Tabutton
            text="Code"
            color="blue"
            onClick={() => setactiveTab({ name: 'code', color: 'blue' })}
          />
          <Tabutton
            text="Customer Success"
            color="green"
            onClick={() =>
              setactiveTab({ name: 'CustomerSuccess', color: 'green' })
            }
          />
        </div>
      </div>
      <Skillchart activeTab={activeTab} data={skillchart} />
    </section>
  );
};

export default Skills;
