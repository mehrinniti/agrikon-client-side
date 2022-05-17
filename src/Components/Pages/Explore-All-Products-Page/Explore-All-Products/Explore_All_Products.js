import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import Product_Banner from '../Product-Banner/Product_Banner';
import Product_Section from '../Products-Section/Product_Section';
import useDocumentTitle from '../../../../hooks/useDocumentTitle';
import './Explore_All_Products.css';

const Explore_All_Products = () => {

    // dynamic title
    useDocumentTitle("Explore All Products");

    return (
        <div>
            <Navbar></Navbar>
            <div className='explore-all-products-section'>
                {/* <h4 className='mt-5 pt-5 '>This is Explore All Products Page</h4>
                <h1 className='mt-5 pt-5 mb-5 pb-5 text-success'>Coming soon ...</h1> */}
                <Product_Banner></Product_Banner>
                <Product_Section></Product_Section>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Explore_All_Products;