import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(()=>{
        fetch('https://thawing-harbor-39490.herokuapp.com/addCar')
        .then(res => res.json())
        .then(data=> setCars(data));
    },[]);

    return (
        <div>
            <div className="titles">
                <span>All Cars</span>
                <h2 className="mx-2">Here are All Luxury Cars <br /> In Our Shop</h2>
            </div>
            <div className="row">
                {
                    cars.map(pk=>
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

export default Cars;