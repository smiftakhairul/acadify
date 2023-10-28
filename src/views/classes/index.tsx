import { Link } from "react-router-dom";
import { prepareFormFields } from "../../utils/helpers/common";
import Footer from "../_common/partials/footer";
import Header from "../_common/partials/header";
import Sidebar from "../_common/partials/sidebar";
import BreadCrumbWrapper from "../_common/wrappers/breadcrumb-wrapper";
import ModalWrapper from "../_common/wrappers/modal-wrapper";
import { useEffect, useState } from "react";
import useStorage from "../../hooks/useStorage";

const Classes = () => {
  const storage = useStorage();
  const [user, setUser]: any = useState({});

  useEffect(() => {
    setUser(JSON.parse(storage.getItem('user') || ''));
  }, [])

  const createClass = () => {
    const formData = prepareFormFields('createClassForm');
    console.log(formData);
  }

  const joinClass = () => {
    const formData = prepareFormFields('joinClassForm');
    console.log(formData);
  }

  return (
    <div className="dashboard-main-wrapper">
      <Header />
      <Sidebar />
      <div className="dashboard-wrapper">
        <div className="container-fluid dashboard-content">
          <BreadCrumbWrapper
            title="Classes"
            items={[
              {title: 'Home', link: '/home'},
              {title: 'Classes', active: true}
            ]}
          >
            {
              user?.role === 'student'
                ? <button type="button" className="btn btn-primary btn-xs" data-toggle="modal" data-target="#joinClass">Join Class</button>
                : <button type="button" className="btn btn-primary btn-xs" data-toggle="modal" data-target="#createClass">Create Class</button>
            }
          </BreadCrumbWrapper>

          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body d-flex flex-column p-0">
                  <div className="d-flex">
                    <img className="card-img-left" src="/img/javascript.png" width={130} style={{ objectFit: 'cover' }} />
                    <div className="card-body">
                      <h3 className="card-title">
                        <div className="row">
                          <div className="col-md-10">JavaScript Foundational Course</div>
                          <div className="col-md-2 text-right"><a href="#" onClick={(e) => e.preventDefault()}><i className="fas fa-clone"></i></a></div>
                        </div>
                      </h3>
                      <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident itaque repudiandae iure officia quidem debitis odit eos? Deserunt iure dolorem voluptas eius numquam facere tempore doloribus, labore suscipit adipisci dolorum.</p>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mt-1">
                            <span className="badge badge-secondary mr-1">js</span>
                            <span className="badge badge-secondary">javascript</span>
                          </div>
                        </div>
                        <div className="col-md-3 text-right">
                          <p className="mt-1"><i className="fas fa-users"></i> 05/50</p>
                        </div>
                        <div className="col-md-3 text-right">
                          <Link to={'/class/js/dashboard'} className="btn btn-info btn-xs">View</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="mt-auto">
                    <div className="card-footer">
                      <div className="row">
                        <div className="col-md-8">
                          
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body d-flex flex-column p-0">
                  <div className="d-flex">
                    <img className="card-img-left" src="/img/react.png" width={130} style={{ objectFit: 'cover' }} />
                    <div className="card-body">
                      <h3 className="card-title">
                        <div className="row">
                          <div className="col-md-10">React.js Foundational Course</div>
                          <div className="col-md-2 text-right"><a href="#" onClick={(e) => e.preventDefault()}><i className="fas fa-clone"></i></a></div>
                        </div>
                      </h3>
                      <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident itaque repudiandae iure officia quidem debitis odit eos? Deserunt iure dolorem voluptas eius numquam facere tempore doloribus, labore suscipit adipisci dolorum.</p>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mt-1">
                            <span className="badge badge-secondary mr-1">js</span>
                            <span className="badge badge-secondary">react</span>
                          </div>
                        </div>
                        <div className="col-md-3 text-right">
                          <p className="mt-1"><i className="fas fa-users"></i> 05/50</p>
                        </div>
                        <div className="col-md-3 text-right">
                          <Link to={'/class/js/dashboard'} className="btn btn-info btn-xs">View</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body d-flex flex-column p-0">
                  <div className="d-flex">
                    <img className="card-img-left" src="/img/laravel.png" width={130} style={{ objectFit: 'cover' }} />
                    <div className="card-body">
                      <h3 className="card-title">
                        <div className="row">
                          <div className="col-md-10">Laravel Foundational Course</div>
                          <div className="col-md-2 text-right"><a href="#" onClick={(e) => e.preventDefault()}><i className="fas fa-clone"></i></a></div>
                        </div>
                      </h3>
                      <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident itaque repudiandae iure officia quidem debitis odit eos? Deserunt iure dolorem voluptas eius numquam facere tempore doloribus, labore suscipit adipisci dolorum.</p>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mt-1">
                            <span className="badge badge-secondary mr-1">php</span>
                            <span className="badge badge-secondary">laravel</span>
                          </div>
                        </div>
                        <div className="col-md-3 text-right">
                          <p className="mt-1"><i className="fas fa-users"></i> 05/50</p>
                        </div>
                        <div className="col-md-3 text-right">
                          <Link to={'/class/js/dashboard'} className="btn btn-info btn-xs">View</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body d-flex flex-column p-0">
                  <div className="d-flex">
                    <img className="card-img-left" src="/img/django.png" width={130} style={{ objectFit: 'cover' }} />
                    <div className="card-body">
                      <h3 className="card-title">
                        <div className="row">
                          <div className="col-md-10">Django Foundational Course</div>
                          <div className="col-md-2 text-right"><a href="#" onClick={(e) => e.preventDefault()}><i className="fas fa-clone"></i></a></div>
                        </div>
                      </h3>
                      <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident itaque repudiandae iure officia quidem debitis odit eos? Deserunt iure dolorem voluptas eius numquam facere tempore doloribus, labore suscipit adipisci dolorum.</p>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mt-1">
                            <span className="badge badge-secondary mr-1">python</span>
                            <span className="badge badge-secondary">django</span>
                          </div>
                        </div>
                        <div className="col-md-3 text-right">
                          <p className="mt-1"><i className="fas fa-users"></i> 05/50</p>
                        </div>
                        <div className="col-md-3 text-right">
                          <Link to={'/class/js/dashboard'} className="btn btn-info btn-xs">View</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {
            user?.role === 'student'
              ? (
                <ModalWrapper
                  id="joinClass"
                  headerTitle="Join Class"
                  isForm={true}
                  onFormSubmit={() => joinClass()}
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="coupon">Coupon Code</label>
                        <input type="text" name="coupon" className="form-control" id="coupon" placeholder="Coupon Code" required />
                      </div>
                    </div>
                  </div>       
                </ModalWrapper>
              ) : (
                <ModalWrapper
                  id="createClass"
                  headerTitle="Create Class"
                  isForm={true}
                  onFormSubmit={() => createClass()}
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="name">Class Name</label>
                        <input type="text" name="name" className="form-control" id="name" placeholder="Class Name" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="description">Class Description</label>
                        <textarea name="description" className="form-control" id="description" cols={30} rows={5} placeholder="Class Description" required></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="logo">Class Logo</label>
                        <input type="file" name="logo" className="form-control" id="logo" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="capacity">Class Capacity</label>
                        <input type="number" name="capacity" className="form-control" id="capacity" placeholder="Class Capacity" min={1} max={100} required />
                      </div>
                      <div className="form-group mt-2 mb-0">
                        <label htmlFor="tags">Class Tags</label>
                        <input type="text" name="tags" className="form-control" id="tags" data-role="tagsinput" required />
                      </div>
                    </div>
                  </div>       
                </ModalWrapper>
              )
          }
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Classes;
