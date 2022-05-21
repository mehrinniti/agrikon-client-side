import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { Navigation, EffectFade, Autoplay, Pagination } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import "swiper/css/pagination";
// import "./styles.css";

// import useDocumentTitle from "../../../../../hooks/useDocumentTitle";
import SingleReview from "../SingleReview/SingleReview";
import cropsIcon from "../../../../../images/icon-crops.png";
import Aos from 'aos';
import 'aos/dist/aos.css';



const Reviews = () => {
    // dynamic title
    // useDocumentTitle("Review");


    //  Animation
    useEffect(() => {
        Aos.init({ duration: 2800 });
    }, []);


    const [clientReviews, setClientReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        axios
            .get("https://dry-earth-68796.herokuapp.com/reviews")
            .then((result) => {
                setClientReviews(result.data);
                setIsLoading(false);
            });
    }, []);

    // loading spinner
    if (isLoading) {
        return (
            <Box sx={{ textAlign: "center", py: 2 }}>
                <CircularProgress color="success" />
            </Box>
        );
    }

    return (
        <Box sx={{ bgcolor: "#c7ffdf46", marginBottom: '90px' }}>

            <div data-aos="fade-up" className='agricaltureInfo py-5'>
                <img src={cropsIcon} alt="" />
                <h2>What Client's Say</h2>
                <hr className='home-info-line' />
            </div>

            <Container sx={{ py: 0 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 2, sm: 8, md: 12 }}
                    >
                        <Grid item xs={2} sm={8} md={12} sx={{ py: 2 }}>
                            <Swiper
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Navigation, EffectFade, Pagination, Autoplay]}
                                navigation
                                effect
                                className="mySwiper"
                                speed={800}
                                slidesPerView={1}
                                spaceBetween={10}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 10,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 15,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 15,
                                    },
                                }}
                            >
                                {clientReviews.map((clientReview) => (
                                    <SwiperSlide key={clientReview._id}>
                                        <SingleReview clientReview={clientReview}></SingleReview>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Reviews;