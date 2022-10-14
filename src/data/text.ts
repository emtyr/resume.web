import { ISkillChart } from '~/components/skills/props';
import Navbar from '../components/navbar';

export const hero = {
  title: 'Welcome to my site',
  subtitle: "I'm-EMANUEL TOMA",
  roles: 'Director of Operations',
};

export const aboutme = {
  title: 'ABOUT-ME',
  subtitle: 'some information about myself',
  center: {
    image: 'images/profile/pphoto.jpg',
  },
  left: {
    tagline:
      '"If one can do it, I too can do it. If none can do it, then I must do it."',
  },
  right: {
    name: 'Emanuel Toma',
    title: 'Director of Operations',
    description:
      'Strategic operations professional with ten years of experience in SaaS Business Operations and Customer Experience Development. Combines deep technical knowledge with industry experience guiding business development, operations, and customer experience to grow and elevate SaaS companies. Excels at crafting high-impact automations, and maintaining consistent feedback to team members and clients across multiple cities and time zones.',
    button: 'Download Resume',
  },
};

export const xpcards = [
  {
    company: 'Instapage.com',
    position: 'Senior Operations Manager',
    startDate: 'Mar 2020',
    endDate: 'Jun 2022',
    text: 'Responsible of managing day-to-day operations for multiple teams which involved setting monthly OKRs and course of action for achieving them together with leadership as well as creating and improving multiple processes, data analysis and data modeling,customer health profile design & analysis, building multiple dashboards and automating reporting, task creation, managing and implementing CRM Systems such as Totango for multiple teams and much more.<br/> Also founded IT Team which managed and automated Employee Onboarding, Offboarding along with Software and License Purchasing and overseeing over 300 services.',
  },
  {
    company: 'Hyros.com',
    position: 'Head of Customer Success',
    startDate: 'Sep 2016',
    endDate: 'Dec 2019',
    text: "As one of the first hires in the company, I've created and led the Customer Support and Customer Success teams which involved Scouting and Recruiting , Onboarding and Training, creating Employee Performance Review Systems and Employee Reward Programs, evaluating Success Agents and Success Managers, creating customer Help Documentation and internal SOPs.<br/> While in this role I also collaborated with Engineering to improve UX for multiple integrations by providing mock-ups and accurate customer feedback and reporting, resulting in a smooth customer experience.",
  },
  {
    company: '123Formbuilder.com',
    position: 'Business Development Manager',
    startDate: 'Sep 2014',
    endDate: 'Aug 2016',
    text: 'As Business Development Manager I actually assumed multiple roles, that of Marketing Operations Manager and Head of Customer Support and Community Manager, for a new product 123Formbuilder was launching, a WordPress plugin, CaptainForm. While in this role I was responsible of building a new support team, creating and implementing new support channels, implementing Freshdesk, creating a new WordPress website from scratch that would be the new Help Section and general outreach and community management.',
  },
];

export const skillchart: ISkillChart = {
  businessOperations: [
    { name: 'Process Creation & Improvement', value: 99 },
    { name: 'Data Analytics & Modeling', value: 79 },
    { name: 'Leadership', value: 55 },
    { name: 'Strategic Planning', value: 69 },
    { name: 'Technical Proficiency', value: 88 },
  ],
  code: [
    { name: 'React', value: 53 },
    { name: 'CSS & Tailwind CSS', value: 64 },
    { name: 'Node.js', value: 74 },
    { name: 'Responsive Design', value: 81 },
    { name: 'SQL', value: 99 },
  ],
  customerSuccess: [
    { name: 'Communication', value: 86 },
    { name: 'Decision-making', value: 64 },
    { name: 'Relationship Building', value: 72 },
    { name: 'Empathy', value: 50 },
    { name: 'Time Management', value: 99 },
  ],
};

export const Contact = {
  phone: { number: '+40 740 205 200', icon: '/images/icons/iconcall.svg' },
  email: {
    address: 'flavius.emanuel@gmail.com',
    icon: '/images/icons/iconmail.svg',
  },
  website: {
    address: 'www.emanueltoma.com',
    icon: '/images/icons/iconweb.svg',
  },
};

export const Copyright = {
  text: '© Copyright 2022 by Emanuel Toma. All Rights Reserved.',
};

export const Navmenu = [
  {
    name: 'About Me',
    hash: 'aboutme',
  },
  {
    name: 'Skills',
    hash: 'skills',
  },
  {
    name: 'Experience',
    hash: 'experience',
  },
  {
    name: 'Contact',
    hash: 'contact',
  },
];
