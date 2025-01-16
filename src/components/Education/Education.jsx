import './Education.css';
import img from '../../assets/image/44.png';
import { educationExperience } from '../../data.js';

const Education = () => {
    return (
        <>
            <section id="education" className="education-experience">
                <div className="container">
                    <div className="education_first">
                        <div className="text-content">
                            <p className="subtitle">{educationExperience.subtitle}</p>
                            <h2>{educationExperience.title}</h2>
                        </div>
                        <div className="image-content">
                            <img src={img} alt="Background Design" className="background-image" />
                        </div>
                    </div>

                    <div className="timeline">
                        {educationExperience.items.map((item, index) => (
                            <div className="timeline-item" key={index}>
                                <div className="circle"></div>
                                <div className="content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="img_left">
                        <img src={img} alt="Background Design" className="background-image" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Education;
