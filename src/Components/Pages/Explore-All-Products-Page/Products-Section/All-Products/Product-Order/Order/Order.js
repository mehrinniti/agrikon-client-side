import * as React from 'react';
import { useState, useEffect } from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import { Container } from '@mui/material';
import './Order.css';
import Navbar from '../../../../../../Shared/Navbar/Navbar';
import Footer from '../../../../../../Shared/Footer/Footer';
import { useForm } from "react-hook-form";
import useDocumentTitle from "../../../../../../../hooks/useDocumentTitle";
import useAuth from '../../../../../../../hooks/useAuth';
import swal from "sweetalert";
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Order = () => {
    // const Order = ({ singleAllProduct }) => {

    // const { name, image, weight, price } = singleAllProduct;

    // dynamic title
    useDocumentTitle("Place Order");

    // params
    const { id } = useParams();

    // redirect  route
    const history = useHistory();
    const redirectUrl = "/products";
    // const redirectUrl = "/dashboard/myOrders";


    // const { name, image, weight, price } = props.singleAllProduct;
    const { user, email } = useAuth();
    const initialInfo = { userName: user.displayName, userEmail: user.email, phone: '', address: '', city: '' }

    const [orderInfo, setOrderInfo] = useState(initialInfo);
    const [orderData, setOrderData] = useState({});



    // load data
    useEffect(() => {
        // setIsLoading(true);
        fetch(`http://localhost:5000/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setOrderData(data);
                // setIsLoading(false);
            });
    }, [id]);

    // console.log(orderData)

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.targer.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        console.log(newInfo);
        setOrderInfo(newInfo);
    }

    // order form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            productName: orderData?.name,
            productWeight: orderData?.weight,
            productPrice: orderData?.price,
            // productImage: orderData?.image,
        },
    });
    // submit order
    const onSubmit = (data) => {
        console.log("Data", data)

        // e.preventDefault();

        // const order = {
        //     ...orderInfo,
        //     date,
        // name,
        // weight,
        // price
        // }


        data.status = "pending";
        data.image = orderData?.image;
        // data.img = `${image}`;
        data.userImg = user?.photoURL;
        axios
            .post("http://localhost:5000/orders", data)
            .then((result) => {
                if (result?.data?.insertedId) {
                    swal({
                        title: "Successfully purchased the product!",
                        icon: "success",
                    });
                    reset();
                    history.push(redirectUrl);
                }
            });


        //  send to the server
        // fetch('http://localhost:5000/orders', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application.json'
        //     },
        //     // body: JSON.stringify(order)
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             swal({
        //                 title: "Successfully ordered!",
        //                 icon: "success",
        //             });
        //         }
        //     })


    };

    //  Current date
    var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    // const [data, setDate] = React.useState('');

    // console.log(date);

    return (
        <>
            <Navbar></Navbar>
            <div className='order-section'>
                <div className="container py-5">
                    <h3 className='text-success'>Please order the product of your choice</h3>
                    <div className="row  order-container shadow-lg">
                        <div className="col">
                            {/* <img src="..." className="rounded mx-auto d-block" alt="..." /> */}
                            <img src={orderData?.image} className="rounded mx-auto d-block w-75" alt="..." />
                            {/* <h4>{name}</h4> */}
                            <h4>{orderData?.name}</h4>
                            <small>{orderData?.weight}</small>
                            {/* <small>{weight}</small> */}
                            {/* <h5>{price}</h5> */}
                            <h5><span style={{ fontSize: '22px', fontWeight: 800 }}>৳</span> {orderData?.price}</h5>
                        </div>
                        <div className="col order-form-container">
                            <div className="order-form">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        name='userName'
                                        onBlur={handleOnBlur}
                                        value={user?.displayName}
                                        // defaultValue={user?.displayName}
                                        {...register("userName", { required: true })}
                                    />
                                    {errors.userName && (
                                        <span className="text-danger">User Name is required</span>
                                    )}
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name='userEmail'
                                        onBlur={handleOnBlur}
                                        value={user?.email}
                                        // defaultValue={user?.email}
                                        {...register("userEmail", { required: true })}
                                    />
                                    {errors.userEmail && (
                                        <span className="text-danger">User Email is required</span>
                                    )}
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        name='phone'
                                        onBlur={handleOnBlur}
                                        {...register("phone", { required: true })}
                                    />
                                    {errors.phone && (
                                        <span className="text-danger">Phone Number is required</span>
                                    )}
                                    <input
                                        type="text"
                                        placeholder="Product Name"
                                        value={orderData?.name}
                                        {...register("productName", { required: true })}
                                    />
                                    {errors.name && (
                                        <span className="text-danger">Product name is required</span>
                                    )}
                                    <input
                                        type="text"
                                        placeholder="Weight"
                                        value={orderData?.weight}
                                        {...register("productWeight", { required: true })}
                                    />
                                    {errors.weight && (
                                        <span className="text-danger">Weight is required</span>
                                    )}
                                    <input
                                        type="text"
                                        placeholder="Price"
                                        value={orderData?.price}
                                        {...register("productPrice", { required: true })}
                                    />
                                    {errors.price && (
                                        <span className="text-danger">Price is required</span>
                                    )}
                                    <textarea
                                        className='order-tectarea'
                                        placeholder="Address"
                                        name='address'
                                        onBlur={handleOnBlur}
                                        {...register("address", { required: true })}
                                    />
                                    {errors.address && (
                                        <span className="text-danger">Address is required</span>
                                    )}
                                    <input
                                        type="text"
                                        placeholder="City"
                                        name='city'
                                        onBlur={handleOnBlur}
                                        {...register("city", { required: true })}
                                    />
                                    {errors.city && (
                                        <span className="text-danger">City is required</span>
                                    )}

                                    <input
                                        // type="date"
                                        placeholder="Date"
                                        value={date}
                                        {...register("date", { required: true })}
                                    />
                                    {errors.date && (
                                        <span className="text-danger">Date is required</span>
                                    )}

                                    <input
                                        type="submit"
                                        value="Buy Now"
                                        className="order-btn"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    );
};

export default Order;
