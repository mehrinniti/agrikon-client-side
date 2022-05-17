import React, { useEffect } from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import useDocumentTitle from '../../../../hooks/useDocumentTitle';
import './About.css';
import SharedBannar from '../../../Shared/SharedBannar/SharedBannar';
import companyImg from '../../../../images/about-page/about-company_img.png';
import foodIcon from '../../../../images/about-page/organic-food-1.png';
import awwardIcon from '../../../../images/about-page/awward-icon.png';
import missionImg from '../../../../images/about-page/mission-1.jpg';
import visionImg from '../../../../images/about-page/vission-1.webp';
import memberImg3 from '../../../../images/about-page/niti.svg';
import memberImg1 from '../../../../images/about-page/dola.svg';
import memberImg2 from '../../../../images/about-page/sakib.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';


const About = () => {

    // dynamic title
    useDocumentTitle("About");

    useEffect(() => {
        Aos.init({ duration: 2800 });
    }, []);


    return (
        <div>
            <Navbar></Navbar>
            <div className='about-section'>
                <SharedBannar>About</SharedBannar>
                {/* <h4 className='mt-5 pt-5 '>This is About Page</h4>
                <h1 className='mt-5 pt-5 mb-5 pb-5 text-success'>Coming soon ...</h1> */}

                <div className="card mx-auto mt-4 border-0" style={{ maxWidth: "85%" }}>
                    <div className="row g-5">
                        <div className="col-md-6">
                            <div data-aos="fade-down" className="card-body text-start about-page-text">
                                <h4 className="card-title mb-3">About Us</h4>
                                <h1>Welcome To Our Company</h1>
                                <p className="card-text mt-3 text-secondary">We are an e-company. We are providing all agriculture-related information. We give a scope that customers can buy goods and other accessories safely from us. We are providing skilled and experienced farmers.</p>

                                <div className="mt-5 about-company-2nd-section">
                                    <div className="row align-items-start g-5">
                                        <div className="col">
                                            <img className='  pb-2' src={foodIcon} alt="" />
                                            <h5 className='fw-bold'>100% Natural</h5>
                                            <p className="card-text text-secondary">We are providing 100% fresh and natural food.</p>
                                        </div>
                                        <div className="col">
                                            <img className='  pb-2' src={awwardIcon} alt="" />
                                            <h5 className='fw-bold'>Award Winning</h5>
                                            <p className="card-text text-secondary">We have been rewarded for our various activities.</p>
                                        </div>

                                    </div>

                                </div>


                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col-md-6">
                            <img style={{ maxWidth: "100%", maxHeight: "90%" }} src={companyImg} className="img-fluid rounded-start companyImg" alt="..." />
                        </div>
                    </div>
                </div>

                <div className="card mb-3 mx-auto border-0" style={{ maxWidth: '85%' }}>
                    <div className="row g-4">
                        <div data-aos="fade-up" className="col-md-5">
                            <img src={missionImg} className="img-fluid rounded-start missionImg" alt="..." />
                        </div>
                        <div data-aos="fade-down" className="col-md-7">
                            <div className="mission-text card-body text-start">
                                <h1 className="card-title pb-2">Mission</h1>
                                <p className="card-text text-secondary">We give the right information to the farmers and ranchers so that they can work in the right way. A skilled and experienced farmers will be able to hire from us. You can buy hygienic food and other accessories from us.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 mx-auto border-0 mt-4 mb-5" style={{ maxWidth: '85%' }}>
                    <div className="row g-5">
                        <div className="col-md-7">
                            <div data-aos="fade-down" className="mission-text card-body text-start">
                                <h1 className="card-title pb-2">Vision</h1>
                                <p className="card-text text-secondary">Moving forward with the dream of eliminating fraud in e-commerce and revolutionizing agriculture. In the future, we will start the process of giving loans to farmers.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="col-md-5">
                            <img src={visionImg} className="img-fluid rounded-end visionImg" alt="..." />
                        </div>
                    </div>
                </div>

                <div className='mb-5'>
                    <h1 className='pt-4 pb-5'>Meet Our Team Members</h1>

                    <div className="container">


                        <div className="row row-cols-1 row-cols-md-3 g-0 mx-5">

                            <div className="col member-card">
                                <div data-aos="fade-down" className=" card h-100 w-75 mx-auto border-0">
                                    <img src={memberImg2} className="card-img-top img-fluid h-100" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title pt-1 pb-3">Farhan Sakib</h4>
                                        <span>
                                            <a target="_blank" rel='noreferrer' href="https://facebook.com"><i className="fab fa-facebook-f farmer-social-icon farmer-instagram member-social-icon farmer-facebook me-3"></i></a>
                                            <a target="_blank" rel='noreferrer' href="https://twitter.com/"><i className="fab fa-twitter farmer-social-icon member-social-icon me-3"></i></a>
                                            <a target="_blank" rel='noreferrer' href="https://www.instagram.com/"><i className="fab fa-instagram fw-bold farmer-social-icon farmer-instagram member-social-icon"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col member-card">
                                <div data-aos="fade-down" data-aos-delay="600" className=" card h-100 w-75 mx-auto border-0">
                                    <img src={memberImg3} className="card-img-top img-fluid h-100" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title pt-1 pb-3">Sayma Sultana Niti</h4>
                                        <span>
                                            <a target="_blank" rel='noreferrer' href="https://facebook.com"><i className="fab fa-facebook-f farmer-social-icon farmer-instagram member-social-icon farmer-facebook me-3"></i></a>
                                            <a target="_blank" rel='noreferrer' href="https://twitter.com/"><i className="fab fa-twitter farmer-social-icon member-social-icon me-3"></i></a>
                                            <a target="_blank" rel='noreferrer' href="https://www.instagram.com/"><i className="fab fa-instagram fw-bold farmer-social-icon farmer-instagram member-social-icon"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col member-card">
                                <div data-aos="fade-down" data-aos-delay="1200" className=" card h-100 w-75 mx-auto border-0">
                                    <img src={memberImg1} className="card-img-top img-fluid h-100" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title pt-1 pb-3">Taslima Tahsin Dola</h4>
                                        <span>
                                            <a target="_blank" rel='noreferrer' href="https://facebook.com"><i className="fab fa-facebook-f farmer-social-icon farmer-instagram member-social-icon farmer-facebook me-3"></i></a>
                                            <a target="_blank" rel='noreferrer' href="https://twitter.com/"><i className="fab fa-twitter farmer-social-icon member-social-icon me-3"></i></a>
                                            <a target="_blank" rel='noreferrer' href="https://www.instagram.com/"><i className="fab fa-instagram fw-bold farmer-social-icon farmer-instagram member-social-icon"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;