import { prepareFormFields } from "../../utils/helpers/common";
import Footer from "../_common/partials/footer";
import Header from "../_common/partials/header";
import Sidebar from "../_common/partials/sidebar";
import BreadCrumbWrapper from "../_common/wrappers/breadcrumb-wrapper";
import ModalWrapper from "../_common/wrappers/modal-wrapper";
import TinyMceWrapper from "../_common/wrappers/tinymce-wrapper";

const Home = () => {
  const createForumPost = () => {
    const formData = prepareFormFields('createFormPostForm');
    console.log(formData);
  }

  return (
    <div className="dashboard-main-wrapper">
      <Header />
      <Sidebar />
      <div className="dashboard-wrapper">
        <div className="container-fluid dashboard-content">
          <BreadCrumbWrapper
            title="Acadify Forum"
            items={[
              {title: 'Home', active: true}
            ]}
          >
            <button type="button" className="btn btn-primary btn-xs" data-toggle="modal" data-target="#createFormPost">Create New Post</button>
          </BreadCrumbWrapper>

          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <img className="card-img-top" src="/img/urfu-2.jpeg" alt="Card image cap" height={250} />
                <div className="card-body">
                  <h4 className="card-title mb-2">100th Birthday of Ural Federal University, Yekaterinburg, Russia</h4>
                  <div className="mb-2">
                    <span className="badge badge-pill badge-secondary">UrFU</span>
                    <span className="badge badge-pill badge-secondary ml-1">Yekaterinburg</span>
                    <span className="badge badge-pill badge-secondary ml-1">Russia</span>
                    <span className="badge badge-pill badge-secondary ml-1">100th Birthday</span>
                  </div>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et est, omnis minus sit tempore accusantium, veniam illum nam excepturi aliquid libero vitae doloremque natus! Sit sapiente perferendis nulla reprehenderit itaque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti est. Iure laudantium quos consequatur cupiditate quo ipsam, non corrupti! Ducimus aut dolores aperiam dicta eligendi dolore, dignissimos inventore officiis.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas placeat voluptatibus quas quaerat quod voluptate vero quis temporibus unde illum, a inventore officia quae at nam optio labore, maxime cupiditate!
                  </p>
                  <a href="#" className="btn btn-primary btn-xs">View Details</a>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card">
                <img className="card-img-top" src="/img/urfu-1.jpeg" alt="Card image cap" height={250} />
                <div className="card-body">
                  <h4 className="card-title mb-2">Mount Elbrus Summit from Students of Ural Federal University (UrFU)</h4>
                  <div className="mb-2">
                    <span className="badge badge-pill badge-secondary">Mount Elbrus</span>
                    <span className="badge badge-pill badge-secondary ml-1">Hiking</span>
                    <span className="badge badge-pill badge-secondary ml-1">UrFU</span>
                    <span className="badge badge-pill badge-secondary ml-1">Summit</span>
                  </div>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et est, omnis minus sit tempore accusantium, veniam illum nam excepturi aliquid libero vitae doloremque natus! Sit sapiente perferendis nulla reprehenderit itaque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti est. Iure laudantium quos consequatur cupiditate quo ipsam, non corrupti! Ducimus aut dolores aperiam dicta eligendi dolore, dignissimos inventore officiis.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas placeat voluptatibus quas quaerat quod voluptate vero quis temporibus unde illum, a inventore officia quae at nam optio labore, maxime cupiditate!
                  </p>
                  <a href="#" className="btn btn-primary btn-xs">View Details</a>
                </div>
              </div>
            </div>
          </div>

          <ModalWrapper
            id="createFormPost"
            largeModal={true}
            headerTitle="Create Post"
            isForm={true}
            onFormSubmit={() => createForumPost()}
          >
            <TinyMceWrapper name="description" />
            <div className="form-group mt-2 mb-0">
              <label htmlFor="tags">Tags</label>
              <input type="text" name="tags" className="form-control" id="tags" data-role="tagsinput" />
            </div>
          </ModalWrapper>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
