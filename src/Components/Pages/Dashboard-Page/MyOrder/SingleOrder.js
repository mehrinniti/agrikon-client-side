import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './SingleOrder.css';

const SingleOrder = ({ order, hanldeDelete }) => {
    // const { _id, name, image, date, status } = order;

    const { _id, userName, userEmail, userImg, productImage, name, productName, date, productPrice, productWeight, status, image, paymentStatus } = order;
    const { user } = useAuth();
    // const { user, isPaid } = useAuth();

    // console.log(order);
    // console.log(order.payment);

    const history = useHistory();

    // const handleUpdateStatus = (id) => {
    //     history.push(`/manageAllOrders/${id}`);
    // };

    const handlePayment = (id) => {
        history.push(`/payment/${id}`);
    };


    return (
        // <>

        //     <div className="row order-details-box d-md-flex align-items-center shadow animate__animated animate__fadeInUpBig">
        //         <div className='col col-md-6 col-lg-6 col-xl-4'>
        //             <div>
        //                 <img className="order-img img-fluid" src={image} alt="" />
        //             </div>
        //         </div>
        //         <div className='col col-md-6 col-lg-6 col-xl-4'>
        //             <div className="order-details">
        //                 <h4 className="mt-3 mt-lg-0 serive-title">{name}</h4>
        //                 <p>
        //                     Status:{" "}
        //                     {status === "Approved" && (
        //                         <span className="mx-2">
        //                             <i className="fas fa-check"></i>
        //                         </span>
        //                     )}
        //                     {status === "Rejected" && (
        //                         <span className="mx-2">
        //                             <i className="fas fa-ban"></i>
        //                         </span>
        //                     )}
        //                     {status === "pending" && (
        //                         <span className="mx-2">
        //                             <i className="fas fa-stream"></i>
        //                         </span>
        //                     )}{" "}
        //                     <b>{status}</b>
        //                 </p>
        //                 <p>
        //                     Order date:
        //                     <b> {date}</b>
        //                 </p>
        //             </div>
        //         </div>
        //         <div className='col col-md-12 col-lg-12 col-xl-4'>
        //             <div className="text-end mt-3 mt-xl-0 d-flex">

        //                 <button
        //                     type="button"
        //                     // onClick={() => hanldeDelete(_id)}
        //                     className="btn btn-outline-light animate__animated animate__backInUp animate__delay-1s">
        //                     <span className="me-2">
        //                         <i className="far fa-credit-card"></i>
        //                     </span>
        //                     Pay
        //                 </button>
        //                 <button
        //                     type="button"
        //                     // onClick={() => hanldeDelete(_id)}
        //                     className="btn btn-outline-light animate__animated animate__backInUp animate__delay-1s">
        //                     <span className="me-2">
        //                         <i className="fas fa-ban"></i>
        //                     </span>
        //                     Cancel
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </>










        <>

            <div className="row shadow px-3 py-3 rounded-3 align-items-center g-4 animate__animated animate__fadeInUp">
                <div className='col col-md-6 col-lg-5 col-xl-4'>
                    <div className="d-flex gap-3 flex-column flex-md-row text-center text-md-start align-items-center">
                        <div className="">
                            {/* <img src={user.photoURL} className="order-user-img" alt="" /> */}
                        </div>
                        <div className="mt-2 mt-md-0">
                            <h4>{productName}</h4>
                            <p>{productWeight}</p>
                            <p>৳ {productPrice}</p>
                            {/* <h5>{userName}</h5> */}
                            <p>{userEmail}</p>
                            {/* <img src={user.photoURL} className="order-user-img w-10" alt="" /> */}
                        </div>
                    </div>
                </div>
                <div className='col col-md-6 col-lg-3 col-xl-4' >
                    <div className="text-center">
                        <img
                            className="w-75 img-fluid rounded-3 shadow-sm"
                            src={image}
                            // src={productImage}
                            alt=""
                        />
                    </div>
                </div>
                <div className='col col-md-6 col-lg-4 col-xl-4' >
                    <div className="order-details text-center text-md-start">
                        {/* <h4 className="mt-3 mt-lg-0 serive-title">{name}</h4> */}
                        {/* <h4 className="mt-3 mt-lg-0 serive-title">{productName}</h4> */}

                        <p>
                            Status:{" "}
                            {status === "Approved" && (
                                <span className="mx-2">
                                    <i className="fas fa-check"></i>
                                </span>
                            )}
                            {status === "Rejected" && (
                                <span className="mx-2">
                                    <i className="fas fa-ban"></i>
                                </span>
                            )}
                            {status === "pending" && (
                                <span className="mx-2">
                                    <i className="fas fa-stream"></i>
                                </span>
                            )}
                            <b>{status}</b>
                        </p>
                        <p>
                            Payment Status:{" "}
                            {paymentStatus === "Paid" && (
                                <span className="mx-2">
                                    <i className="fas fa-sack-dollar"></i>
                                </span>
                            )}
                            {paymentStatus === "pending" && (
                                <span className="mx-2">
                                    <i className="fas fa-stream"></i>
                                </span>
                            )}
                            <b>{paymentStatus}</b>
                        </p>
                        <p>
                            Order date:
                            <b> {date}</b>

                        </p>
                    </div>
                </div>
                <div className='col col-md-6 col-lg-12 col-xl-12' >
                    <div className="text-end">
                        <div
                            size="md"
                            className="btn-group animate__animated animate__backInUp animate__delay-1s"
                        >

                            {/* {
                                order?.payment ? (
                                    // isPaid ? (
                                    <span>Paid</span>
                                ) : (
                                    <Link to={`/dashboard/payment/${order._id}`}>
                                        <button
                                            type="button"
                                            className="btn btn-outline-light"
                                            // onClick={() => handleUpdateStatus(_id)}
                                            onClick={() => handlePayment(_id)}
                                        >
                                            <span className="me-2">
                                                <i className="far fa-credit-card"></i>
                                            </span>
                                            Pay
                                        </button>
                                    </Link>
                                )

                            } */}


                            <Link to={`/dashboard/payment/${order._id}`}>
                                <button
                                    type="button"
                                    className="btn btn-outline-light"
                                    // onClick={() => handleUpdateStatus(_id)}
                                    onClick={() => handlePayment(_id)}
                                >
                                    <span className="me-2">
                                        <i className="far fa-credit-card"></i>
                                    </span>
                                    Pay
                                </button>
                            </Link>



                            {/* <button
                                type="button"
                                className="btn btn-outline-light"
                            // onClick={() => handleUpdateStatus(_id)}
                            >
                                <span className="me-2">
                                    <i className="far fa-credit-card"></i>
                                </span>
                                Pay
                            </button> */}
                            <button
                                type="button"
                                className="btn btn-outline-light"
                                onClick={() => hanldeDelete(order._id)}
                            >
                                <span className="me-2">
                                    <i className="fas fa-ban"></i>
                                </span>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>






    );
};

export default SingleOrder;