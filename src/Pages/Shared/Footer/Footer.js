import React from 'react';
import Flash from 'react-reveal/Flash';
import { Link } from 'react-router-dom';
import "./Footer.css";


const Footer = () => {
    return (
        // <>
        //     <div className="footer__container row">
        //         <div className="col-md-3 col-sm-6 mt-5">
        //             <h2>Contact</h2>
        //             <p><i class="fas fa-phone"></i> Phone <br /> <span>11-55-777-88</span></p>
        //             <p><i class="fas fa-envelope"></i> Email <br /> <span>travel@go.com</span></p>
        //             <p><i class="fas fa-map-marker"></i> Address <br /> <span>123, Uttara, Dhaka</span></p>
        //         </div>
        //         <div className="col-md-3 col-sm-6 mt-5">
        //             <h2>About us</h2>
        //             <ul>
        //                 <li><Link to='/home#services'>Packages</Link></li>
        //                 <li><Link to='/home#about-us'>About</Link></li>
        //                 <li><Link to='/home#contract-us'>Contract</Link></li>
        //             </ul>
        //         </div>
        //         <div className="col-md-3 col-sm-6 mt-5">
        //             <h2>Support</h2>
        //             <ul>
        //                 <li>Travel Guide</li>
        //                 <li>Airport Taxi</li>
        //                 <li>Delicoius Food</li>
        //                 <li>Contract Support</li>
        //             </ul>
        //         </div>
        //     </div>
        //     <div className="copyright">
        //         <p>Copyright &copy; 2021 Travel Go. Designed By Md. Sakin Hossain</p>
        //         <p> <Link to="/home">Terms &amp; Conditions </Link> | <Link to="/home"> Privacy Policy</Link></p>
        //     </div>
        // </>
        <div className="footer__container">
            <div className="nav__section">
                <div>
                    <div className="w-sm-50 w-md-50">
                        <img className="img-fluid" src="https://i.ibb.co/K9LHz1v/logo-removebg-preview.png" alt="" />
                    </div>
                    <p>Choose from over 1.2 million hotels in more than 200 countries, 30 million <br /> real guest reviews. Book flights to over 5000 destinations worldwide.</p>
                </div>
                <div className="">
                <h4>Contact</h4>
                   <p><i class="fas fa-phone"></i> Phone <br /> <span>11-55-777-88</span></p>
                  <p><i class="fas fa-envelope"></i> Email <br /> <span>travel@go.com</span></p>
                   <p><i class="fas fa-map-marker"></i> Address <br /> <span>123, Banani, Dhaka</span></p>
                </div>
                <div className="">
                <h4>About us</h4>
                    <ul>
                        <li><Link to='/home#services'>Packages</Link></li>
                        <li><Link to='/home#about-us'>About</Link></li>
                       <li><Link to='/home#contract-us'>Contract</Link></li>
                    </ul>
                </div>
                <div className="">
                <h4>Support</h4>
                <ul>
                    <li>Travel Guide</li>
                    <li>Airport Taxi</li>
                    <li>Delicoius Food</li>
                    <li>Contract Support</li>
                    </ul>
                </div>
            </div>
            <div className="copyright__section">
                <p>Copyright &copy; 2021 Travel Go. Designed By <Flash> <span>Md. Sakin Hossain</span></Flash></p>
                 <p> <Link to="/home">Terms &amp; Conditions </Link> | <Link to="/home"> Privacy Policy</Link></p>
            </div>
        </div>
    );
};

export default Footer;