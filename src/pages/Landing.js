import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
                  <p>
                      Jobify is a job tracking app that helps you keep track of your job applications.
                      The app allows you to add, edit, and delete jobs. You can also mark jobs as applied, interviewing, or offer.  
                  </p>   
                  <button className='btn btn-hero'>Login/Register</button>  
              </div>
              <img src={main} alt="majob junt" id='img main-img' />
      </div>
    </main>
  );
}

export default Landing;