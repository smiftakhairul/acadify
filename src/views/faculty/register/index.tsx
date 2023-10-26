import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="acadify-wrapper-v-center">
      <div className="splash-container">
        <div className="card">
          <div className="card-header text-center">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <img className="logo-img" src="/img/acadify-faculty.png" alt="logo" width={280} />
            </a>
            <span className="splash-description">Please enter your information.</span>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <input className="form-control form-control-lg" id="username" type="text" placeholder="Username" autoComplete="off" />
              </div>
              <div className="form-group">
                <input className="form-control form-control-lg" id="email" type="email" placeholder="Email" autoComplete="off" />
              </div>
              <div className="form-group">
                <input className="form-control form-control-lg" id="password" type="password" placeholder="Password" />
              </div>
              <div className="form-group">
                <input className="form-control form-control-lg" id="confirm_password" type="password" placeholder="Confirm Password" />
              </div>
              <div className="form-group">
                <label className="custom-control custom-checkbox">
                  <input className="custom-control-input" type="checkbox" />
                  <span className="custom-control-label">Remember Me</span>
                </label>
              </div>
              <button type="submit" className="btn btn-primary btn-lg btn-block">Register as Faculty</button>
            </form>
          </div>
          <div className="card-footer bg-white p-0 text-center">
            <div className="card-footer-item card-footer-item-bordered">
              <Link to="/faculty/login" className="footer-link">Already a faculty? Login here.</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
