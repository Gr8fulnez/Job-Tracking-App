import main from "../assets/images/main.svg";
import Wrapper from "../assets/css/wrappers/Testing";
import {Logo}  from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
          <nav>
              <Logo />
          </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Jobify is a job tracking app that helps you keep track of your job
            applications. The app allows you to add, edit, and delete jobs. You
            can also mark jobs as applied, interviewing, or offer.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
