import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { useHistory, useParams } from "react-router";
import swal from "sweetalert";
import useDocumentTitle from "../../../../hooks/useDocumentTitle";
import SharedBannar from "../../../Shared/SharedBannar/SharedBannar";

const UpdateStatus = () => {
    // dynamic title
    useDocumentTitle("Update Order");
    const { id } = useParams();
    // console.log('update check id', id);
    //   states
    const [allOrder, setAllOrder] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    // redirect private route
    const history = useHistory();
    const redirectUrl = "/dashboard/manageAllOrders";

    useEffect(() => {
        // setIsLoading(true);

        fetch(`https://dry-earth-68796.herokuapp.com/allOrders/${id}`)
            // fetch(`https://dry-earth-68796.herokuapp.com/orders/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setAllOrder(data);
                // setIsLoading(false);
            });
    }, [id]);

    const { _id, userImg, userName, userEmail, image, productName, status, date } = allOrder;

    const handleApproveStatus = (id) => {


        if (status === "Approved") {
            swal({
                title: "Hey, Already approved",
                icon: "info",
            });
            history.push(redirectUrl);
            return;
        }


        allOrder.status = "Approved";
        setAllOrder(allOrder);

        // console.log('all order check', allOrder);
        // console.log('set all order check', setAllOrder);



        const proceed = window.confirm('Are you sure, you want to approve?')


        if (proceed) {
            // const url = `https://dry-earth-68796.herokuapp.com/allOrders/${id}`;
            // fetch(url, {
            //     method: 'PUT'
            // })
            //     .then(res => res.json())
            //     .then(result => {
            //         if (result.data?.modifiedCount > 0) {
            //             swal({
            //                 title: "Successfully Approved!",
            //                 icon: "success",
            //             });
            //             const remaining = allOrder.filter(allProduct => allProduct._id !== id)
            //             setAllOrder(remaining);
            //         }
            //     });

            axios
                .put(
                    `https://dry-earth-68796.herokuapp.com/allOrders/${id}`,
                    allOrder
                )
                .then((result) => {
                    if (result.data?.modifiedCount > 0) {
                        swal({
                            title: "Order successfully approved!",
                            icon: "success",
                        });
                        // const remaining = allOrder.filter(allOrder => allOrder._id !== id)
                        // setAllOrder(remaining);
                        history.push(redirectUrl);
                    }
                });


        };

        // confirmAlert({
        //     message: "Are you sure want to Approve?",
        //     buttons: [
        //         {
        //             label: "Yes",
        //             onClick: () => {
        //                 axios
        //                     .put(
        //                         `https://dry-earth-68796.herokuapp.com/allOrders/${id}`,
        //                         allOrder
        //                     )
        //                     .then((result) => {
        //                         if (result.data?.modifiedCount > 0) {
        //                             swal({
        //                                 title: "Booking successfully approved!",
        //                                 icon: "success",
        //                             });
        //                             history.push(redirectUrl);
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
    };

    const handleRejectStatus = (id) => {

        if (status === "Rejected") {
            swal({
                title: "Hey, Already rejected",
                icon: "info",
            });
            history.push(redirectUrl);
            return;
        }


        allOrder.status = "Rejected";
        setAllOrder(allOrder);

        // if (status === "Rejected") {
        //     swal({
        //         title: "Hey, Already rejected",
        //         icon: "info",
        //     });
        //     return;
        // }

        // confirmAlert({
        //     message: "Are you sure want to Reject?",
        //     buttons: [
        //         {
        //             label: "Yes",
        //             onClick: () => {
        //                 axios
        //                     .put(
        //                         `https://dry-earth-68796.herokuapp.com/allOrders/${id}`,
        //                         // `https://dry-earth-68796.herokuapp.com/orders/${id}`,
        //                         allOrder
        //                     )
        //                     .then((result) => {
        //                         if (result.data?.modifiedCount > 0) {
        //                             swal({
        //                                 title: "Booking Rejected!",
        //                                 icon: "success",
        //                             });
        //                             history.push(redirectUrl);
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


        const proceed = window.confirm('Are you sure, you want to Reject it?')


        if (proceed) {

            axios
                .put(
                    `https://dry-earth-68796.herokuapp.com/allOrders/${id}`,
                    allOrder
                )
                .then((result) => {
                    if (result.data?.modifiedCount > 0) {
                        swal({
                            title: "Order successfully Rejected!",
                            icon: "success",
                        });
                        // const remaining = allOrder.filter(allOrder => allOrder._id !== id)
                        // setAllOrder(remaining);
                        history.push(redirectUrl);
                    }
                });


        };



    };

    // spinner
    // if (isLoading) {
    //     return (
    //         <div className="text-center py-4">
    //             <CircularProgress color="success" />
    //         </div>
    //     );
    // }

    return (
        <>
            <h1 style={{ fontWeight: 600, color: 'rgb(37, 36, 36, 0.83)', marginTop: '34px' }}>Update Order Status</h1>
            <div className="container py-5 px-3 px-sm-5 colored-bg text-black rounded-3 my-4">
                <div className="row shadow px-3 py-3 rounded-3 align-items-center g-4" style={{
                    background: 'rgba( 255, 255, 255, 0.1)',
                    backdropFilter: 'blur(5px)'
                }}>
                    < div className=" col col-md-6 col-lg-5 col-xl-4">
                        <div className="d-flex gap-3 flex-column flex-md-row text-center text-md-start align-items-center">
                            <div>
                                <img src={userImg} className="order-user-img rounded-circle" alt="" />
                            </div>
                            <div className="mt-2 mt-md-0">
                                <h4>{userName}</h4>
                                <p>{userEmail}</p>
                            </div>
                        </div>
                    </div>
                    < div className=" col col-md-6 col-lg-3 col-xl-4" >
                        <div className="text-center">
                            <img
                                className="w-75 img-fluid rounded-3 shadow-sm"
                                src={image}
                                alt=""
                            />
                        </div>
                    </div>
                    < div className=" col col-md-6 col-lg-4 col-xl-4">
                        <div className="order-details text-center text-md-start">
                            <h4 className="mt-3 mt-lg-0 serive-title">{productName}</h4>

                            <p>
                                Status: <b>{status}</b>
                            </p>
                            <p>
                                Arrival date:
                                <b> {date}</b>
                            </p>
                        </div>
                    </div>
                    < div className=" col col-md-6 col-lg-12 col-xl-12" >
                        <div className="text-end">
                            <div
                                // size="md"
                                className="btn-group animate__animated animate__backInUp animate__delay-1s"
                            >
                                <button
                                    onClick={() => handleApproveStatus(_id)}
                                    type="button" className="btn btn-outline-dark"
                                >
                                    <span className="me-2">
                                        <i class="fas fa-check"></i>
                                    </span>
                                    Approve
                                </button>
                                <button
                                    onClick={() => handleRejectStatus(_id)}
                                    type="button" className="btn btn-outline-dark"
                                >
                                    <span className="me-2">
                                        <i class="fas fa-ban"></i>
                                    </span>
                                    Reject
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateStatus;