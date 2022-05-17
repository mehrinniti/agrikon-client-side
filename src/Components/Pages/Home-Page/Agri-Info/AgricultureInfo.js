import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AgricultureInfo.css'
import cropsIcon from "../../../../images/icon-crops.png"
import cowInfo from "../../../../images/Home/cow-img.jpg"
import riceInfo from "../../../../images/Home/rice-field-paddy-food.jpg"
// import grainInfo from "../../../../images/Home/grain-img.jpg"
import FistInfo from "../../../../images/Home/fish-1.jpg"

import Aos from 'aos';
import 'aos/dist/aos.css';

const AgricultureInfo = () => {

    useEffect(() => {
        Aos.init({ duration: 2800 });
    }, []);


    return (
        <div className='agricaltureInfo'>
            <div data-aos="fade-up">
                <img src={cropsIcon} alt="" />
                <h2>Agricultural Information</h2>
                <hr className='home-info-line' />
            </div>


            <div data-aos="fade-up" className="container-lg">
                <div className="row align-items-start info-container">
                    <div className="col img-section agri-info-hover-img">
                        <Link to="/cropsInfo">
                            <span data-aos="flip-left">
                                <img className='info-img rice-home-img hover-img ' src={riceInfo} alt="" />
                                <div className="middle-info-name  middle-info-crops">
                                    <div className="hover-text">Crops</div>
                                </div>
                            </span>
                        </Link>

                    </div>
                    <div className="col agri-info-hover-img">
                        <Link to="/animalsInfo">
                            <img className='rice-home-img hover-img' src={cowInfo} alt="" />
                            <div className="middle-info-name middle-info-animals">
                                <div className="hover-text">Animals</div>
                            </div>
                        </Link>
                    </div>
                    <div className="col agri-info-hover-img">
                        <Link to="/fishInfo">
                            <img className='hover-img' src={FistInfo} alt="" />
                            <div className="middle-info-name middle-info-fish">
                                <div className="hover-text">Fish</div>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default AgricultureInfo;