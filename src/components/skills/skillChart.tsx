import { Skillchartprops, SkillBarprops, ActiveTab } from './props';
import SkillBar from './skillBar';

const Skillchart = ({ activeTab, data }: Skillchartprops) => {
  const selectDataByActiveTab = (activeTab: ActiveTab) => {
    if (activeTab.name === 'businessOp') {
      return data.businessOperations;
    }
    if (activeTab.name === 'code') {
      return data.code;
    }
    if (activeTab.name === 'CustomerSuccess') {
      return data.customerSuccess;
    }
  };
  console.log(activeTab);
  return (
    <div className="w-full h-88 flex justify-center items-end gap-6">
      {selectDataByActiveTab(activeTab).map(
        ({ name, value }: SkillBarprops) => (
          <SkillBar
            key={name}
            name={name}
            value={value}
            color={activeTab.color}
          />
        ),
      )}
    </div>
  );
};

export default Skillchart;
