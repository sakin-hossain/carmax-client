import React from 'react';
import Slide from 'react-reveal/Slide';
import Slider from 'react-slick';
import "./Gallery.css";

const Gallery = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    return (
        <div className="gallery__container container">
            <Slide left>
                <div className="titles">
                    <span>Tour Gallery</span>
                    <h2 className="mx-2">Best Tourist's Shared <br /> Photos</h2>
                </div>
            </Slide>
            <Slider {...settings}>
                <div className="img__container">
                    <img src="https://i.ibb.co/hRtPnXc/l1.jpg" alt="" />
                </div>
                <div className="img__container">
                    <img  src="https://i.ibb.co/BZNsRrM/Rear-view-of-young-guy-with-backpack-standing-outdoors-with-arms-spread-open-against-seascape-Man-en.jpg" alt="" />
                </div>
                <div className="img__container">
                    <img src="https://i.ibb.co/3rqHypT/l2.jpg" alt="" />
                </div>
                <div className="img__container">
                    <img src="https://i.ibb.co/D4YxgzB/sdr.jpg" alt="" />
                </div>
                <div className="img__container">
                    <img src="https://i.ibb.co/Zf1HZBq/share-2.jpg" alt="" />
                </div>
                <div className="img__container">
                    <img src="https://i.ibb.co/fxBqcPb/Maldives.jpg" alt="" />
                </div>
                <div className="img__container">
                    <img src="https://i.ibb.co/rwpmBnZ/Most-Beautiful-Places-to-Travel-Featured-Image.jpg" alt="" />
                </div>
                <div className="img__container">
                    <img src="https://i.ibb.co/FqZ7vw2/solta-best-places-travel-2018.jpg" alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default Gallery;