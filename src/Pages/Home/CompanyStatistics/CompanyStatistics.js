import React from 'react';
import Pulse from 'react-reveal/Pulse';
import "./CompanyStatistics.css";


const CompanyStatistics = () => {
    return (
        <div className="statistics__container mt-5">
            <Pulse>
                <div className="titles">
                    <span>Company Statistics</span>
                    <h2 className="text-light">We Expert Our Goals and We Strive <br /> To Provide Best</h2>
                </div>
            </Pulse>
                <div className="statistics__container_item">
                    <div className="company__item">
                        <div>
                            <i class="fas fa-users icons"></i>
                        </div>
                        <div>
                            <h1>25007</h1>
                            <h3><span>Happy Customers</span> <i class="fas fa-dot-circle dot"></i></h3>
                        </div>
                    </div>
                    <div className="company__item">
                        <div>
                        <i class="fas fa-plane icons"></i>
                        </div>
                        <div>
                            <h1>1821</h1>
                            <h3><span>Amazing Tours</span> <i class="fas fa-dot-circle dot"></i></h3>
                        </div>
                    </div>
                    <div className="company__item">
                        <div>
                         <i class="fas fa-business-time icons"></i>
                        </div>
                        <div>
                            <h1>1508</h1>
                            <h3><span>In Business</span> <i class="fas fa-dot-circle dot"></i>
                            </h3>
                        </div>
                    </div>
                    <div className="company__item">
                        <div>
                            <i class="fas fa-headset icons"></i>
                        </div>
                        <div>
                            <h1>1321</h1>
                            <h3><span>Support Cases</span> <i class="fas fa-dot-circle dot"></i></h3>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default CompanyStatistics;