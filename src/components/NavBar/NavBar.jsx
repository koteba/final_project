import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { navItems } from '../../data.js'; // استيراد البيانات

const NavBar = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

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

    return (
        <header className="navbar">
            <div className="logo">{props.name}</div>
            <nav>
                <ul className="nav-links">
                    {navItems.map((menuItem, index) => (
                        <li key={index}>
                            <a
                                href={`#${menuItem.toLowerCase().replace(' ', '-')}`}
                                className={index === 0 ? 'active' : ''}
                            >
                                {menuItem}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* زر تبديل الوضع */}
            <div className="theme-toggle" onClick={toggleTheme}>
                {isDarkMode ? '☀️' : '🌙'}
            </div>
        </header>
    );
};

export default NavBar;
