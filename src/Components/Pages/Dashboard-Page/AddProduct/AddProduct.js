import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css';
import swal from "sweetalert";
import useDocumentTitle from '../../../../hooks/useDocumentTitle';


const AddProduct = () => {

    // dynamic title
    useDocumentTitle("Add Product");

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/products', data)
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
            <h1>Add Product</h1>
            <hr />

            <div className="col order-form-container">
                <div className="mx-auto order-form">
                    <form className="mx-auto " style={{ marginBottom: '43px', width: '77%', }} onSubmit={handleSubmit(onSubmit)}>

                        <input style={{ color: 'black', fontSize: 18 }} {...register("image", { required: true })} placeholder="Image url" />
                        {errors.img && (
                            <span className="text-danger">Image url is required</span>
                        )}
                        <input style={{ color: 'black', fontSize: 18 }} type='text' {...register("name", { required: true })} placeholder="Product Name" />
                        {errors.name && (
                            <span className="text-danger">Product name is required</span>
                        )}
                        <input style={{ color: 'black', fontSize: 18 }} type='text' {...register("weight", { required: true })} placeholder="Weight" />
                        {errors.weight && (
                            <span className="text-danger">Product weight is required</span>
                        )}
                        <input style={{ color: 'black', fontSize: 18 }} type='text' {...register("price", { required: true })} placeholder="Price" />{errors.price && (
                            <span className="text-danger">Product price is required</span>
                        )}
                        <input style={{ fontSize: 18 }} className="order-btn addproduct-btn" type="submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddProduct;