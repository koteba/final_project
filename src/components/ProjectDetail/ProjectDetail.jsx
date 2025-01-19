import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';

// استيراد الصور الخاصة بالمشاريع
import xo from '../../assets/image/project/xo.png';
import quiz from '../../assets/image/project/quiz.png';
import cal from '../../assets/image/project/cal.png';
import calender from '../../assets/image/project/calender.png';
import todo from '../../assets/image/project/todo.png';
import weather from '../../assets/image/project/weather.png';

const projects = [
    {
        id: 1,
        image: xo,
        title: "Educational Platform",
        techStack: "HTML, CSS3, Vanilla Javascript",
        link: "https://koteba.github.io/xoGamming.github.io/",
        description: "This is an educational platform for learning basic programming concepts.",
    },
    {
        id: 2,
        image: todo,
        title: "To-Do List",
        techStack: "HTML, CSS3, Vanilla Javascript",
        link: "https://koteba.github.io/TO-DO-List.github.io/",
        description: "A simple to-do list app to manage your daily tasks.",
    },
    {
        id: 3,
        image: quiz,
        title: "Quiz App",
        techStack: "HTML, CSS3, Vanilla Javascript",
        link: "https://koteba.github.io/xoGamming.github.io/",
        description: "A quiz app for testing your general knowledge.",
    },
    {
        id: 4,
        image: calender,
        title: "Calendar",
        techStack: "HTML, CSS3, Vanilla Javascript",
        link: "https://koteba.github.io/Calendar.github.io/",
        description: "A calendar application to schedule and view your events.",
    },
    {
        id: 5,
        image: cal,
        title: "Calculator",
        techStack: "HTML, CSS3, Vanilla Javascript",
        link: "https://koteba.github.io/Calculator.github.io/",
        description: "A simple calculator app for basic arithmetic operations.",
    },
    {
        id: 6,
        image: weather,
        title: "Weather App",
        techStack: "HTML, CSS3, Vanilla Javascript",
        link: "https://koteba.github.io/WeaterApp.github.io/",
        description: "A weather app to get current weather data based on your location.",
    },
];

const ProjectDetail = () => {
    const { id } = useParams(); // استخراج id من المسار
    const project = projects.find((p) => p.id === parseInt(id)); // البحث عن المشروع باستخدام id

    if (!project) {
        return <h2>Project not found</h2>; // في حال لم يتم العثور على المشروع
    }

    return (
        <div className="project-details-container">
            {/* إظهار الصورة فقط */}
            <div className="project-details-image">
                <img src={project.image} alt={project.title} />
            </div>

            {/* إظهار الوصف فقط */}
            <div className="project-details-info">
                <h2>{project.title}</h2>
                <p><strong>Description:</strong> {project.description}</p>
            </div>

            {/* إظهار المكدس التكنولوجي والرابط */}
            <div className="project-details-tech">
                <p><strong>Tech Stack:</strong> {project.techStack}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-details-link">
                    Visit Project ↗
                </a>
            </div>
        </div>
    );
};

export default ProjectDetail;
