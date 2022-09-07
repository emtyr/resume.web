import Skillchart from './skillChart';
export interface TabuttonProps {
  text: string;
  color: 'pink' | 'blue' | 'green';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ISkillPair {
  name: string;
  value: number;
}

export interface ISkillChart {
  businessOperations: ISkillPair[];
  code: ISkillPair[];
  customerSuccess: ISkillPair[];
}

export type ActiveTab = { name: string; color: string };

export interface Skillchartprops {
  activeTab: ActiveTab;
  data: ISkillChart;
}

export interface SkillBarprops {
  name: string;
  color: string;
  value: number;
}
