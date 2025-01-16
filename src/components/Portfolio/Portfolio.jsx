import './Portfolio.css'
import xo from '../../assets/image/project/xo.png';
import quiz from '../../assets/image/project/quiz.png';
import cal from '../../assets/image/project/cal.png';
import calender from '../../assets/image/project/calender.png';
import todo from '../../assets/image/project/todo.png';
import weather from '../../assets/image/project/weather.png';
import { BsArrowUpRightCircle } from "react-icons/bs"; 
const projects = [
    {
        id: 1,
        image: xo,
        title: "Educational Platform",
        techStack: "HTML, CSS3, Vanilla Javascript",
        link: "https://koteba.github.io/xoGamming.github.io/",
    },
    {
        id: 2,
        image: todo,
        title: "To-Do List",
        techStack: "HTML, CSS3, Vanilla Javascript",
        link: "https://koteba.github.io/TO-DO-List.github.io/",
    },
    {
        id: 3,
        image: quiz,
        title: "Quiz App",
        techStack: "HTML, CSS3, Vanilla Javascript",
        link: "https://koteba.github.io/xoGamming.github.io/",
    },
    {
        id: 4,
        image: calender,
        title: "Calendar",
        techStack: "HTML, CSS3, Vanilla Javascript",
        link: "https://koteba.github.io/Calendar.github.io/",
    },
    {
        id: 5,
        image: cal,
        title: "Calculator",
        techStack: "HTML, CSS3, Vanilla Javascript",
        link: "https://koteba.github.io/Calculator.github.io/",
    },
    {
        id: 6,
        image: weather,
        title: "Weather App",
        techStack: "HTML, CSS3, Vanilla Javascript",
        link: "https://koteba.github.io/WeaterApp.github.io/",
    },
];
const Portfolio = () => {
    return (
        <>
            <section id="portfolio" className="portfolio-section">
                <div className="portfolio-header">
                    <h4>
                        <span className="blue-text">portfolio</span>
                    </h4>
                    <h2>My Creative Works</h2>
                    <h3>Latest <span>Projects</span></h3>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link right-align"
                    >
                        View Github ↗
                    </a>
                </div>

                <div className="portfolio-grid">
                    {projects.map((project) => (
                        <div className="portfolio-item" key={project.id}>
                            <div className="image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                            </div>
                            <div className="project-info">
                                <h4>{project.title}</h4>
                                <p>
                                    {project.techStack}{" "}
                                    <a
                                        target="_blank"
                                        href={project.link}
                                        className="refresh-icon"
                                        rel="noopener noreferrer"
                                    >
                                        <BsArrowUpRightCircle />
                                    </a>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}

export default Portfolio;
