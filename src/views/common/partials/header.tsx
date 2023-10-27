import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useStorage from "../../../hooks/useStorage";
import useApi from "../../../hooks/useApi";

type Props = {
  type: string,
};

const Header = (props: Props) => {
  const api = useApi();
  const storage = useStorage();
  const navigate = useNavigate();
  const [data, setData]: any = useState({});
  const [user, setUser]: any = useState({});

  useEffect(() => {
    setData({
      logo: props.type === 'faculty' ? '/img/acadify-faculty.png' : '/img/acadify-student.png',
      redirectLink: props.type === 'faculty' ? '/faculty/home' : '/home'
    });
    setUser(JSON.parse(storage.getItem('user') || ''));
  }, [props])

  const submitLogout = () => {
    api
      .logout()
      .then(res => {
        navigate(props.type === 'faculty' ? '/faculty/login' : '/login');
      });
  }

  return (
    <div className="dashboard-header">
      <nav className="navbar navbar-expand-lg bg-white fixed-top">
        <Link className="navbar-brand" to={data?.redirectLink}>
          <img src={data?.logo} alt="" width={150} />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto navbar-right-top">
            {/* <li className="nav-item">
              <div id="custom-search" className="top-search-bar">
                <input className="form-control" type="text" placeholder="Search.." />
              </div>
            </li> */}
            <li className="nav-item dropdown nav-user">
              <a className="nav-link nav-user-img" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="/img/avatar.jpeg" alt="" className="user-avatar-md rounded-circle" />
              </a>
              <div className="dropdown-menu dropdown-menu-right nav-user-dropdown" aria-labelledby="navbarDropdownMenuLink2">
                <div className="nav-user-info">
                  <h5 className="mb-0 text-white nav-user-name">{user?.name}</h5>
                </div>
                <Link className="dropdown-item" to={props.type === 'faculty' ? '/faculty/profile' : '/profile'}><i className="fas fa-user mr-2"></i>Profile</Link>
                <a className="dropdown-item" href="#" onClick={() => submitLogout()}><i className="fas fa-power-off mr-2"></i>Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
