import React, { useState, useEffect } from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import useDocumentTitle from '../../../../hooks/useDocumentTitle';
import './Our_Farmers.css';
import { Box, CircularProgress, Grid } from '@mui/material';
import SingleFarmer from '../SingleFarmer/SingleFarmer';
import SharedBannar from '../../../Shared/SharedBannar/SharedBannar';

const Our_Farmers = () => {

    // dynamic title
    useDocumentTitle("Our Farmers");


    const [allFarmers, setAllFarmers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        //  Email er url eta dite hobe
        // const url = `https://dry-earth-68796.herokuapp.com/orders?email=${user.email}&date=${date}`
        // const url = `https://dry-earth-68796.herokuapp.com/products`

        fetch('https://dry-earth-68796.herokuapp.com/farmers')
            .then(res => res.json())
            .then(data => {
                setAllFarmers(data);
                console.log(data);
                setIsLoading(false);
            })
    }, [])


    // loading spinner
    if (isLoading) {
        return (
            <Box sx={{ textAlign: "center", py: 2 }}>
                <CircularProgress color="success" />
            </Box>
        );
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='our-farmers-section'>

                <SharedBannar>Our Farmers</SharedBannar>

                <div className="container farmer-hire-container">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, sm: 3, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                            {
                                allFarmers.slice(0, 34).map(singleFarmer => <SingleFarmer
                                    key={singleFarmer.name}
                                    singleFarmer={singleFarmer}
                                ></SingleFarmer>)
                            }

                        </Grid>
                    </Box>
                </div>


            </div>
            <Footer></Footer>
        </div>
    );
};

export default Our_Farmers;