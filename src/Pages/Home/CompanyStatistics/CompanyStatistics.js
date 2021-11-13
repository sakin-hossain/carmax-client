import React from 'react';
import Pulse from 'react-reveal/Pulse';
import "./CompanyStatistics.css";


const CompanyStatistics = () => {
    return (
        <div className="statistics__container mt-5">
            <Pulse>
                <div className="titles">
                    <span>CarMax Statistics</span>
                    <h2 className="text-light">We Expert Our Goals and We Strive <br /> To Provide Best</h2>
                </div>
            </Pulse>
                <div className="statistics__container_item">
                    <div className="company__item">
                        <div>
                            <i class="fas fa-users icons"></i>
                        </div>
                        <div>
                            <h1>1072</h1>
                            <h3><span>Happy Customers</span> <i class="fas fa-dot-circle dot"></i></h3>
                        </div>
                    </div>
                    <div className="company__item">
                        <div>
                         <i class="fas fa-business-time icons"></i>
                        </div>
                        <div>
                            <h1>82</h1>
                            <h3><span>In Business</span> <i class="fas fa-dot-circle dot"></i>
                            </h3>
                        </div>
                    </div>
                    <div className="company__item">
                        <div>
                            <i class="fas fa-headset icons"></i>
                        </div>
                        <div>
                            <h1>132</h1>
                            <h3><span>Support Cases</span> <i class="fas fa-dot-circle dot"></i></h3>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default CompanyStatistics;