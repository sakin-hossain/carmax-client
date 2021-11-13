import React from 'react';
import Flash from 'react-reveal/Flash';
import { Link } from 'react-router-dom';
import "./Footer.css";


const Footer = () => {
    return (
        <div className="footer__container">
            <div className="nav__section">
                <div>
                    <div className="w-sm-50 w-md-50 d-flex mb-3">
                        <img className="img-fluid" src="https://i.ibb.co/qs5f7wQ/carmax-logo.png" alt="" />
                        <span style={{fontSize:"35px", color:"#DF525D", fontWeight:"700"}}>CarMax</span>
                    </div>
                    <p>Choose from over 1 thousand cars in more than 200 countries, 1000 <br /> professional's reviews. Book car to over 5000 destinations worldwide.</p>
                </div>
                <div className="">
                <h4>Contact</h4>
                   <p><i class="fas fa-phone"></i> Phone <br /> <span>11-55-777-88</span></p>
                  <p><i class="fas fa-envelope"></i> Email <br /> <span>travel@go.com</span></p>
                   <p><i class="fas fa-map-marker"></i> Address <br /> <span>123, Paltan, Dhaka</span></p>
                </div>
                <div className="">
                <h4>About us</h4>
                    <ul>
                        <li><Link to='/home#services'>Cars</Link></li>
                        <li><Link to='/home#about-us'>About</Link></li>
                       <li><Link to='/home#contract-us'>Contract</Link></li>
                    </ul>
                </div>
                <div className="">
                <h4>Support</h4>
                <ul>
                    <li>Best Instruction Guide</li>
                    <li>Luxury Cars</li>
                    <li>World Class Service</li>
                    <li>Original Spare Parts</li>
                    </ul>
                </div>
            </div>
            <div className="copyright__section">
                <p>Copyright &copy; 2021 CarMax. Designed By <Flash> <span>Md. Sakin Hossain</span></Flash></p>
                 <p> <Link to="/home">Terms &amp; Conditions </Link> | <Link to="/home"> Privacy Policy</Link></p>
            </div>
        </div>
    );
};

export default Footer;