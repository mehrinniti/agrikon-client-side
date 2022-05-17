import React, { useState, useEffect } from 'react';
import useAuth from '../../../../../hooks/useAuth';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

const ManageSingleOrder = ({ allOrder, hanldeDelete }) => {
    const { _id, userName, userEmail, userImg, name, productName, date, status, image, productWeight, productPrice } = allOrder;
    const { user } = useAuth();

    let { path, url } = useRouteMatch();

    // console.log(order);

    // console.log('My Image', userImg);






    // // params
    // const { id } = useParams();

    // const [orderData, setOrderData] = useState({});



    // // load data
    // useEffect(() => {
    //     // setIsLoading(true);
    //     fetch(`http://localhost:5000/products/${id}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setOrderData(data);
    //             // setIsLoading(false);
    //         });
    // }, [id]);








    const history = useHistory();

    const handleUpdateStatus = (id) => {
        // history.push(`/dashboard/myOrders`);
        // history.push(`/dashboard/manageAllOrders/${id}`);
        history.push(`/updateStatus/${id}`);
        // history.push(`/home`);
        // history.push(`${url}/manageAllOrders/${id}`);
        console.log(`manageAllOrders/${id}`)
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
        //                             <i class="fas fa-check"></i>
        //                         </span>
        //                     )}
        //                     {status === "Rejected" && (
        //                         <span className="mx-2">
        //                             <i class="fas fa-ban"></i>
        //                         </span>
        //                     )}
        //                     {status === "pending" && (
        //                         <span className="mx-2">
        //                             <i class="fas fa-stream"></i>
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
        //                         <i class="far fa-credit-card"></i>
        //                     </span>
        //                     Pay
        //                 </button>
        //                 <button
        //                     type="button"
        //                     // onClick={() => hanldeDelete(_id)}
        //                     className="btn btn-outline-light animate__animated animate__backInUp animate__delay-1s">
        //                     <span className="me-2">
        //                         <i class="fas fa-ban"></i>
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
                        <div className="w-25">
                            <img src={userImg} className="order-user-img rounded-circle w-100" alt="" />
                            {/* <img src={user?.photoURL} className="order-user-img" alt="" /> */}
                        </div>
                        <div className="mt-2 mt-md-0">
                            <h5>{userName}</h5>
                            <p>{userEmail}</p>
                        </div>
                    </div>
                </div>
                <div className='col col-md-6 col-lg-3 col-xl-4' >
                    <div className="text-center">
                        <img
                            className="w-50 img-fluid rounded-3 shadow-sm"
                            // src={orderData?.image}
                            src={image}
                            alt=""
                        />
                    </div>
                </div>
                <div className='col col-md-6 col-lg-4 col-xl-4' >
                    <div className="order-details text-center text-md-start">
                        <div className='lh-1'>
                            <h4 className="mt-3 mt-lg-0 serive-title">{productName}</h4>
                            <p>Weight: {productWeight}</p>
                            <p>Price: ৳ {productPrice}</p>
                        </div>

                        <p>
                            Status:{" "}
                            {status === "Approved" && (
                                <span className="mx-2">
                                    <i class="fas fa-check"></i>
                                </span>
                            )}
                            {status === "Rejected" && (
                                <span className="mx-2">
                                    <i class="fas fa-ban"></i>
                                </span>
                            )}
                            {status === "pending" && (
                                <span className="mx-2">
                                    <i class="fas fa-stream"></i>
                                </span>
                            )}
                            <b>{status}</b>
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
                            class="btn-group"
                            size="md"
                            className="animate__animated animate__backInUp animate__delay-1s"
                        >


                            <Link to={`/dashboard/updateStatus/${allOrder._id}`}>
                                <button
                                    type="button"
                                    className="btn btn-outline-light"
                                    onClick={() => handleUpdateStatus(_id)}
                                >
                                    <span className="me-2">
                                        <i class="fas fa-pencil-alt"></i>
                                    </span>
                                    Update
                                </button>
                            </Link>
                            {/* <button
                                type="button"
                                class="btn btn-outline-light"
                                onClick={() => hanldeDelete(_id)}
                            >
                                <span className="me-2">
                                    <i class="fas fa-trash-alt"></i>
                                </span>
                                Delete
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>






    );
};

export default ManageSingleOrder;