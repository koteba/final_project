import NavBar from '../NavBar/NavBar'
import lauraPhoto from '../../assets/image/43534.png';
import cv from '../../assets/pdf/KOTAIBA   ALALI.pdf';
import './Hero.css'
import { hero } from '../../data.js';

const Hero = () => {
    return (
        <div className='hero'>
            <NavBar name={hero[0].name} />
            <section className="hero-section">
                <div className="content">
                    <h1>
                            HEY ! I’m <span>{hero[0].name}</span>,<br /> {hero[0].role}
                    </h1>
                    <p>{hero[0].description}</p>

                    <a href={cv} target="_blank" className="btn">Download CV</a>
                </div>
                <div className="hero-image">
                    <img src={lauraPhoto} alt="Laura's Photo" />
                </div>
            </section>
        </div>
    )
}

export default Hero;
