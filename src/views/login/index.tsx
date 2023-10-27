import { Link, useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";
import useNotification from "../../hooks/useNotification";
import { prepareFormFields } from "../../utils/helpers/common";

const Login = () => {
  const api = useApi();
  const navigate = useNavigate();
  const notification = useNotification();

  const submitLogin = (e: any) => {
    e.preventDefault();
    const formData = prepareFormFields('loginForm');
    api
      .login(formData)
      .then(res => {
        notification.success('Successfully logged in!');
        navigate('/home');
      });
  }

  return (
    <div className="acadify-wrapper-v-center">
      <div className="splash-container">
        <div className="card">
          <div className="card-header text-center">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <img className="logo-img" src="/img/acadify.png" alt="logo" width={180} />
            </a>
            <span className="splash-description">Please enter your information.</span>
          </div>
          <div className="card-body">
            <form id="loginForm" onSubmit={(e) => submitLogin(e)}>
              <div className="form-group">
                <input type="text" name="username" className="form-control form-control-lg" id="username" placeholder="Username" required/>
              </div>
              <div className="form-group">
                <select name="role" className="form-control form-control-lg" id="role" required>
                  <option value="">Select Role</option>
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                </select>
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
              <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button>
            </form>
          </div>
          <div className="card-footer bg-white p-0 text-center">
            <div className="card-footer-item card-footer-item-bordered">
              <Link to="/register" className="footer-link">Create an account</Link>
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
