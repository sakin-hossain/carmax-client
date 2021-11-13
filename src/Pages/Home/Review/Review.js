
import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";
import Slide from 'react-reveal/Slide';
import Slider from 'react-slick';
import './Review.css';


const Review = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://thawing-harbor-39490.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div className="gallery__container container">
            <Slide left>
                <div className="titles">
                    <span>User Review</span>
                    <h2 className="mx-2">User's Review for Our <br /> CarMax</h2>
                </div>
            </Slide>
            <Slider {...settings}>
            {reviews.map(review =>
                <div key={review._id}>
                    <div className="shadow p-3 mx-3 rounded">
                        <h6>{review.name}</h6>
                        <ReactStars
                            count={5}
                            value={review.rating}
                            isHalf={true}
                            edit={false}
                            size={30}

                            activeColor="#ffcb24"
                        />
                        <p>Rating: </p>
                        <p>{review.comment}</p>
                    </div>
                </div>
            )}
            </Slider>
        </div>
    );
};
export default Review;