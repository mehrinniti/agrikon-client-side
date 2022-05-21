import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddFarmer.css';
import swal from "sweetalert";
import useDocumentTitle from '../../../../hooks/useDocumentTitle';


const AddFarmer = () => {

    // dynamic title
    useDocumentTitle("Add Farmer");

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = data => {
        axios.post('https://dry-earth-68796.herokuapp.com/farmers', data)
            .then(res => {
                // console.log(res);
                if (res.data?.insertedId) {
                    swal({
                        title: "Successfully Added!",
                        icon: "success",
                    });
                    reset();
                }
            })
    };
    return (
        <div className="product-form">
            <h1>Add Farmer</h1>
            <hr />

            <div className="col order-form-container">
                <div className="mx-auto order-form">
                    <form className="mx-auto " style={{ marginBottom: '43px', width: '77%', }} onSubmit={handleSubmit(onSubmit)}>

                        <input style={{ color: 'black', fontSize: 18 }} {...register("image", { required: true })} placeholder="Image url" />
                        {errors.image && (
                            <span className="text-danger">Image url is required</span>
                        )}
                        <input style={{ color: 'black', fontSize: 18 }} type='text' {...register("farmerName", { required: true })} placeholder="Farmer Name" />
                        {errors.farmerName && (
                            <span className="text-danger">Farmer name is required</span>
                        )}
                        <input style={{ color: 'black', fontSize: 18 }} type='text' {...register("price", { required: true })} placeholder="Price" />
                        {errors.price && (
                            <span className="text-danger">Farmer price is required</span>
                        )}
                        <input style={{ fontSize: 18 }} className="order-btn addproduct-btn addFarmer-btn" type="submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddFarmer;