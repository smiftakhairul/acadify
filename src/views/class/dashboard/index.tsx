import { Link } from "react-router-dom";
import { prepareFormFields } from "../../../utils/helpers/common";
import Footer from "../../_common/partials/footer";
import Header from "../../_common/partials/header";
import Sidebar from "../../_common/partials/sidebar";
import BreadCrumbWrapper from "../../_common/wrappers/breadcrumb-wrapper";
import ModalWrapper from "../../_common/wrappers/modal-wrapper";
import ClassInfo from "../_partials/info";
import ClassLinks from "../_partials/links";

const Dashboard = () => {
  const addPost = () => {
    const formData = prepareFormFields('addPostForm');
    console.log(formData);
  }

  return (
    <div className="dashboard-main-wrapper">
      <Header />
      <Sidebar />
      <div className="dashboard-wrapper">
        <div className="container-fluid dashboard-content">
          <BreadCrumbWrapper
            title="JavaScript Foundation Course"
            items={[
              {title: 'Home', link: '/home'},
              {title: 'Classes', link: '/classes'},
              {title: 'JavaScript Foundation Course', active: true}
            ]}
          >
            <ClassLinks />
            <button type="button" className="btn btn-primary btn-xs ml-1" data-toggle="modal" data-target="#addPost">Add Post</button>
          </BreadCrumbWrapper>

          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quae at corrupti qui aspernatur ut deserunt voluptate consequatur, ipsa, libero reiciendis vero beatae? Ut assumenda incidunt nisi praesentium rerum. Error.
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="d-flex align-items-center">
                        <img src="/img/avatar.jpeg" width={25} height={25} alt="" className="mr-1" />
                        <p className="mb-0"><Link to="/profile">S M Iftakhairul</Link></p>
                      </div>
                    </div>
                    <div className="col-md-3 text-right">
                      <button className="btn btn-warning btn-xs"><i className="fas fa-edit"></i> Edit</button>
                      <button className="btn btn-danger btn-xs ml-1"><i className="fas fa-trash-alt"></i> Delete</button>
                    </div>
                    <div className="col-md-4 text-right">
                      <p className="mt-1"><i className="fas fa-calendar-alt"></i> October 27, 2023 12:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <p className="mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quae at corrupti qui aspernatur ut deserunt voluptate consequatur, ipsa, libero reiciendis vero beatae? Ut assumenda incidunt nisi praesentium rerum. Error.</p>
                  <a href="#" onClick={(e) => e.preventDefault()}><span className="small bg-primary px-2 py-1">
                    <i className="fas fa-file-pdf mr-1"></i>Attachment.pdf
                  </span></a>
                  <a className="ml-1" href="#" onClick={(e) => e.preventDefault()}><span className="small bg-primary px-2 py-1">
                    <i className="fas fa-file-excel mr-1"></i>Document.xlsx
                  </span></a>
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <img src="/img/avatar.jpeg" width={25} height={25} alt="" className="mr-1" />
                        <p className="mb-0"><Link to="/profile">Risul Islam</Link></p>
                      </div>
                    </div>
                    <div className="col-md-6 text-right">
                      <p className="mt-1"><i className="fas fa-calendar-alt"></i> October 27, 2023 12:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quae at corrupti qui aspernatur ut deserunt voluptate consequatur, ipsa, libero reiciendis vero beatae? Ut assumenda incidunt nisi praesentium rerum. Error.
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="d-flex align-items-center">
                        <img src="/img/avatar.jpeg" width={25} height={25} alt="" className="mr-1" />
                        <p className="mb-0"><Link to="/profile">S M Iftakhairul</Link></p>
                      </div>
                    </div>
                    <div className="col-md-3 text-right">
                      <button className="btn btn-warning btn-xs"><i className="fas fa-edit"></i> Edit</button>
                      <button className="btn btn-danger btn-xs ml-1"><i className="fas fa-trash-alt"></i> Delete</button>
                    </div>
                    <div className="col-md-4 text-right">
                      <p className="mt-1"><i className="fas fa-calendar-alt"></i> October 27, 2023 12:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <ClassInfo />
            </div>
          </div>
          
          <ModalWrapper
            id="addPost"
            largeModal={true}
            headerTitle="Add Post"
            isForm={true}
            onFormSubmit={() => addPost()}
          >
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea name="description" id="description" className="form-control" cols={30} rows={5}></textarea>
                  {/* <TinyMceWrapper name="description" /> */}
                </div>
                <div className="form-group">
                  <label htmlFor="attachments">Attachments</label>
                  <input type="file" name="attachments[]" className="form-control" id="attachments" />
                </div>
              </div>
            </div>       
          </ModalWrapper>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
