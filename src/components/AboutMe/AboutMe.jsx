import './AboutMe.css';
import { skills,about } from '../../data.js'; // استيراد المهارات من data.js
import php from '../../assets/image/skills/php.svg';
import css3 from '../../assets/image/skills/css3.svg';
import html from '../../assets/image/skills/html.png';
import javascript from '../../assets/image/skills/javascript.png';
import laravel from '../../assets/image/skills/laravel.svg';
import mysql from '../../assets/image/skills/mysql.png';
import react from '../../assets/image/skills/react.svg'; 

const AboutMe = () => {
    return (
        <>
            <section className="about-me" id="about">
                <div className="about-icons">
                    <img src={php} alt="PHP" />
                    <img src={css3} alt="CSS3" />
                    <img src={javascript} alt="JavaScript" />
                    <img src={react} alt="React" />
                    <img src={laravel} alt="Laravel" />
                    <img src={mysql} alt="MySQL" />
                    <img src={html} alt="HTML5" />
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
