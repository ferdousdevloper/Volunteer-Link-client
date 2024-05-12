/* eslint-disable react/prop-types */

import useAuth from "../Hook/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const PrivateDetails = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loader></Loader>;
  }

  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
  }

  return <div>{children}</div>;
};

export default PrivateDetails;
