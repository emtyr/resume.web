import { Skillchartprops, SkillBarprops } from './props';
import SkillBar from './skillBar';

const Skillchart = ({ activeTab, data }: Skillchartprops) => {
  const selectDataByActiveTab = (activeTab: string) => {
    if (activeTab === 'businessOp') {
      return data.businessOperations;
    }
    if (activeTab === 'code') {
      return data.code;
    }
    if (activeTab === 'success') {
      return data.customerSuccess;
    }
  };
  console.log(activeTab);
  return (
    <div className="w-full h-88 flex justify-center items-end gap-6">
      {selectDataByActiveTab(activeTab).map(
        ({ name, value }: SkillBarprops) => (
          <SkillBar key={name} name={name} value={value} />
        ),
      )}
    </div>
  );
};

export default Skillchart;
