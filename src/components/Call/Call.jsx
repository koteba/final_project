import './Call.css'
import { FaArrowCircleUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Call = () => {
    const scrollToTop = () => {
        document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='call'>
            <div className="back-to-top" onClick={scrollToTop}>
                <FaArrowCircleUp />
            </div>
            <section id="call-to-action" className="cta-section">
                <div className="cta-container">
                    <div className="cta-content">
                        <div className="cta-text">
                            <h2>Try me out, risk free!</h2>
                            <p>If you’re not happy with the design after the first draft, I’ll refund your deposit, <strong>no
                                questions asked</strong>.</p>
                        </div>
                        {/* استخدام Link بدلاً من link */}
                        <Link to="/contact" className="cta-button">Contact →</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Call;
