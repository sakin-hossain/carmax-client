import React from 'react';
import { useForm } from 'react-hook-form';
import Slide from 'react-reveal/Slide';
import "./ContractUs.css";


const ContractUs = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div id="contract-us">
            <div className="titles">
            <Slide left>
                <span>Contract Us</span>
                <h2>If You Have Any Question <br />Drop A Message</h2>
            </Slide>
                <div className="container">
                    <div className="contract__form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Your Name" className="mx-2" {...register("name")} />
                    <input placeholder="Your Email" {...register("email")} /> <br />
                    <input placeholder="Your Number" {...register("mobile")} /> <br />
                    <textarea placeholder="Your Message" name="description" id="" cols="30" rows="4"></textarea> <br />
                    <input type="submit" value="Send Message" className="btn__regular" />
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContractUs;