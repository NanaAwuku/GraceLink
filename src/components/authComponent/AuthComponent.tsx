import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/authSlice";

const AuthComponent = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state:any) => state.auth);

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <button onClick={() => dispatch(login({ name: "John Doe" }))}>
          Login
        </button>
      )}
    </div>
  );
};
