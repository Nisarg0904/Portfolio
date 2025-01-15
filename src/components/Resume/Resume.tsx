import React from 'react';
import { cv } from '../../Data';
import shapeImgOne from "../../assets/shape-1.png";
import "./style.scss";
import Card from './Card';

const Resume = () => {
    return (
        <>
            <div className="resume section" id='resume'>
                <h2 className="section__title text-cs">Resume</h2>
                <p className="section__subtitle">
                    My <span>Story</span>
                </p>
                <div className="resume__container container grid">
                    <div className="resume__group">
                        <h3 className="resume__heading">Education</h3>

                        <div className="resume__items">
                            {cv.map((val, id) => {
                                if(val.category === 'education') {
                                    return <Card key={id} title={val.title} subtitle={val.subtitle} date={val.date} description={val.description}></Card>
                                }
                                return null;
                            })}
                        </div>
                    </div>
                    <div className="resume__group">
                        <h3 className="resume__heading">Expirence</h3>

                        <div className="resume__items">
                            {cv.map((val, id) => {
                                if(val.category === 'experience') {
                                    return <Card key={id} title={val.title} subtitle={val.subtitle} date={val.date} description={val.description}></Card>
                                }
                                return null;
                            })}
                        </div>
                    </div>
                </div>

                <div className="section__deco deco__left">
                    <img src={shapeImgOne} alt="shape_1" className='shape' />
                </div>

                <div className="section__bg-wrapper">
                    <span className="bg__title">History</span>
                </div>
            </div>
        </>
    )
}

export default Resume;