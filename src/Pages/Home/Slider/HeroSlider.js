import { Link } from "react-router-dom";
import "./HeroSlider.css";

const HeroSlider = () => {
    return (
        <div className="banner img-fluid">
          <div>
            <h1 className="text-light">Welcome to <br /> Car<span style={{color:"#FC5C65"}}>Max</span></h1>
            <p style={{fontWeight:"400", color:"lightgray"}}>CarMax Verso focuses on luxury cars, performance cars and also on unique limited edition vehicles. The blog contains a range of car reviews as well as products, gadgets, and accessory reviews.</p>
            <div className="text-center">
              <Link to="/cars">
                <button className="btn__regular">Explore Our Car <i class="fas fa-arrow-right"></i></button>
              </Link>
            </div>
          </div>
        </div>
  );
};

export default HeroSlider;