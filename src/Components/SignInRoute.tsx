import { AppRoute } from "Constants/Route";
import { useSelector } from "react-redux"
import { Navigate } from 'react-router-dom'
import { isAuthenticated } from "Store/Selectors/Auth"

const SignInRoute = ({ children }: { children: JSX.Element }) => {
  const isSignedIn = useSelector(isAuthenticated);

  if (isSignedIn) {
    return <Navigate to={AppRoute.PLACES}/>;
  }

  return children;
};

export default SignInRoute