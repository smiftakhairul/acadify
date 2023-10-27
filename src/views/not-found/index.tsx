import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="dashboard-main-wrapper p-0">
      <div className="text-center">
        <div className="container">
          <div className="row">
            <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="error-section">
                <img src="/img/oops.png" alt="" className="img-fluid" />
                <div className="error-section-content">
                  <h1 className="mb-4">Page Not Found</h1>
                  <Link to="/login" className="btn btn-secondary btn-lg btn-rounded">Back to homepage</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
