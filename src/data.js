// Content that stays the same in every language (names, tags, links).
// Translatable text lives in strings.js; projects/exp arrays there follow the same order.

export const SECTIONS = ['about', 'experience', 'projects', 'certifications', 'skills', 'recommendations'];

export const STATS = [
  { to: 6, plus: true },
  { to: 16 },
  { to: 14 },
  { to: 20, plus: true },
];

export const FLOW = [
  ['Dataverse', '#742774'],
  ['Power Apps', '#0078d4'],
  ['Power Automate', '#0066b8'],
  ['Power Pages', '#00bcf2'],
  ['Power BI', '#498205'],
  ['Copilot Studio', '#8764b8'],
];

export const STACK = [
  { name: 'Dataverse', badge: 'Core', dot: '#c77dff', glow: 'rgba(157,0,255,0.6)', bg: 'rgba(157,0,255,0.12)', border: 'rgba(157,0,255,0.3)' },
  { name: 'Power Apps', badge: 'Canvas + MDA', dot: '#48cae4', glow: 'rgba(0,212,255,0.6)', bg: 'rgba(0,212,255,0.08)', border: 'rgba(0,212,255,0.25)' },
  { name: 'Power Automate', badge: 'Cloud + RPA', dot: '#56cfe1', glow: 'rgba(0,150,200,0.5)', bg: 'rgba(0,100,184,0.1)', border: 'rgba(0,150,200,0.25)' },
  { name: 'Power Pages', badge: 'Portals', dot: '#48cae4', glow: 'rgba(0,188,242,0.5)', bg: 'rgba(0,188,242,0.08)', border: 'rgba(0,188,242,0.25)' },
  { name: 'Power BI', badge: 'Analytics', dot: '#52f0a0', glow: 'rgba(0,255,140,0.5)', bg: 'rgba(0,255,140,0.06)', border: 'rgba(0,255,140,0.2)' },
  { name: 'Copilot Studio', badge: 'AI Agents', dot: '#b09de8', glow: 'rgba(135,100,184,0.5)', bg: 'rgba(135,100,184,0.08)', border: 'rgba(135,100,184,0.25)' },
];

export const FILTERS = [
  ['hassad', 'Hassad / MOCI'],
  ['applab', 'Applab Qatar'],
  ['skysoft', 'Skysoft Connections'],
];

const BADGE = { hassad: 'Hassad Food', applab: 'Applab Qatar', skysoft: 'Skysoft Connections' };

export const PROJECTS = [
  ['hassad', ['Dynamics 365', 'Backend APIs', 'CRM Automation', 'Power Automate', 'System Integration']],
  ['applab', ['Dynamics 365', 'Power Pages', 'Power Automate', 'Web APIs', 'Govt Integration']],
  ['applab', ['Dynamics 365', 'Power Pages', 'Power Automate', 'RBAC', 'Govt Portal']],
  ['applab', ['Dynamics 365', 'Power Pages', 'Model-Driven Apps', 'Finance Module', 'Time Tracking']],
  ['applab', ['Dynamics 365', 'Angular', 'MS Teams API', 'Web APIs', 'Govt Integration']],
  ['skysoft', ['Dynamics 365', 'Plugins', 'Web APIs', 'SSRS Reports', 'OneSignal']],
  ['skysoft', ['Dynamics 365', 'WhatsApp Cloud API', 'Power Automate', 'Webhooks', 'Custom Connector']],
  ['skysoft', ['Dynamics 365', 'Cloud Migration', 'Power BI', 'FetchXml', 'SSRS Reports']],
  ['skysoft', ['Azure Logic Apps', 'Power Automate', 'On-Premises Gateway', 'Cloud Integration']],
  ['skysoft', ['Dynamics 365', 'Azure Functions', 'Power Automate', 'SSRS Reports', '7Pace Integration']],
].map(([co, tags]) => ({ co, badge: BADGE[co], tags }));

const LEARN = 'https://learn.microsoft.com/en-gb/users/anwarluck/';

export const CERTS = [
  ['PL-600', 'Solution Architect Expert', 'expert', 'https://www.credly.com/badges/78a8b26a-dd74-43ef-bd96-7ecd021739c3/public_url'],
  ['AB-100', 'Agentic AI Business Solutions Architect', 'expert', LEARN + 'credentials/60a5ae6aa0a997c7'],
  ['PL-400', 'PP Developer Associate', 'pl', 'https://www.credly.com/badges/eb6cacc7-6c3c-4b9c-b405-b4c8c005f5c2/public_url'],
  ['PL-500', 'RPA Developer Associate', 'pl', 'https://www.credly.com/badges/279a44bb-0ad6-4f81-ba51-2e2362141e4e/public_url'],
  ['PL-200', 'Functional Consultant Assoc.', 'pl', 'https://www.credly.com/badges/5bd5d9ca-aab5-4415-b871-2f519575bcd5'],
  ['MB-280', 'Customer Experience Analyst', 'mb', LEARN],
  ['MB-240', 'Field Service Consultant', 'mb', 'https://www.credly.com/badges/3856fa11-0950-4137-8507-01ad039fb6fe/public_url'],
  ['MB-230', 'Customer Service Consultant', 'mb', LEARN + 'credentials/964797F5B5DD759C'],
];

// rows under the cert grid; labels come from strings.certLabels (same order)
export const CERT_CHIPS = [
  { items: ['PL-900', 'MB-910', 'MB-920', 'AZ-900', 'AI-900', 'DP-900', 'SC-900', 'MS-900'] },
  { items: ['AI Builder', 'Model-Driven Apps', 'Canvas Apps', 'Power Automate'] },
  { items: ['MB-210 Sales', 'MB-220 Customer Insights', 'PL-100 App Maker'], prev: true },
];
export const LEARN_URL = LEARN;

export const SKILLS = [
  { label: '// Dynamics 365 / Dataverse', color: 'var(--purple)', tag: 'tag-p', items: ['Dynamics 365 CE', 'Sales', 'Customer Service', 'Field Service', 'Project Operations', 'Customer Insights', 'Dataverse', 'Plugin Development', 'Custom Actions', 'Business Process Flows', 'Security Roles', 'PCF Controls'] },
  { label: '// Power Platform', color: 'var(--cyan)', tag: 'tag-b', items: ['Power Apps Canvas', 'Model-Driven Apps', 'Power Pages', 'Power Automate', 'Power BI', 'Power Automate RPA', 'Copilot Studio', 'MCP for Dynamics CRM'] },
  { label: '// Development', color: 'var(--green)', tag: 'tag-t', items: ['C# / .NET', 'JavaScript', 'SQL', 'SSIS', 'Dynamics SDK', 'Web API (REST)', 'SSRS', 'Azure Logic Apps', 'Azure Functions', 'Azure AI Services', 'Angular (integration)'] },
  { label: '// Integration & Tools', color: 'var(--amber)', tag: 'tag-o', items: ['Microsoft Teams', 'DocuSign', 'WhatsApp Cloud API', 'OneSignal', '7Pace', 'MS Bookings', 'XrmToolBox', 'Postman', 'SSMS', 'Visual Studio 2022', 'VS Code'] },
];

export const SOCIALS = [
  ['linkedin', 'LinkedIn', 'https://www.linkedin.com/in/anwarluck/'],
  ['github', 'GitHub', 'https://github.com/anwarluck'],
  ['fiverr', 'Fiverr', 'https://www.fiverr.com/share/jpk30a'],
  ['instagram', 'Instagram', 'https://instagram.com/anwarluck'],
];

// Recommendations are real LinkedIn quotes, so they stay in English in every language.
export const TESTIMONIALS = [
  { img: 'assets/images/48291730.jpeg', g: 'linear-gradient(135deg,#7b2fff,#0084b4)', n: 'AlMutasim AlSammari', r: 'Managing Partner · Applab', q: 'It was a pleasure working with Anwar during his time at Applab. From day one, he demonstrated strong ownership, professionalism, and an eagerness to grow. He consistently brought structure and clarity to his work, showing a deep understanding of both technical and business needs. What stood out most was his positive attitude and ability to adapt quickly to changing priorities. He was reliable, collaborative, and always ready to go the extra mile. I have no doubt that Anwar will continue to excel and add great value wherever he goes.' },
  { img: 'assets/images/83920471.jpeg', g: 'linear-gradient(135deg,#009952,#0084b4)', n: 'Kavya Krishnan', r: 'Senior Project Manager · Invest Qatar CRM Project', q: 'I had the opportunity to work with Anwar on the Invest Qatar CRM project and it has truly been a wonderful experience. What I appreciate most is his calm and positive approach, no matter how challenging the situation. He always takes the time to listen, understand different perspectives, and come up with solutions that keep all teams comfortable. His ability to build trust made a big difference in how smoothly we delivered our work. Working with him felt more like collaborating with a friend than just a teammate, which is why the project environment was both productive and enjoyable.' },
  { img: 'assets/images/29371840.jpeg', g: 'linear-gradient(135deg,#0084b4,#7b2fff)', n: 'Yaqub Ahmad', r: 'CEO · Skysoft Connections | D365 CRM & Power Platform Expert', q: 'I know Anwar both professionally and personally for more than 3 years. He worked with me closely on several projects. Anwar has in-depth knowledge of Dynamics CRM as well as a broad range of technical knowledge; he thinks systematically and deliberately to any requirement and comes up with several feasible solutions; he enjoys exploring new technologies and always surprised us with his out-of-the-box thinking. He is very cooperative and team members from different projects used to approach him to resolve their queries. Any organisation would be fortunate to have Anwar as an employee.' },
  { img: 'assets/images/57491823.jpeg', g: 'linear-gradient(135deg,#009952,#0084b4)', n: 'Ossie Pisanu', r: 'Client · Passionate and Innovative Leader', q: 'Anwar has been providing Dynamics 365 solutions to us for over 2 years. Whenever Anwar has been presented with our requirements he has been able to balance the technical aspect of the solution along with keeping in mind end-user acceptance. There has not been a single project that Anwar has not been able to come up with a workable solution — all delivered within agreed-upon timeframes. Other than his excellent technical capability he has been very flexible in working with us. Keep up the good work Anwar. We are the better organisation for your involvement.' },
  { img: 'assets/images/64829301.jpeg', g: 'linear-gradient(135deg,#b87800,#0084b4)', n: 'Umar Naeem', r: 'Dynamics-365 Associate Engineering Solution Architect', q: "It's rare that you come across standout talent like Anwarul Haq. I had the pleasure of working with Anwarul for two years at Skysoft Connections, collaborating on several projects as a team. He is a very fast learner when it comes to new concepts and technologies. I was particularly impressed by Anwarul's ability to handle even the toughest clients effortlessly — a skill that often takes years to develop among Dynamics 365 consultants, but it seemed to come perfectly naturally to him. Anwarul would be an asset to any team and I highly recommend him." },
  { img: 'assets/images/37204918.jpeg', g: 'linear-gradient(135deg,#0084b4,#009952)', n: 'Sohail Yousaf', r: 'Founder · Helper Dynamics | AI & Dynamics 365 Solutions', q: 'Anwar is one of the most enthusiastic and logical people I have worked with. He is always up for learning something new proactively and is passionate about his work. His thought clarity and in-depth knowledge of Dynamics 365 and the Microsoft ecosystem are his strong suit — it always helped the team to get best-in-class solution designs and implement them faster with minimal errors. He is a great team player and participates in healthy discussions on digital solutions, industry trends, and innovative customer experience. I learned many things, both professionally and personally, while working with Anwar.' },
  { img: 'assets/images/82039174.jpeg', g: 'linear-gradient(135deg,#7b2fff,#009952)', n: 'Tariq Hameed', r: 'Client · Microsoft Dynamics 365 CRM/CE Developer', q: "Only one word that comes to mind when I think of Anwar, and that's AWESOME. I worked with him on a couple of projects and he was a consummate professional at all times. He explained the inner workings of the solutions that he developed and was instrumental in helping me to find my feet. Anwar's work ethic was impeccable, and he was always the first person to offer help and support. Thanks, Anwar!" },
  { img: 'assets/images/49018273.jpeg', g: 'linear-gradient(135deg,#b87800,#7b2fff)', n: 'Dontae Davis', r: 'Client · Microsoft Dynamics 365 CRM Consultant', q: 'His CRM development skills and ability to come up with solutions is amazing and quick. Really thinks outside the box and is very versatile within Dynamics 365 as a whole. Truly reliable and gets the task done in a timely manner. Highly recommend him for any back-end CRM configurations and customisations.' },
  { img: 'assets/images/73829104.jpeg', g: 'linear-gradient(135deg,#009952,#7b2fff)', n: 'Ola Adewale', r: 'Client · D365 & Power Platform Solution Architect | TOGAF | 15+ Yrs', q: 'I have had the opportunity to work with Anwarul; he possesses excellent technical and soft skills. He is an expert in providing solutions to most problems. He is an asset to any company, and I will be happy to work with him again and again.' },
  { img: 'assets/images/56482910.jpeg', g: 'linear-gradient(135deg,#7b2fff,#0084b4)', n: 'Nazmul Hasan', r: 'Client · Microsoft Dynamics 365 & Power Platform Developer', q: 'Anwar is an exceptional developer. He has a deep understanding of D365 and Power Platform.' },
  { img: 'assets/images/91827340.jpeg', g: 'linear-gradient(135deg,#0084b4,#b87800)', n: 'Muhammad Waqas Ashraf', r: 'Technical Project Manager — Dynamics CRM 365 · Skysoft Connections', q: 'During the time we spent together both in office and outside, I find Anwar very focused, loyal, hard working and consistent. His approach in solving tasks, handling customer business requirements and proposing solutions were great. Quality of code excellent, working and helping colleagues whenever needed — listens to suggestions with an open mind. Indeed Anwar is a valuable person.' },
  { img: 'assets/images/38291047.jpeg', g: 'linear-gradient(135deg,#009952,#b87800)', n: 'Muhammad Ismail', r: 'Professor · University of Swat | Sr. Backend Engineer', q: 'It is my immense pleasure to recommend Mr. Anwarul Haq. I have known him as my student for 4 years at the University of Swat. He observed discipline, was very inquisitive, completed assignments on time and achieved top grades in my subjects. His analytical and problem-solving skills are impressive. He continued to work part-time on development projects while studying. His spoken English is excellent. During his project he showed great commitment and command over web technologies, able to model and implement complex scenarios. He has been doing great in his professional life and never stops learning. His attitude is positive, respectful, and purpose-oriented.' },
];
