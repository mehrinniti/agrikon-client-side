import React from 'react';
import './Product_Banner.css';
import img01 from './../../../../images/vagitable-removebg-preview.png'
import img02 from './../../../../images/offers-icon-3.png'

const Product_Banner = () => {
    return (
        <div className='product-banner-section'>
            {/* <div className=" "> */}
            <div className="row align-items-start m-0 p-0">
                <div className="col product-banner-text">
                    We provide 100% fresh &amp; natural foods and good quality products.
                </div>
                <div className="col d-flex justify-content-start product-img-container">
                    <img className='vegitable-img' src={img01} alt="" />
                    <img className='offer-img' src={img02} alt="" />
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default Product_Banner;