import './Contact.css';
import { MdAddIcCall } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { LuMapPinHouse } from "react-icons/lu";

const Contact = () => {
    // تعريف المتغيرات
    const contactInfo = {
        phone: {
            title: "Call me",
            value: "+963937022083",
            icon: <MdAddIcCall />,
        },
        email: {
            title: "Email me",
            value: "koteba.ali98@gmail.com",
            icon: <MdOutlineMarkEmailUnread />,
        },
        address: {
            title: "Address",
            value: "Damascus, Syria",
            icon: <LuMapPinHouse />,
        },
    };

    const formPlaceholders = {
        fullName: "Full name",
        email: "Your email",
        phone: "Phone number",
        message: "Message",
    };

    const formButtonText = "Send Message";

    return (
        <>
            <section id="contact" className="contact-section">
                <div className="container">
                    {/* عنوان القسم */}
                    <h4>
                        <span className="blue-text">Contact</span>
                    </h4>
                    <div className="contact-header">
                        <h2>
                            Let’s Discuss Your <span>Project</span>
                        </h2>
                    </div>

                    {/* معلومات التواصل */}
                    <div className="contact-content">
                        <div className="contact-info">
                            {Object.values(contactInfo).map((info, index) => (
                                <div className="info-item" key={index}>
                                    <div className="icon">{info.icon}</div>
                                    <div className="info-text">
                                        <h4>{info.title}</h4>
                                        <p>{info.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* نموذج الاتصال */}
                        <form className="contact-form">
                            <div className="form-group">
                                <input type="text" placeholder={formPlaceholders.fullName} required />
                            </div>
                            <div>
                                <input type="email" placeholder={formPlaceholders.email} required />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder={formPlaceholders.phone} required />
                            </div>
                            <div className="form-group">
                                <textarea placeholder={formPlaceholders.message} rows="5" required></textarea>
                            </div>
                            <button type="submit" className="btn-submit">{formButtonText}</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
