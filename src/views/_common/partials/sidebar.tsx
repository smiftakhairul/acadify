import { Link } from "react-router-dom";

const Sidebar = () => {
  const classPattern = /^\/class/;

  return (
    <div className="nav-left-sidebar sidebar-dark">
      <div className="menu-list">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav flex-column">
              <li className="nav-divider">Menus</li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`}
                  to={'/home'}
                >
                  <i className="fas fa-fw fa-columns"></i>Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${(location.pathname === '/classes' || location.pathname.match(classPattern)?.[0] === '/class') ? 'active' : ''}`}
                  to={'/classes'}
                >
                  <i className="fa fa-fw fa-rocket"></i>Classes
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
