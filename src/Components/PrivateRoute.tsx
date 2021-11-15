import { AppRoute } from "Constants/Route";
import { useSelector } from "react-redux"
import { Navigate, useLocation } from 'react-router-dom'
import { isAuthenticated } from "Store/Selectors/Auth"

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  let location = useLocation();

  const isSignedIn = useSelector(isAuthenticated);

  if (!isSignedIn) {
    return <Navigate to={AppRoute.SIGNIN} state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute