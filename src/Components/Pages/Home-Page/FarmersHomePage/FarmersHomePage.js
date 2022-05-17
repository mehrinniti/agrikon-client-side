import React, { useEffect } from 'react';
import './FarmersHomePage.css';
import cropsIcon from "../../../../images/icon-crops.png";
import farmer1 from "../../../../images/Home/home-farmer-1.jpg";
import farmer2 from "../../../../images/Home/home-farmer-2.jpg";
import farmer3 from "../../../../images/Home/home-farmer-3.jpg";
// import cropsIcon from "../../../../images/icon-crops.png";
// import farmer1 from "../../../../images/Home/farmer-1.jpg";
// import farmer2 from "../../../../images/Home/farmer-4.jpg";
// import farmer3 from "../../../../images/Home/farmer-5.jpg";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const FarmersHomePage = () => {

    useEffect(() => {
        Aos.init({ duration: 2800 });
    }, []);

    return (
        <div className='Farmers-home-section mb-5 pt-1'>
            <div data-aos="fade-up" className='agricaltureInfo mt-5 farmers-title'>
                <img src={cropsIcon} alt="" />
                <h2>Meet Our Farmers</h2>
                <hr className='home-info-line' />
            </div>


            <div className='container'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div data-aos="flip-left" className="col">
                        <div className="card h-100  rounded-3">
                            <div className='farmer-card-img farmer-img rounded-3'>
                                <img src={farmer1} className="card-img-top shadow-sm" alt="..." />
                            </div>
                            <div className="card-body">
                                <h3 className="card-title farmer-name">Farhan Grimes</h3>
                                <span>
                                    <a target="_blank" rel='noreferrer' href="https://facebook.com"><i className="fab fa-facebook-f farmer-social-icon farmer-facebook me-3"></i></a>
                                    <a target="_blank" rel='noreferrer' href="https://twitter.com/"><i className="fab fa-twitter farmer-social-icon me-3"></i></a>
                                    <a target="_blank" rel='noreferrer' href="https://www.youtube.com/"><i className="fab fa-youtube farmer-social-icon"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-left" className="col">
                        <div className="card h-100 rounded-3">
                            <div className='farmer-card-img farmer-img rounded-3'>
                                <img src={farmer2} className="card-img-top shadow-sm" alt="..." />
                            </div>
                            <div className="card-body">
                                <h3 className="card-title farmer-name">Sakib Ryan</h3>
                                <span>
                                    <a target="_blank" rel='noreferrer' href="https://facebook.com"><i className="fab fa-facebook-f farmer-social-icon farmer-facebook me-3"></i></a>
                                    <a target="_blank" rel='noreferrer' href="https://twitter.com/"><i className="fab fa-twitter farmer-social-icon me-3"></i></a>
                                    <a target="_blank" rel='noreferrer' href="https://www.youtube.com/"><i className="fab fa-youtube farmer-social-icon"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-left" className="col">
                        <div className="card h-100 rounded-3">
                            <div className='farmer-card-img farmer-img rounded-3'>
                                <img src={farmer3} className="card-img-top shadow-sm" alt="..." />
                            </div>
                            <div className="card-body">
                                <h3 className="card-title farmer-name">Nabil Mondol</h3>
                                <span>
                                    <a target="_blank" rel='noreferrer' href="https://facebook.com"><i className="fab fa-facebook-f farmer-social-icon farmer-facebook me-3"></i></a>
                                    <a target="_blank" rel='noreferrer' href="https://twitter.com/"><i className="fab fa-twitter farmer-social-icon me-3"></i></a>
                                    <a target="_blank" rel='noreferrer' href="https://www.youtube.com/"><i className="fab fa-youtube farmer-social-icon"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <span className='green-outline-btn'>
                <Link to="/farmers" className="btn outline-btn green-colorless-btn">Explore All Farmers <i className="fas fa-chevron-right start-icon"></i><i className="fas fa-chevron-right start-icon"></i></Link>
            </span>


        </div>
    );
};

export default FarmersHomePage;