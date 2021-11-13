import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import "./Service.css";

const Service = () => {
    const {serviceId} = useParams();
    const [details, setDetails] = useState({});
    const{user} = useAuth();

    useEffect(()=>{
        fetch(`https://thawing-harbor-39490.herokuapp.com/addCar/${serviceId}`)
        .then(res=> res.json())
        .then(data => setDetails(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const orderInfo = {
            ...data,
            orderTitle: details.name,
            orderTime: new Date().toLocaleString(),
            bills: details.price,
            status: 'pending'
        };

        axios.post('https://thawing-harbor-39490.herokuapp.com/myOrders', orderInfo)
        .then(res => {
            console.log(res);
            if (res.data.acknowledged) {
                window.alert("Order Successful");
                reset()
            }
        })
    }
    return (
        <div className="row book__container">
            {!details && (<div className="text-center">
                    <div className="spinner-grow text-danger text-center" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>)}
            <div className="col-md-8 col-sm-12 package__details">
                <h1>{details?.title}</h1>
                <div className="service__img">
                    <img className="img-fluid" src={details?.image} alt="" />
                </div>
                <p>{details?.description}</p>
            </div>
            <div className="col-md-4 col-sm-12 form__container">
                <h4>Submit this form to booking {details.title} tour</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
            
            <input defaultValue={user?.displayName} placeholder="Your Name" {...register("name")} required readOnly /> <br />
            <input defaultValue={user.email} placeholder="Your Email" {...register("email")} required readOnly /> <br />
            <input placeholder="Your Mobile No" {...register("mobile", { required: true })} /> <br />
            {errors.exampleRequired && <span>This field is required</span>}
            
            <div className="text-center">
                <input type="submit" />
            </div>
            </form>
            </div>
        </div>
    );
};

export default Service;