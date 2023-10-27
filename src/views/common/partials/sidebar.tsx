import { Link } from "react-router-dom";

type Props = {
  type: string
};

const Sidebar = (props: Props) => {
  return (
    <div className="nav-left-sidebar sidebar-dark">
      <div className="menu-list">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav flex-column">
              <li className="nav-divider">Menus</li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${['/faculty/home', '/home'].includes(location.pathname) ? 'active' : ''}`}
                  to={props.type === 'faculty' ? '/faculty/home' : '/home'}
                >
                  <i className="fas fa-fw fa-columns"></i>Home
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${[
                    '/faculty/classes/dashboard',
                    '/faculty/classes/materials',
                    '/faculty/classes/grades',
                    '/faculty/classes/distributions',
                    '/classes/dashboard',
                    '/classes/materials',
                    '/classes/grades',
                    '/classes/distributions',
                  ].includes(location.pathname) ? 'active' : ''}`}
                  href="#"
                  data-toggle="collapse"
                  aria-expanded="false"
                  data-target="#submenu-2"
                  aria-controls="submenu-2"
                >
                  <i className="fa fa-fw fa-rocket"></i>Classes
                </a>
                <div id="submenu-2" className="collapse submenu">
                  <ul className="nav flex-column">
                    <Link
                      className={`nav-link ${['/faculty/classes/dashboard', '/classes/dashboard'].includes(location.pathname) ? 'active' : ''}`}
                      to={props.type === 'faculty' ? '/faculty/classes/dashboard' : '/classes/dashboard'}
                    >
                      Dashboard
                    </Link>
                    <Link
                      className={`nav-link ${['/faculty/classes/materials', '/classes/materials'].includes(location.pathname) ? 'active' : ''}`}
                      to={props.type === 'faculty' ? '/faculty/classes/materials' : '/classes/materials'}
                    >
                      Materials
                    </Link>
                    <Link
                      className={`nav-link ${['/faculty/classes/grades', '/classes/grades'].includes(location.pathname) ? 'active' : ''}`}
                      to={props.type === 'faculty' ? '/faculty/classes/grades' : '/classes/grades'}
                    >
                      Grades
                    </Link>
                    <Link
                      className={`nav-link ${['/faculty/classes/distributions', '/classes/distributions'].includes(location.pathname) ? 'active' : ''}`}
                      to={props.type === 'faculty' ? '/faculty/classes/distributions' : '/classes/distributions'}
                    >
                      Distributions
                    </Link>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
