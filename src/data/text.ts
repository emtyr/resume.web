import { ISkillChart } from '~/components/skills/props';

export const hero = {
  title: 'Welcome to my site',
  subtitle: "I'm-EMANUEL TOMA",
  roles: 'Business Operations Manager and Fullstack Developer',
};

export const aboutme = {
  title: 'ABOUT-ME',
  subtitle: 'some information about myself',
  center: {
    image: 'images/profile/pphoto.jpg',
  },
  left: {
    tagline: 'Building awesome teams with passion since 2014.',
  },
  right: {
    name: 'Emanuel Toma',
    title: 'Expert Operations & Customer Success',
    description:
      'Strategic operations professional with ten years of experience in SaaS Customer Success and Bussiness Operations Development. Combines deep technical knowledge with industry experience guiding business development, operations, and customer experience to grow and elevate SaaS companies. Excels at crafting high-impact automations, and maintaining consistent feedback to team members and clients across multiple cities and time zones.',
    button: 'Download Resume',
  },
};

export const xpcards = [
  {
    company: 'Instapage.com',
    position: 'Senior Success Operations Manager',
    startDate: 'Mar 2020',
    endDate: 'Jun 2022',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    company: 'Hyros.com',
    position: 'Head of Customer Success',
    startDate: 'Sep 2016',
    endDate: 'Dec 2019',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    company: '123Formbuilder.com',
    position: 'Business Development Manager',
    startDate: 'Sep 2014',
    endDate: 'Aug 2016',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export const skillchart: ISkillChart = {
  businessOperations: [
    { name: 'Data Analysis', value: 45 },
    { name: 'UX Design', value: 64 },
    { name: 'Web Stuff', value: 72 },
    { name: 'Logo Design', value: 80 },
    { name: '3DS Max', value: 99 },
  ],
  code: [
    { name: 'Adobe', value: 40 },
    { name: 'UX Design', value: 64 },
    { name: 'Web Stuff', value: 72 },
    { name: 'Logo Design', value: 80 },
    { name: '3DS Max', value: 99 },
  ],
  customerSuccess: [
    { name: 'Process Improvement', value: 80 },
    { name: 'UX Design', value: 64 },
    { name: 'Web Stuff', value: 72 },
    { name: 'Logo Design', value: 50 },
    { name: '3DS Max', value: 99 },
  ],
};
