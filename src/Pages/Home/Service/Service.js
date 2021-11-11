import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import "./Service.css";

const Service = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});
    const{user} = useAuth();

    useEffect(()=>{
        fetch(`https://thawing-harbor-39490.herokuapp.com/addCar/${serviceId}`)
        .then(res=> res.json())
        .then(data => setService(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.packageName = service.title;
        data.packagePrice = service.price;
        data.status = "pending";
        fetch('https://thawing-harbor-39490.herokuapp.com/myOrders',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result => {
            if(result.insertedId){
                alert('Package Added');
                reset(); 
            }
        })
    }
    return (
        <div className="row book__container">
            <div className="col-md-8 col-sm-12 package__details">
                <h1>{service?.title}</h1>
                <div className="service__img">
                    <img className="img-fluid" src={service?.image} alt="" />
                </div>
                <p>{service?.description}</p>
            </div>
            <div className="col-md-4 col-sm-12 form__container">
                <h4>Submit this form to booking {service.title} tour</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
            
            <input defaultValue={user?.displayName} placeholder="Your Name" {...register("name")} /> <br />
            <input placeholder="Your Email" {...register("email")} /> <br />
            <label htmlFor="from">From</label> <br />
            <input type="date" {...register("from")} /> <br />
            <label htmlFor="to">To</label> <br />
            <input type="date" {...register("to")} /> <br />
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