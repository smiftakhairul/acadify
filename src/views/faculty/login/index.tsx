import { Link, useNavigate } from "react-router-dom";
import { prepareFormFields } from "../../../utils/helpers/common";
import useApi from "../../../hooks/useApi";
import useNotification from "../../../hooks/useNotification";

const Login = () => {
  const api = useApi();
  const navigate = useNavigate();
  const notification = useNotification();

  const submitLogin = (e: any) => {
    e.preventDefault();
    const formData = prepareFormFields('facultyLoginForm');
    api
      .facultyLogin(formData)
      .then(res => {
        notification.success('Successfully logged in!');
        navigate('/faculty/home');
      });
  }

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
            <form id="facultyLoginForm" onSubmit={(e) => submitLogin(e)}>
              <div className="form-group">
                <input type="text" name="username" className="form-control form-control-lg" id="username" placeholder="Username" required/>
              </div>
              <div className="form-group">
                <input type="password" name="password" className="form-control form-control-lg" id="password" placeholder="Password" required />
              </div>
              <div className="form-group">
                <label className="custom-control custom-checkbox">
                  <input type="checkbox" name="remember" className="custom-control-input" />
                  <span className="custom-control-label">Remember Me</span>
                </label>
              </div>
              <button type="submit" className="btn btn-primary btn-lg btn-block">Login as Faculty</button>
            </form>
          </div>
          <div className="card-footer bg-white p-0 text-center">
            <div className="card-footer-item card-footer-item-bordered">
              <Link to="/faculty/register" className="footer-link">Create faculty account</Link>
            </div>
            {/* <div className="card-footer-item card-footer-item-bordered">
              <a href="#" className="footer-link">Forgot Password</a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
