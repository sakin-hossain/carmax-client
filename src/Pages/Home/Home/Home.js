import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import CompanyStatistics from '../CompanyStatistics/CompanyStatistics';
import ContractUs from '../ContractUs/ContractUs';
import Review from '../Review/Review';
import Services from '../Services/Services';
import HeroSlider from '../Slider/HeroSlider';
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <HeroSlider/>
            <Services/>
            <AboutUs/>
            <CompanyStatistics/>
            <Review/>
            <ContractUs/>
        </div>
    );
};

export default Home;