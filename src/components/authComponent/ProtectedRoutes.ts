import { useSelector } from "react-redux";


const ProtectedRoute = ({ children }:any) => {
  const isAuthenticated = useSelector((state:any) => state.auth.isAuthenticated);

  return isAuthenticated && children 
//   : <Navigator to="/login"/>;
};

export default ProtectedRoute;
