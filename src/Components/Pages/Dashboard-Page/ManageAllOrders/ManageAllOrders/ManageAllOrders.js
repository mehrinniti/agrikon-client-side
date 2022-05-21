import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { confirmAlert } from "react-confirm-alert";
import useAuth from '../../../../../hooks/useAuth';
import ManageSingleOrder from '../ManageSingleOrder/ManageSingleOrder';
import axios from 'axios';
import swal from 'sweetalert';
import { CircularProgress } from '@mui/material';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const ManageAllOrders = () => {

    // dynamic title
    useDocumentTitle("Manage All Orders");

    const { user } = useAuth();
    const [allOrders, setAllOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // const email = user?.email;
    // const emails = { email };
    // const values = Object.values(emails);

    console.log(user)


    useEffect(() => {
        setIsLoading(true);
        //  Email er url eta dite hobe
        // const url = `https://dry-earth-68796.herokuapp.com/orders?email=${user.email}`
        console.log(user.email)
        //  Manage all order
        const url = `https://dry-earth-68796.herokuapp.com/allOrders`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllOrders(data);
                console.log(data);
                setIsLoading(false);
            })
    }, [])
    // }, [date])



    const hanldeDelete = (id) => {
        confirmAlert({
            message: "Are you sure want to Delete?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => {
                        axios
                            .delete(`https://dry-earth-68796.herokuapp.com/allOrders/${id}`)
                            .then((result) => {
                                if (result.data.deletedCount > 0) {
                                    const remaining = allOrders.filter((event) => event._id !== id);
                                    setAllOrders(remaining);
                                    swal({
                                        title: "Deleted successfully",
                                        icon: "success",
                                    });
                                }
                            });
                    },
                },
                {
                    label: "No",
                    onClick: () => {
                        return;
                    },
                },
            ],
        });
    };


    // spinner
    if (isLoading) {
        return (
            <div className="text-center py-4">
                <CircularProgress color="success" />
            </div>
        );
    }



    return (
        <div>
            <h1 style={{ fontWeight: 600, color: 'rgb(37, 36, 36, 0.83)' }}>Manage All Orders</h1>
            <div className="container py-5 px-4 text-white rounded-3 shadow my-4" style={{ backgroundColor: '#006b2dbc' }}>
                <h2 className="text-center fs-2 mb-5">
                    Total Orders: {allOrders.length}
                </h2>
                <div className="row g-5">
                    {allOrders.map((allOrder) => (
                        <div className='col col-md-12' key={allOrder._id}>
                            <ManageSingleOrder
                                allOrder={allOrder}
                                hanldeDelete={hanldeDelete}
                            ></ManageSingleOrder>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;