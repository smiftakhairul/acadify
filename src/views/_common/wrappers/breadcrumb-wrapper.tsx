import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string,
  items: Array<object>,
  children?: ReactNode,
};

const BreadCrumbWrapper = (props: Props) => {
  return (
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="page-header">
          <div className="row">
            <div className="col-md-6">
              <h2 className="pageheader-title">{props.title}</h2>
            </div>
            <div className="col-md-6 text-right">
              {props.children}
            </div>
          </div>
          <div className="page-breadcrumb">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                {
                  props.items.map((item: any, index: number) => {
                    return <li className={`breadcrumb-item ${item.active ? 'active' : ''}`} key={index}>
                      {item.link ? <Link to={item.link}>{item.title}</Link> : item.title}
                    </li>
                  })
                }
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumbWrapper;
