import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { navItems } from '../../data.js';
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";

const NavBar = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeLink, setActiveLink] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(storedTheme);
        document.body.classList.toggle('dark-mode', storedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        document.body.classList.toggle('dark-mode', newTheme);
        localStorage.setItem('darkMode', newTheme);
    };

    const handleClick = (index) => {
        setActiveLink(index);
        setMenuOpen(false); // إغلاق القائمة عند النقر على رابط
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="navbar">
            <div className="logo">{props.name}</div>
            <div className="menu-toggle" onClick={toggleMenu}>
                <FiMenu />
            </div>
            <nav>
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    {navItems.map((menuItem, index) => (
                        <li key={index}>
                            <a
                                href={`#${menuItem.toLowerCase().replace(' ', '-')}`}
                                className={activeLink === index ? 'active' : ''}
                                onClick={() => handleClick(index)}
                            >
                                {menuItem}
                            </a>
                        </li>
                    ))}
                    {/* زر تبديل الوضع الداكن (يظهر أسفل العناصر في الشاشات الصغيرة) */}
                    <li className="theme-toggle" onClick={toggleTheme}>
                        {isDarkMode ? (
                            <CiLight style={{ fontSize: '1.5rem' }} />
                        ) : (
                            <MdDarkMode style={{ fontSize: '1.5rem' }} />
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
