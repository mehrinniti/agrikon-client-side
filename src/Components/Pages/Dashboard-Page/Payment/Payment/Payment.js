import { Container, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
// import './Payment.css';


const stripePromise = loadStripe('pk_test_51Kx2XVIE8CZq6NvCRqAqCC6TkIyQQ30XjAoCPZOQLWk5s7JWtI37lVo01XXslHSyzkhEGtiMf2ceKNNg6vHeaSnh00KCERGBQr');


const Payment = () => {

    // dynamic title
    useDocumentTitle("Payment");

    const { orderId } = useParams();
    const [orderPayment, setOrderPayment] = useState({});
    useEffect(() => {
        fetch(`https://dry-earth-68796.herokuapp.com/payment/${orderId}`)
            .then(res => res.json())
            .then(data => {
                console.log('payment data', data);
                setOrderPayment(data);
            });
    }, [orderId])

    // useEffect(() => {
    //     axios
    //         .get(`https://dry-earth-68796.herokuapp.com/allOrders/${orderId}`)
    //         .then((result) => setOrderPayment(result.data));
    // }, [orderId]);

    return (
        <div>
            {/* <h1 style={{ textTransform: 'uppercase' }}>Please pay for the {orderPayment.productName} </h1>
            <Divider />
            <h4>Pay: ৳ {orderPayment.productPrice}</h4>
            <div className="">
                {orderPayment?.productPrice && < Elements stripe={stripePromise}>
                    <CheckoutForm
                        orderPayment={orderPayment}
                    />
                </Elements>}
            </div> */}







            <Container sx={{ py: 2 }}>
                <Typography
                    sx={{ textAlign: "center", pb: 3, fontWeight: 600, color: 'rgb(37, 36, 36, 0.83)', textTransform: 'uppercase' }}
                    variant="h4"
                >
                    Please pay for the <span style={{ color: '#05b14d' }}> {orderPayment.productName}</span>
                </Typography>
                <Divider />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        // alignItems: "center",
                        marginX: "auto",
                        width: { xs: "80%", md: "50%" },
                        py: 9,
                    }}
                >
                    <Box>
                        <Grid container spacing={2}
                            className="credit-card-box"
                            sx={{
                                background: 'rgba( 255, 255, 255, 0.1)',
                                marginX: 'auto',
                                marginY: 'auto',
                                height: '302px',
                                width: '550px',
                                boxShadow: '20px 20px 50px rgba( 0, 0, 0, 0.2)',
                                // borderTop: '1px solid rgba( 255, 255, 255, 0.5)',
                                // borderLeft: '1px solid rgba( 255, 255, 255, 0.5)',
                                borderRadius: '20px',
                                backdropFilter: 'blur(5px)'

                            }}>
                            <Grid item xs={12} sx={{ marginX: 'auto', marginY: 'auto', }}>
                                {orderPayment?.productPrice && < Elements stripe={stripePromise}>
                                    <CheckoutForm
                                        orderPayment={orderPayment}
                                    />
                                </Elements>}
                            </Grid>

                            {/* <Grid item xs={12}>
                            <Button type="submit" className="adminBtn" sx={{ backgroundColor: "#008336", fontSize: 15, fontWeight: 600 }} fullWidth variant="contained">
                                Make Admin
                            </Button>
                        </Grid> */}
                        </Grid>
                    </Box>
                </Box>
            </Container>











        </div >
    );
};

export default Payment;