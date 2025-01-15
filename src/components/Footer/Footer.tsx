import React from 'react';
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./style.scss";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__container container grid">
                    <div className="footer__socials">
                        <a href="https://www.instagram.com/krushangparmarr/" className="footer__social-link link1">
                            <FaInstagram />
                        </a>
                        <a href="https://wa.me/+919327775343" className="footer__social-link link2">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.linkedin.com/in/er-krushang-parmar-9210a51a6/" className="footer__social-link link3">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Krushang-UIUX" className="footer__social-link link4">
                            <FaGithub />
                        </a>
                        <a href="https://twitter.com/ParmarKrushangD" className="footer__social-link link5">
                            <FaXTwitter />
                        </a>
                    </div>
                    <p className="footer__copyright text-cs footer__max-content">Copyright &copy; 2023<span> krushangparmar</span>. All Rights Reserved</p>
                    <p className="footer__copyright text-cs">Developed by <span>Krushang Parmar</span></p>
                </div>
            </footer>
        </>
    )
}

export default Footer;