import { Link, useNavigate } from "react-router-dom";
import useApi from "../../../hooks/useApi";
import { prepareFormFields } from "../../../utils/helpers/common";
import useNotification from "../../../hooks/useNotification";

const Register = () => {
  const api = useApi();
  const navigate = useNavigate();
  const notification = useNotification();

  const submitRegistration = (e: any) => {
    e.preventDefault();
    const formData = prepareFormFields('facultyRegisterForm');
    if (formData?.password !== formData?.confirm_password) {
      notification.error('Password doesn\'t match!');
      return;
    }
    api
      .facultyRegister(formData)
      .then(res => {
        notification.success('Faculty successfully registered. Please login to continue.');
        navigate('/faculty/login');
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
            <form id="facultyRegisterForm" onSubmit={(e) => submitRegistration(e)}>
              <div className="form-group">
                <input type="text" name="name" className="form-control form-control-lg" id="name" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <input type="text" name="username" className="form-control form-control-lg" id="username" placeholder="Username" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" className="form-control form-control-lg" id="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input type="password" name="password" className="form-control form-control-lg" id="password" placeholder="Password" required />
              </div>
              <div className="form-group">
                <input type="password" name="confirm_password" className="form-control form-control-lg" id="confirm_password" placeholder="Confirm Password" required />
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
