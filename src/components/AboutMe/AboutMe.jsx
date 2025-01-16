import './AboutMe.css';
import { skills,about } from '../../data.js'; // استيراد المهارات من data.js

const AboutMe = () => {
    return (
        <>
            <section className="about-me" id="about">
                <div className="about-icons">
                    <img src="./image/Ellipse 2164.png" alt="HTML5" />
                    <img src="./image/Images bg.svg" alt="CSS3" />
                    <img src="./image/squers  - option 1.svg" alt="Figma" />
                    <img src="github-logo-path.png" alt="GitHub" />
                    <img src="react-logo-path.png" alt="React" />
                </div>
                <div className="about-content">
                    <h2>About Me</h2>
                    <p>{about}</p>
                    <div className="skills">
                        {skills.map((skill, index) => (
                            <div className="skill" key={index}>
                                <span>{skill.name}</span>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: skill.percentage }}></div>
                                </div>
                                <span className="percentage">{skill.percentage}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutMe;
