
import React, { useEffect } from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import useDocumentTitle from '../../../../hooks/useDocumentTitle';
import './Agri_Information.css';
import { Link } from 'react-router-dom';
import cropsIcon from "../../../../images/icon-crops.png"
import cowInfo from "../../../../images/Home/cow-img.jpg"
import riceInfo from "../../../../images/Home/rice-field-paddy-food.jpg"
import FistInfo from "../../../../images/Home/fish-1.jpg"

import Aos from 'aos';
import 'aos/dist/aos.css';
import SharedBannar from '../../../Shared/SharedBannar/SharedBannar';

const Agri_Information = () => {

    // dynamic title
    useDocumentTitle("Agricultural Information");

    //  Animation    
    useEffect(() => {
        Aos.init({ duration: 2800 });
    }, []);


    return (
        <div>
            <Navbar></Navbar>
            {/* <div className='agri-information-section'>
                <h4 className='mt-5 pt-5 '>This is Agricultural Information Page</h4>
                <h1 className='mt-5 pt-5 mb-5 pb-5 text-success'>Coming soon ...</h1>
            </div> */}






            <div className=' agri-information-section'>


                <SharedBannar>Agricultural Information</SharedBannar>

                <div className='agricaltureInfo py-5'>

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
                <br />

            </div>













            <Footer></Footer>
        </div>
    );
};

export default Agri_Information;