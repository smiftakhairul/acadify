import { useEffect, useState } from "react";
import useStorage from "../../../hooks/useStorage";
import { prepareFormFields } from "../../../utils/helpers/common";
import Footer from "../../common/partials/footer";
import Header from "../../common/partials/header";
import Sidebar from "../../common/partials/sidebar";
import BreadCrumbWrapper from "../../common/wrappers/breadcrumb-wrapper";
import ModalWrapper from "../../common/wrappers/modal-wrapper";

const Profile = () => {
  const storage = useStorage();
  const [user, setUser]: any = useState({});

  useEffect(() => {
    setUser(JSON.parse(storage.getItem('user') || ''));
  }, [])

  const updateProfile = () => {
    const formData = prepareFormFields('editFacultyProfileForm');
    console.log(formData);
  }

  return (
    <div className="dashboard-main-wrapper">
      <Header type="faculty" />
      <Sidebar type="faculty" />
      <div className="dashboard-wrapper">
        <div className="container-fluid dashboard-content">
          <BreadCrumbWrapper
            title="User Profile"
            items={[
              {title: 'Home', link: '/faculty/home'},
              {title: 'Profile', active: true}
            ]}
          >
            <button type="button" className="btn btn-primary btn-xs" data-toggle="modal" data-target="#editFacultyProfile">Edit Profile</button>
          </BreadCrumbWrapper>

          <div className="row">
            <div className="col-md-4">
              <div className="card card-body mb-2">
                <div className="text-center">
                  <img src="/img/avatar.jpeg" height={120} width={120} alt="" />
                  <h4 className="mt-2 mb-0">{user.name}</h4>
                  <h5 className="text-muted mt-0 mb-0">{user.designation}</h5>
                  <p className="text-muted mt-0 mb-2">{user.address}</p>
                </div>
              </div>
              <ul className="list-group">
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-md-6">
                      <i className="fas fa-globe"></i> Website
                    </div>
                    <div className="col-md-6 text-right">
                      <a href="#" onClick={(e) => e.preventDefault()}>{user.website}</a>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-md-6">
                      <i className="fab fa-github"></i> Github
                    </div>
                    <div className="col-md-6 text-right">
                      <a href="#" onClick={(e) => e.preventDefault()}>{user.github}</a>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-md-6">
                      <i className="fab fa-twitter"></i> Twitter
                    </div>
                    <div className="col-md-6 text-right">
                      <a href="#" onClick={(e) => e.preventDefault()}>{user.twitter}</a>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-md-6">
                      <i className="fab fa-facebook"></i> Facebook
                    </div>
                    <div className="col-md-6 text-right">
                      <a href="#" onClick={(e) => e.preventDefault()}>{user.facebook}</a>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-md-6">
                      <i className="fab fa-vk"></i> VK
                    </div>
                    <div className="col-md-6 text-right">
                      <a href="#" onClick={(e) => e.preventDefault()}>{user.vk}</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-7">
              <div className="card card-body mb-2">
                <div className="table-responsive profile-table">
                  <table className="table">
                    <tbody>
                      <tr>
                        <th>Full Name</th>
                        <td>{user.name}</td>
                      </tr>
                      <tr>
                        <th>Designation</th>
                        <td>{user.designation}</td>
                      </tr>
                      <tr>
                        <th>E-mail Address</th>
                        <td>{user.email}</td>
                      </tr>
                      <tr>
                        <th>Mobile</th>
                        <td>{user.phone}</td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>{user.address}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card card-body">
                {user.description}
              </div>
            </div>
          </div>

          <ModalWrapper
            id="editFacultyProfile"
            largeModal={true}
            headerTitle="Update Profile"
            isForm={true}
            onFormSubmit={() => updateProfile()}
          >
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Full Name" defaultValue={user.name} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail Address</label>
                  <input type="email" name="email" className="form-control" id="email" placeholder="E-mail Address" defaultValue={user.email} required readOnly />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" name="username" className="form-control" id="username" placeholder="Username" defaultValue={user.username} required readOnly />
                </div>
                <div className="form-group">
                  <label htmlFor="designation">Designation</label>
                  <input type="text" name="designation" className="form-control" id="designation" placeholder="Designation" defaultValue={user.designation} required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Mobile No.</label>
                  <input type="text" name="phone" className="form-control" id="phone" placeholder="Mobile No." defaultValue={user.phone} required />
                </div>
                <div className="form-group">
                  <label htmlFor="profile_image">Profile Image</label>
                  <input type="file" name="profile_image" className="form-control" id="profile_image" />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input type="text" name="address" className="form-control" id="address" placeholder="Address" defaultValue={user.address} required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="website">Website URL</label>
                  <input type="text" name="website" className="form-control" id="website" placeholder="Website URL" defaultValue={user.website} required />
                </div>
                <div className="form-group">
                  <label htmlFor="facebook">Facebook Username</label>
                  <input type="text" name="facebook" className="form-control" id="facebook" placeholder="Facebook Username" defaultValue={user.facebook} required />
                </div>
                <div className="form-group">
                  <label htmlFor="twitter">Twitter Username</label>
                  <input type="text" name="twitter" className="form-control" id="twitter" placeholder="Twitter Username" defaultValue={user.twitter} required />
                </div>
                <div className="form-group">
                  <label htmlFor="vk">VK Username</label>
                  <input type="text" name="vk" className="form-control" id="vk" placeholder="VK Username" defaultValue={user.vk} required />
                </div>
                <div className="form-group">
                  <label htmlFor="github">Github Username</label>
                  <input type="text" name="github" className="form-control" id="github" placeholder="Github Username" defaultValue={user.github} required />
                </div>
                <div className="form-group">
                  <label htmlFor="description">About Me</label>
                  <textarea name="description" className="form-control" id="description" cols={30} rows={5} defaultValue={user.description} required></textarea>
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

export default Profile;
