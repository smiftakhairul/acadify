import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStorage from "../../../hooks/useStorage";

const ClassLinks = () => {
  const storage = useStorage();
  const [user, setUser]: any = useState({});

  useEffect(() => {
    setUser(JSON.parse(storage.getItem('user') || ''));
  }, [])

  return (
    <>
      <Link to="/class/js/dashboard" className="btn btn-success btn-rounded btn-xs"><i className="fas fa-home"></i> Dashboard</Link>
      <Link to="/class/js/materials" className="btn btn-success btn-rounded btn-xs ml-1"><i className="fas fa-file-alt"></i> Materials</Link>
      <Link to="/class/js/grades" className="btn btn-success btn-rounded btn-xs ml-1"><i className="fas fa-chart-bar"></i> Grades</Link>
    </>
  );
}

export default ClassLinks;
