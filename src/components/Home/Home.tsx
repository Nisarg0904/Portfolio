import React from 'react';
import profileImg from "../../assets/2.png";
import shapeImgOne from "../../assets/shape-1.png";
import shapeImgTwo from "../../assets/shape-2.png";
import KrushangCV from "../../assets/Krushang_Parmar_Resume.pdf";
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./style.scss";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home__wrapper">
          <div className="home__container container">
            <p className="home__subtitle text-cs">
              HELLO, <span>MY NAME IS </span>
            </p>

            <h1 className="home__title text-cs">
              <span>Krushang</span> <br />Parmar
            </h1>

            <p className="home__job">
              <span className="text-cs">I am a</span> <b>Web Developer</b>
            </p>

            <div className="home__img-wrapper">
              <div className="home__banner">
                <img src={profileImg} alt="home-profile" className='home__profile' />
              </div>

              <p className="home__data home__data-one">
                <span className="text-lg">
                  2 <b>+</b>
                </span>

                <span className="text-sm text-cs">
                  Year of <span>Experience</span>
                </span>
              </p>

              <p className="home__data home__data-two">
                <span className="text-lg">
                  10 <b>+</b>
                </span>

                <span className="text-sm text-cs">
                  Completed <span>Projects</span>
                </span>
              </p>


              <img src={shapeImgOne} alt="shapeImg1" className='shape shape__1' />
              <img src={shapeImgTwo} alt="shapeImg2" className='shape shape__2' />
              <img src={shapeImgTwo} alt="shapeImg2" className='shape shape__3' />

            </div>

            <p className="home__text">
              Crafting web experiences that users love – I'm a developer who believes in the power of code to enhance user experience.
            </p>

            <div className="home__socials">
              <a href="https://www.instagram.com/krushangparmarr/" className="home__social-link link1">
                <FaInstagram />
              </a>
              <a href="https://wa.me/+919327775343" className="home__social-link link2">
                <FaWhatsapp />
              </a>
              <a href="https://www.linkedin.com/in/er-krushang-parmar-9210a51a6/" className="home__social-link link3">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Krushang-UIUX" className="home__social-link link4">
                <FaGithub />
              </a>
              <a href="https://twitter.com/ParmarKrushangD" className="home__social-link link5">
                <FaXTwitter />
              </a>
            </div>

            <div className="home__btns">
              <a download='Krushang_Parmar_Resume.pdf' href={KrushangCV} target="_blank" rel="noopener noreferrer" className="btn text-cs">
                Download CV
              </a>
              <Link activeClass="active" className='hero__link' to='skills' spy={true} hashSpy={true} smooth={true} offset={-150} duration={1000}>
                My Skills
              </Link>
            </div>

            <Link activeClass="active" className='home__mouse' to='services' spy={true} hashSpy={true} smooth={true} offset={-150} duration={1000}>
              <div className="item">
                <div className="mouse m-5">
                </div>
              </div>
            </Link>
          </div>

          <div className="section__deco deco__left home__deco">
            <img src={shapeImgOne} alt="shape_1" className='shape' />
          </div>
        </div>

        <div className="section__bg-wrapper">
          <span className="bg__title">Web Developer</span>
        </div>
      </section>
    </>
  )
}

export default Home;