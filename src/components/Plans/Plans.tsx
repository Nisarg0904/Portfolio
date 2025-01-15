import React from 'react';
import shapeImgOne from "../../assets/shape-1.png";
import shapeImgTwo from "../../assets/shape-2.png";
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import "./style.scss";
import { Link } from 'react-scroll';

const Plans = () => {
    return (
        <>
            <section className="plans section" id='plans'>
                <h2 className="section__title text-cs">Plans</h2>
                <p className="section__subtitle">
                    My <span>Plans Board</span>
                </p>
                <div className="plans__container container grid">
                    <div className="plans__item card card-one">
                        <p className="plans__subtitle text-cs">Web Designing</p>
                        <h3 className="plans__price">
                            Basic Plan
                        </h3>
                        <p className="plans__description">
                            Crafting captivating web experiences with a touch of finesse, seamlessly blending design innovation with meticulous bug-solving expertise on an hourly basis.
                        </p>

                        <ul className="plans__list">
                            <li className="list__item">
                                <FaCheck className='list__icon'></FaCheck>
                                <span>Web Development</span>
                            </li>
                            <li className="list__item">
                                <FaCheck className='list__icon'></FaCheck>
                                <span>Bug Solving</span>
                            </li>
                            <li className="list__item">
                                <del>Quality Assurance</del>
                            </li>
                            <li className="list__item">
                                <del>UI/UX Designing</del>
                            </li>
                        </ul>

                        <Link activeClass="active" className='btn plans__btn text-cs' to='contact' spy={true} hashSpy={true} smooth={true} offset={-150} duration={1000}>
                            Start Project
                            <FaArrowRight className='plans__btn-icon'></FaArrowRight>
                        </Link>

                        <img src={shapeImgTwo} alt="shapeImg2" className='shape c__shape' />
                    </div>


                    <div className="plans__item-wrapper">
                        <span className="plans__label text-cs">Popular</span>
                        <div className="plans__item card card-one">
                            <p className="plans__subtitle text-cs">UI/UX Development</p>
                            <h3 className="plans__price">
                                Professional Plan
                            </h3>
                            <p className="plans__description">
                                Hourly artisan of web and UI/UX design, Quality Assurance, and bug-solving expertise—crafting digital excellence with precision and creativity.
                            </p>

                            <ul className="plans__list">
                                <li className="list__item">
                                    <FaCheck className='list__icon'></FaCheck>
                                    <span>UI/UX Designing</span>
                                </li>
                                <li className="list__item">
                                    <FaCheck className='list__icon'></FaCheck>
                                    <span>Web Development</span>
                                </li>
                                <li className="list__item">
                                    <FaCheck className='list__icon'></FaCheck>
                                    <span>Quality Assurance</span>
                                </li>
                                <li className="list__item">
                                    <FaCheck className='list__icon'></FaCheck>
                                    <span>Bug Solving</span>
                                </li>
                            </ul>
                            <Link activeClass="active" className='btn plans__btn text-cs' to='contact' spy={true} hashSpy={true} smooth={true} offset={-150} duration={1000}>
                                Start Project
                                <FaArrowRight className='plans__btn-icon'></FaArrowRight>
                            </Link>

                            <img src={shapeImgTwo} alt="shapeImg2" className='shape c__shape' />
                        </div>
                    </div>

                    <div className="plans__item card card-one">
                        <p className="plans__subtitle text-cs">Graphics Design</p>
                        <h3 className="plans__price">
                            Annual Plan
                        </h3>
                        <p className="plans__description">
                            Crafted a year-long visual journey for Indian festivals, blending artistry with versatility through three distinct design transformations.
                        </p>

                        <ul className="plans__list">
                            <li className="list__item">
                                <FaCheck className='list__icon'></FaCheck>
                                <span>Festival Posters</span>
                            </li>
                            <li className="list__item">
                                <FaCheck className='list__icon'></FaCheck>
                                <span>Offer Posters</span>
                            </li>
                            <li className="list__item">
                                <FaCheck className='list__icon'></FaCheck>
                                <span>Give 3 Changes only</span>
                            </li>
                            <li className="list__item">
                                <del>Social Media Marketing</del>
                            </li>
                        </ul>

                        <Link activeClass="active" className='btn plans__btn text-cs' to='contact' spy={true} hashSpy={true} smooth={true} offset={-150} duration={1000}>
                            Start Project
                            <FaArrowRight className='plans__btn-icon'></FaArrowRight>
                        </Link>

                        <img src={shapeImgTwo} alt="shapeImg2" className='shape c__shape' />
                    </div>
                </div>


                <div className="section__deco deco__left">
                    <img src={shapeImgOne} alt="shape_1" className='shape' />
                </div>

                <div className="section__bg-wrapper">
                    <span className="bg__title">Plans</span>
                </div>
            </section>
        </>
    )
}

export default Plans;