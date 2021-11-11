import { HashLink } from "react-router-hash-link";
import "./HeroSlider.css";

const HeroSlider = () => {
    return (
        <div className="banner img-fluid">
          <div>
            <h1>Welcome to <br /> CarMax</h1>
            <p>Travel is the movement of people between distant geographical locations.<br /> Travel can also include relatively short stays between <br /> successive movements, as in the case of tourism.</p>
            <div className="text-center">
              <HashLink to="/home#services">
                <button className="btn__regular">Explore Our Car <i class="fas fa-arrow-right"></i></button>
              </HashLink>
            </div>
          </div>
        </div>
  );
};

export default HeroSlider;