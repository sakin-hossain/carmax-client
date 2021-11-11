import React from 'react';
import Slide from 'react-reveal/Slide';
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <div className="container" id="about-us">
            <Slide right>
                <div className="titles">
                    <span>About Us</span>
                    <h2>Every Time We Provide <br />Best Service</h2>
                </div>
            </Slide>
            <div className="row">
                <div className="col-md-5 col-sm-12">
                    <img className="img-fluid rounded" src="https://i.ibb.co/Rh4jXQH/why-choose-us.jpg" alt="about us" />
                </div>
                <div className="col-md-7 row d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                    <div className="about__us__item">
                        <div>
                            <img src="https://i.ibb.co/hgWgqrG/service-removebg-preview.png*" alt="" />
                        </div>
                        <div>
                            <h4>Best Travel Guide</h4>
                            <p>Even in the digital age, travel guide books are an important part of my travel planning journey. I have read and tried many different travel books and online travel guides.</p>
                        </div>
                    </div>
                    <div className="about__us__item">
                        <div>
                            <img src="https://i.ibb.co/Hp4CCrm/world-removebg-preview.png" alt="" />
                        </div>
                        <div>
                            <h4>World Class Service</h4>
                            <p>World class service is defined as vastly exceeding customers' expectations and building brand loyalty as a result. World class service can help</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about__us__item">
                            <div>
                                <img src="https://i.ibb.co/RHd2Lv2/taxi-removebg-preview.png" alt="" />
                            </div>
                            <div>
                                <h4>Airport Taxi</h4>
                                <p>City Airport Taxis arranges transfers from Dhaka Airport to your desired location. Our all-inlclusive door-to-door service also includes meet and greet</p>
                            </div>
                        </div>
                        <div className="about__us__item">
                            <div>
                                <img src="https://i.ibb.co/XDt53TC/food-removebg-preview.png" alt="food" />
                            </div>
                            <div>
                                <h4>Delicoius Food</h4>
                                <p>A general food and cooking blog. I like to experiment and try all different types of cuisine and I have a passion for food photography and styling.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;