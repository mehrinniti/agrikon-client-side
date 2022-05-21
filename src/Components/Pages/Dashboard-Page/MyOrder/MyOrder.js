import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import useDocumentTitle from '../../../../hooks/useDocumentTitle';
import SingleOrder from './SingleOrder';
import { confirmAlert } from "react-confirm-alert";
import axios from "axios";
import swal from "sweetalert";

const MyOrder = () => {

    // dynamic title
    useDocumentTitle("My Order");

    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    // const email = user?.email;
    // const emails = { email };
    // const values = Object.values(emails);

    console.log(user)


    useEffect(() => {
        //  Email er url eta dite hobe
        const url = `https://dry-earth-68796.herokuapp.com/orders?email=${user.email}`
        // console.log(user.email)
        //  Manage all order
        // const url = `https://dry-earth-68796.herokuapp.com/orders`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                console.log(data);
            })
    }, [user.email])
    // }, [date])



    const hanldeDelete = (id) => {
        // confirmAlert({
        //     message: "Are you sure want to cancel?",
        //     buttons: [
        //         {
        //             label: "Yes",
        //             onClick: () => {
        //                 axios
        //                     .delete(`https://dry-earth-68796.herokuapp.com/orders/${id}`)
        //                     .then((result) => {
        //                         if (result.data.deletedCount > 0) {
        //                             const remaining = orders.filter((event) => event._id !== id);
        //                             setOrders(remaining);
        //                             swal({
        //                                 title: "Order Canceled",
        //                                 icon: "success",
        //                             });
        //                         }
        //                     });
        //             },
        //         },
        //         {
        //             label: "No",
        //             onClick: () => {
        //                 return;
        //             },
        //         },
        //     ],
        // });



        const proceed = window.confirm('Are you sure, you want to cancel?')


        if (proceed) {
            // const url = `https://dry-earth-68796.herokuapp.com/orders/${id}`;
            // fetch(url, {
            //     method: 'DELETE'
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         if (data.deletedCount > 0) {
            //             swal({
            //                 title: "Successfully Deleted!",
            //                 icon: "success",
            //             });
            //             const remaining = allProducts.filter(allProduct => allProduct._id !== id)
            //             setAllProducts(remaining);
            //         }
            //     });


            axios
                .delete(`https://dry-earth-68796.herokuapp.com/orders/${id}`)
                .then((result) => {
                    if (result.data.deletedCount > 0) {
                        const remaining = orders.filter((event) => event._id !== id);
                        setOrders(remaining);
                        swal({
                            title: "Order Canceled",
                            icon: "success",
                        });
                    }
                });


        };





    };



    return (
        <div>
            <h1 style={{ fontWeight: 600, color: 'rgb(37, 36, 36, 0.83)' }}>My Orders</h1>
            <div className="container py-5 px-4 text-white rounded-3 shadow my-4" style={{ backgroundColor: '#006b2dbc' }}>
                <h2 className="text-center fs-2 mb-5">
                    My Total Orders: {orders.length}
                </h2>
                <div className="row g-5">
                    {orders.map((order) => (
                        <div className='col col-md-12' key={order._id}>
                            <SingleOrder
                                order={order}
                                hanldeDelete={hanldeDelete}
                            ></SingleOrder>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyOrder;