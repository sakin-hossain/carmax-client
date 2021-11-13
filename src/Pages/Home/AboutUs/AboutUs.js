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
                    <img className="img-fluid rounded" src="https://i.ibb.co/9pvfG1Z/3385c20a29c182909bd2e61259aff7c5.jpg" alt="about us" />
                </div>
                <div className="col-md-7 row d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                    <div className="about__us__item">
                        <div>
                            <img src="https://i.ibb.co/hgWgqrG/service-removebg-preview.png*" alt="" />
                        </div>
                        <div>
                            <h4>Best Instruction Guide</h4>
                            <p>Make sure the car is in neutral before releasing the clutch. The neutral slot is the empty space between the gears, represented by the bar in the middle of the "H."</p>
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
                                <h4>Luxury Cars</h4>
                                <p>A luxury car is a car that provides increased levels of comfort, equipment, amenities, quality, performance, and status compared to regular cars for an increased price.</p>
                            </div>
                        </div>
                        <div className="about__us__item">
                            <div>
                                <img style={{borderRadius:"50%"}} src="https://i.ibb.co/9ntbd9w/spare-Parts.png" alt="food" />
                            </div>
                            <div>
                                <h4>Original Spare Parts</h4>
                                <p>A spare part, spare, service part, repair part, or replacement part, is an interchangeable part that is kept in an inventory and used</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;