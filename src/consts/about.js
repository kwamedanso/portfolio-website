import {
    BsClockHistory, BsPeople, BsKanban, BsChatDots, BsPuzzle, BsZoomIn, BsLightbulb, BsPerson
} from 'react-icons/bs';

import { TiHtml5 } from 'react-icons/ti';
import { DiCss3, DiJavascript1, DiReact, DiGit, DiNpm } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiRedux, SiPostgresql, SiSupabase, SiPostman, SiNetlify, SiJest, SiReact, SiFigma, SiCanva } from 'react-icons/si';
import { AiOutlineChrome } from "react-icons/ai";
import { DiResponsive } from "react-icons/di";
import { RiTerminalLine } from 'react-icons/ri';
import { MdAccessibility } from 'react-icons/md';

// const prof_skills = ["Time Management", "Team Collaboration", "Project Management", "Effective Communication", "Problem Solving", "Attention to Detail", "Continuous Learning and Adaptation", "User-Centric Mindset"]

const prof_skills = [
    { title: "Time Management", icon: <BsClockHistory />, id: 1 },
    { title: "Team Collaboration", icon: <BsPeople />, id: 2 },
    { title: "Project Management", icon: <BsKanban />, id: 3 },
    { title: "Effective Communication", icon: <BsChatDots />, id: 4 },
    { title: "Problem Solving", icon: <BsPuzzle />, id: 5 },
    { title: "Attention to Detail", icon: <BsZoomIn />, id: 6 },
    { title: "Continuous Learning and Adaptation", icon: <BsLightbulb />, id: 7 },
    { title: "User-Centric Mindset", icon: <BsPerson />, id: 8 }
];
// const tech_skills = ["HTML/CSS", "JavaScript", "React.js", "Redux", "Responsive Design", "Version Control with Git", "API Integration", "Testing with Jest", "Debugging", "Command Line Tools", "Cross-Browser Compatibility", "Web Performance Optimization", "Chrome dev tools", "React dev tools", "Web Accessibility(WCAG)", "UI/UX Design(Figma)", "Responsively App"]

const tech_skills = [
    { title: "HTML", icon: <TiHtml5 />, id: 1 },
    { title: "CSS", icon: <DiCss3 />, id: 2 },
    { title: "JavaScript", icon: <DiJavascript1 />, id: 3 },
    { title: "React.js", icon: <DiReact />, id: 4 },
    { title: "Node.js", icon: <FaNodeJs />, id: 5 },
    { title: "Express.js", icon: <SiExpress />, id: 6 },
    { title: "Redux", icon: <SiRedux />, id: 7 },
    { title: "PostgreSQL", icon: <SiPostgresql />, id: 8 },
    { title: "Supabase", icon: <SiSupabase />, id: 9 },
    { title: "Postman", icon: <SiPostman />, id: 10 },
    { title: "Responsive Design", icon: <DiResponsive />, id: 11 },
    { title: "Version Control with Git", icon: <DiGit />, id: 12 },
    { title: "Netlify", icon: <SiNetlify />, id: 13 },
    { title: "Testing with Jest", icon: <SiJest />, id: 14 },
    { title: "Bash/Command line/terminal", icon: <RiTerminalLine />, id: 15 },
    { title: "npm", icon: <DiNpm />, id: 16 },
    { title: "Chrome dev tools", icon: <AiOutlineChrome />, id: 17 },
    { title: "React dev tools", icon: <SiReact />, id: 18 },
    { title: "Web Accessibility(WCAG)", icon: <MdAccessibility />, id: 19 },
    { title: "UI/UX Design(Figma)", icon: <SiFigma />, id: 20 },
    { title: "Canva", icon: <SiCanva />, id: 21 }
];

const education = [
    {
        cert: "Bachelor of Technology (Computer Science)",
        school: "Accra Technical University",
        year: "January 2021 - December 2022"
    },
    {
        cert: "Higher National Diploma (Computer Science)",
        school: "Accra Technical University",
        year: "September 2016 - November 2019"
    }
]

export { prof_skills, tech_skills, education }