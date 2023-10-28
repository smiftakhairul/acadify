import { Link } from "react-router-dom";

const ClassInfo = () => {
  return (
    <>
      <div className="card card-body mb-2">
        <div className="row">
          <div className="col-md-3">
            <img src="/img/javascript.png" height={75} width={75} alt="" />
            <p className="mt-2 small text-warning"><a href="#" className="text-decoration-underline" onClick={(e) => e.preventDefault()}><i className="fas fa-clipboard"></i> Coupon</a></p>
          </div>
          <div className="col-md-9">
            <h4 className="mb-0">JavaScript Foundation Course</h4>
            <p className="mb-1">
              <span className="badge badge-secondary mr-1">js</span>
              <span className="badge badge-secondary">javascript</span>
            </p>
            
            <h5 className="text-muted mt-0 mb-0">Test Faculty</h5>
            <h6 className="text-muted mt-0 mb-0">Assistant Professor, Ural Federal University</h6>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header bg-primary">
          <div className="row">
            <div className="col-md-6"><i className="fas fa-users"></i> Students</div>
            <div className="col-md-6 text-right"><span className="badge badge-info">05/50</span></div>
          </div>
        </div>
        <div className="card-body m-0 p-0">
          <ul className="list-group list-group-flush">
            <li className="list-group-item py-2">
              <div className="d-flex align-items-center">
                <img src="/img/avatar.jpeg" width={25} height={25} alt="" className="mr-2" />
                <p className="mb-0"><Link to="/profile">S M Iftakhairul</Link></p>
              </div>
            </li>
            <li className="list-group-item py-2">
              <div className="d-flex align-items-center">
                <img src="/img/avatar.jpeg" width={25} height={25} alt="" className="mr-2" />
                <p className="mb-0"><Link to="/profile">John Doe</Link></p>
              </div>
            </li>
            <li className="list-group-item py-2">
              <div className="d-flex align-items-center">
                <img src="/img/avatar.jpeg" width={25} height={25} alt="" className="mr-2" />
                <p className="mb-0"><Link to="/profile">Peter Smith</Link></p>
              </div>
            </li>
            <li className="list-group-item py-2">
              <div className="d-flex align-items-center">
                <img src="/img/avatar.jpeg" width={25} height={25} alt="" className="mr-2" />
                <p className="mb-0"><Link to="/profile">Risul Islam</Link></p>
              </div>
            </li>
            <li className="list-group-item py-2">
              <div className="d-flex align-items-center">
                <img src="/img/avatar.jpeg" width={25} height={25} alt="" className="mr-2" />
                <p className="mb-0"><Link to="/profile">Raiyad Raad</Link></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ClassInfo;
