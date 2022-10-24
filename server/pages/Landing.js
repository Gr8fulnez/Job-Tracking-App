import Lago from "../assets/images/logo.svg";
// import main from '../assets/images/main-alternative.svg';
import Wrapper from "../assets/css/wrappers/LandingPage";
// import { Logo } from '../components';
// import Logo from '../components/Logo';

const Landing = () => {
  return (
    <Wrapper>
      <nav>{/* <Lago /> */}</nav>

      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Jobify is a job tracking app that helps you keep track of your job
            applications. The app allows you to add, edit, and delete jobs. You
            can also mark jobs as applied, interviewing, or offer.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        {/* <img src={main} alt="majob junt" id='img main-img' /> */}
      </div>
    </Wrapper>
  );
};

export default Landing;
