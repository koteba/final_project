// data.js
const navItems = ['Home', 'About Me', 'Education', 'Projects', 'Contact'];

const hero = [
    {
        name: "kotaiba",
        role: "Full Stack Web Developer",
        description: "I build seamless web applications by combining interactive front-end designs with robust back-end systems to ensure functionality and scalability."
    }
];
// data.js
const about = "Full-stack Web Developer with over two years of experience. I contribute across the entire SDLC and am seeking new opportunities to apply my expertise in ERP development."
const skills = [
    { name: "HTML5", percentage: "85%" },
    { name: "CSS3", percentage: "90%" },
    { name: "JavaScript", percentage: "95%" },
    { name: "React", percentage: "70%" },
    { name: "Lravel", percentage: "85%" },
    { name: "php", percentage: "80%" },
    { name: "mysql", percentage: "80%" },
];
// experience.js

export const experiences = [
    {
        position: "Full Stack Web Developer",
        company: "Frontier Tech",
        location: "Hasaka, Syria",
        duration: "October 1, 2022 - Present",
        responsibilities: [
            "Developed web applications with Laravel, focusing on user experience, security, and API integration across 6+ projects, including Warehouse, Contract, and License Management. Improved performance through code refactoring and database optimizations while designing responsive UIs with Bootstrap and CSS."
        ]
    },
    {
        position: "Web Developer",
        company: "Aratech",
        location: "Hasaka, Syria",
        duration: "September 1, 2021 - September 30, 2022",
        responsibilities: [
            "Created projects in JavaScript during the training period, such as a calculator, XO game, or task list.",
            "Learned Laravel framework and created projects like school management, task management, and blog.",
            "Collaborated on more than 3 projects with the team, including pharmacy management, doctors management, and warehouse management."
        ]
    }
];

// export const education = [
//     {
//         degree: "Master's Degree",
//         university: "Syrian Virtual University",
//         location: "Damascus, Syria",
//         duration: "October 20, 2022 - Present"
//     },
//     {
//         degree: "Bachelor's Degree",
//         university: "Tishreen University",
//         location: "Latakia, Syria",
//         duration: "October 20, 2016 - August 20, 2021"
//     }
// ];
// data/education.js

export const educationExperience = {
    title: "Education & Experience",
    subtitle: "Education and Experience",
    items: [

        {
            type: "Experience",
            title: "Full Stack Web Developer",
            description: "Frontier Tech ...October 1, 2022 - Present  Developed web applications with Laravel, focusing on user experience, security, and API integration across 6+ projects, including Warehouse, Contract, and License Management. Improved performance through code refactoring and database optimizations while designing responsive UIs with Bootstrap and CSS."
        },
            {
            type: "Education",
            title: "Master's Degree in Web Seience ",
            description: "Syrian Virtual University, Damascus, Syria — October 2022 to Present"
        },
        {
            type: "Experience",
            title: "Frontend Developer",
            description: "aratech September 1, 2021 - September 30, 2022\nDeveloped JavaScript projects (calculator, XO game, task list), learned Laravel for school, task, and blog management, and collaborated on 3+ team projects, including pharmacy, doctors, and warehouse management."
        } ,
        {
            type: "Education",
            title: "Bachelor's Degree in Computer Science",
            description: "Tishreen University, Latakia, Syria — October 2016 to August 2021"
        }
    
   

   
    ]
};
 const footerTexts = {
    copyright: "© 2024. All Rights Reserved",
    developer: "Development by Kotaiab",
};



// التصدير الجماعي
export { navItems, hero, skills, about, footerTexts };
