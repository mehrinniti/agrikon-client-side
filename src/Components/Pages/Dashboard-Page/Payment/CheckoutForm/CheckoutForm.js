import { CircularProgress, Button } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../../../hooks/useAuth';
// import './CheckoutFormStyle.css';

const CheckoutForm = ({ orderPayment }) => {

    const { productPrice, productName, _id, userEmail } = orderPayment;


    // console.log('payment id ', _id)

    // redirect private route
    const history = useHistory();
    const redirectUrl = "/dashboard/singlePayment";

    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    // const { user, setIsPaid } = useAuth();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    // const [isPaid, setIsPaid] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ productPrice })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, [productPrice]);

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        setProcessing(true);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message);
            setSuccess('');
        } else {
            setError('');
            console.log('[PaymentMethod]', paymentMethod);
        }

        //  payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: productName,
                        email: userEmail
                        // email: user.email
                    },
                },
            },
        );

        // if (intentError) {
        //     setError(intentError.message);
        //     setSuccess('');
        // }
        // else {
        //     setError('');
        //     setSuccess('You payment processed successfully.')
        //     console.log(paymentIntent)
        //     setProcessing(false);


        if (intentError) {
            swal({
                title: intentError.message,
                icon: "error",
            });
            setProcessing(false);
        } else {
            // setIsPaid(true);
            setSuccess("Your payment processed successfully");
            swal({
                title: "Your payment processed successfully",
                icon: "success",
            });
            // history.push(redirectUrl);

            setProcessing(false);



            //save to database
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentIntent.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }

            // const url = `http://localhost:5000/orders/${_id}`;
            // fetch(url, {
            //     method: 'PUT',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(payment)
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         console.log(data);
            //         // history.push(redirectUrl);
            //     });


            axios
                .put(
                    `http://localhost:5000/payment/${_id}`,
                    payment
                )
                .then((result) => {
                    // console.log(result);
                    console.log('checkout console payment ', payment);
                    //   navigate("/myOrders");
                    history.push(redirectUrl);
                });
        }

    }
    return (
        <div>
            <form className="checkout-form" onSubmit={handleSubmit}>
                <CardElement
                    className="card-element"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                fontWeight: 600,
                                color: 'rgba(44, 44, 44, 0.688)',
                                '::placeholder': {
                                    color: 'rgba(44, 44, 44, 0.688)',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {processing ?
                    <CircularProgress color="success" /> :
                    <Button color="success" sx={{ fontSize: 16, marginTop: '50px' }} variant="contained" type="submit" disabled={!stripe || success}>Pay ৳ {productPrice}</Button>
                }

            </form>
            {
                error && <h5 style={{ color: 'red', marginTop: '40px' }}>{error}</h5>
            }
            {
                success && <h5 style={{ color: 'green', marginTop: '40px' }}>{success}</h5>
            }
        </div>
    );
};

export default CheckoutForm;