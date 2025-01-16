import './Footer.css';

import { footerTexts } from '../../data.js';
// import { socialLinks } from "../../data.js";
import { TiSocialFacebookCircular, TiSocialTwitterCircular, TiSocialLinkedinCircular, TiSocialInstagram } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";

export const socialLinks = [
    { href: "https://www.facebook.com/qtp.ali", icon: <TiSocialFacebookCircular /> }, 

    { href: "https://wa.me/963937022083", icon: <FaWhatsapp /> },
    { href: "https://www.linkedin.com/in/kotaiba-alali/", icon: <TiSocialLinkedinCircular /> },
    { href: "https://instagram.com", icon: <TiSocialInstagram /> },
];
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p>{footerTexts.copyright}</p>
            </div>
            <div className="footer-center">
                <p>{footerTexts.developer}</p>
            </div>
            
            <div className="footer-right">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
