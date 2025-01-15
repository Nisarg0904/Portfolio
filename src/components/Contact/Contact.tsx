import React, { useState } from 'react';
import "./style.scss";
import shapeImgOne from "../../assets/shape-1.png";
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value})
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        axios.post('https://sheet.best/api/sheets/56b7bbe9-726b-4ae6-82f9-50a5eb2da9c2', form).then((response) => {
            setForm({ name: '', email: '', subject: '', message: ''});
        })
    }
    return (
        <>
            <section className="contact section" id='contact'>
                <h2 className="section__title text-cs">Contact Me</h2>
                <p className="section__subtitle">
                    Lets's <span>Talk About Ideas</span>
                </p>

                <div className="contact__container container grid">
                    <div className="contact__content">
                        <div className="contact__card">
                            <span className="contact__card-icon">
                                <FaRegMap />
                            </span>
                            <h3 className="contact__card-title">Address</h3>
                            <p className="contact__card-data">Bhadwatnagar, Ghodasar, Ahmedabad 380050</p>
                        </div>
                        <div className="contact__card">
                            <span className="contact__card-icon">
                                <FaRegUser />
                            </span>
                            <h3 className="contact__card-title">Krushang D. Parmar</h3>
                            <p className="contact__card-data">9:00am to 6:30pm (Mon to Fri)</p>
                        </div>
                        <div className="contact__card">
                            <span className="contact__card-icon">
                                <FaRegEnvelope />
                            </span>
                            <h3 className="contact__card-title">Email</h3>
                            <p className="contact__card-data">krushang.webdev@gmail.com</p>
                        </div>
                        <div className="contact__card">
                            <span className="contact__card-icon">
                                <FaRegAddressBook />
                            </span>
                            <h3 className="contact__card-title">Phone</h3>
                            <p className="contact__card-data">+91 93277 75343</p>
                        </div>
                    </div>

                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__form-group grid">
                            <div className="contact__form-div">
                                <label className="contact__form-tag text-cs">
                                    Your Full Name <b>*</b>
                                </label>
                                <input type="text" name='name' className='contact__form-input' onChange={handleChange} value={form.name} required/>
                            </div>

                            <div className="contact__form-div">
                                <label className="contact__form-tag text-cs">
                                    Your Email Address <b>*</b>
                                </label>
                                <input type="email" name='email' className='contact__form-input' onChange={handleChange} value={form.email} required/>
                            </div>
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">
                                Your Subject <b>*</b>
                            </label>
                            <input type="text" name='subject' className='contact__form-input' onChange={handleChange} value={form.subject} required/>
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag text-cs">
                                Your Message <b>*</b>
                            </label>
                            <textarea className='contact__form-input' name='message' onChange={handleChange} value={form.message} required/>
                        </div>

                        <div className="contact__submit">
                            <p>* Accept the terms and conditions.</p>
                            <button type="submit" className="btn text-cs">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                <div className="section__deco deco__right">
                    <img src={shapeImgOne} alt="shape_1" className='shape' />
                </div>

                <div className="section__bg-wrapper">
                    <span className="bg__title">Contact Me</span>
                </div>
            </section>
        </>
    )
}

export default Contact;