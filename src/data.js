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
            "Developed web applications using Laravel, prioritizing user experience and security.",
            "Designed responsive user interfaces with Bootstrap and CSS, aligning with user needs.",
            "Contributed to 6+ projects, including Warehouse Management, Contract Management, and License Management, focusing on workflow improvements and API integration.",
            "Optimized application performance through code refactoring and database enhancements."
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
            title: "Frontend Developer",
            description: "Worked on various frontend projects, focusing on responsive design and seamless user experience."
        },
        {
            type: "Education",
            title: "Master's Degree in Web Seience ",
            description: "Syrian Virtual University, Damascus, Syria — October 2022 to Present"
        },
        {
            type: "Experience",
            title: "Frontend Developer",
            description: "Worked on various frontend projects, focusing on responsive design and seamless user experience."
        },

        
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
