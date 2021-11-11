import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';
import "./Services.css";


const Services = () => {
    const [packages, setPackages] = useState([]);
    useEffect(()=>{
        fetch('https://thawing-harbor-39490.herokuapp.com/addCar')
        .then(res => res.json())
        .then(data=> setPackages(data));
    },[]);
    return (
        <div className="titles" id="services">
            <Slide left>
                <div>
                    <span>Popular Destinations</span>
                    <h2 className="mx-2">Travel Most Popular Place <br /> In The World</h2>
                </div>
            </Slide>
            <div className="row">
                {
                    packages.map(pk=>
                        <div className="col-md-4 col-sm-12">
                            <div className="shadow package" key={pk.id}>
                            <div className="package__photo mx-auto">
                            <img className="" src={pk.image} alt="" />
                            </div>
                            <div className="packages__details">
                                <div>
                                    <h4>{pk.title}</h4>
                                    <h5>${pk.price}</h5>
                                </div>
                                <div>
                                    <span>
                                    <Rating
                                    initialRating={pk.rating}
                                    emptySymbol={<i class="far fa-star icon__style"></i>}
                                    fullSymbol={<i className="fas fa-star icon__style"></i>}
                                    />
                                    </span> <br />
                                    <Link to ={`services/${pk._id}`}>
                                        <button className="btn__regular mt-2">Book</button>
                                    </Link>
                                </div>
                              </div>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default Services;