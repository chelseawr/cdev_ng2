// roles.data.ts
export interface Role {
  id: string;
  title: string;
  company: string;
  companyUrl: string;
  dates: string;
  bullets: string[];
}

export const ROLES: Role[] = [
  {
    id: 'kr',
    title: 'Senior Software Engineer',
    company: 'Clarity Innovations',
    dates: 'October 2022 - present',
    companyUrl: 'https://clarityinnovates.com/',
    bullets: [
      'Led a team of 8 developers on a React application team for the United States Air Force software factory Kessel Run.',
      'Identified and mitigated risks with major releases and resolved critical conflicts regarding architecture ownership, balancing technical feasibility with business requirements.',
      'Incorporated AI-driven research and debugging assistance into development workflows, enhancing problem-solving efficiency without compromising code quality and review standards.',
    ],
  },
  {
    id: 'ie',
    title: 'Software Engineer',
    company: 'Internetwork Engineering',
    companyUrl: 'https://ineteng.com',
    dates: 'September 2021 - October 2022',
    bullets: [
      'Developed a Python automation tool to save over $30,000 per client deployment',
      'Responsible for maintenance and improvements to a network automation platform that enables users to configure private cloud resources',
    ],
  },
  {
    id: 'bbg',
    title: 'Junior Software Engineer',
    dates: 'July 2017 - September 2021',
    company: 'Bloomberg L.P.',
    companyUrl: 'https://bloomberg.com',
    bullets: [
      'Developed, maintained, and managed a metrics dashboard using React, NGINX and Flask with a small remote team.',
      'Pioneered the effort to secure the deployment pipeline and client facing code using Jenkins, Terser and Grunt.',
    ],
  },
  {
    id: 'usmc',
    title: 'Database + Network Administrator',
    company: 'United States Marine Corps',
    companyUrl: 'https://www.imef.marines.mil/Units/I-MIG/1ST-RADIO-BN/',
    dates: 'June 2012 - July 2017',
    bullets: [
      'Awarded for developing an application for senior staff using VBA, solely responsible for deployment, status reporting and development upgrades',
      'Provided immediate recovery of mission critical files by implementing data snapshots and routine backups',
    ],
  },
];
