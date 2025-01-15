import React, { useEffect, useState } from 'react';
import shapeImgOne from "../../assets/shape-1.png";
import kIcon from "../../assets/2icon.png";
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsSun, BsMoon } from "react-icons/bs";
import { links } from '../../Data';
import './style.scss';
import { Link, animateScroll } from 'react-scroll';

const getStorageTheme = (): string => {
    let theme = 'dark-theme';
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme') || 'dark-theme'; 
    }
    return theme; 
  };

const Header = () => {
    const [showMenu, setShowmenu] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);
    const [theme, setTheme] = useState(getStorageTheme());

    const scrollTop = () => {
        animateScroll.scrollToTop();
    }

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        }
        else {
            setScrollNav(false);
        }
    }

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme')
        }
        else {
            setTheme('light-theme')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    useEffect(() => {
        document.body.classList.toggle('no-scroll', showMenu);
    }, [showMenu]);

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <>
            <header className={`${scrollNav ? 'scroll-header' : ''} header`}>
                <nav className="nav">
                    <Link to='/' onClick={scrollTop} className="nav__logo text-cs">
                        <img src={kIcon} alt="krushang"/>
                    </Link>

                    <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
                        <div className="nav__data">
                            <ul className="nav__list">
                                {links.map(({ name, path }, index) => (
                                    <li className="nav__item" key={index}>
                                        <Link activeClass="active" className='nav__link text-cs' to={path} spy={true} hashSpy={true} smooth={true} offset={-150} duration={500} onClick={() => {
                                            setShowmenu(!showMenu);
                                        }}>{name}</Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="header__socials">
                                <a href="https://www.instagram.com/krushangparmarr/" className="header__social-link link1">
                                    <FaInstagram />
                                </a>
                                <a href="https://wa.me/+919327775343" className="header__social-link link2">
                                    <FaWhatsapp />
                                </a>
                                <a href="https://www.linkedin.com/in/er-krushang-parmar-9210a51a6/" className="header__social-link link3">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/Krushang-UIUX" className="header__social-link link4">
                                    <FaGithub />
                                </a>
                                <a href="https://twitter.com/ParmarKrushangD" className="header__social-link link5">
                                    <FaXTwitter />
                                </a>
                            </div>
                        </div>
                        <div className="section__deco deco__left header__deco">
                    <img src={shapeImgOne} alt="shape_1" className='shape' />
                </div>
                    </div>
                    <div className="nav__btns">
                        <div className="theme__toggle" onClick={toggleTheme}> 
                            {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
                        </div>
                        <div className={`${showMenu ? 'nav__toggle animated-toggle' : 'nav__toggle'}`} onClick={() => {
                            setShowmenu(!showMenu);
                        }}>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;