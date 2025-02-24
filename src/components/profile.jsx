import { useSelector } from "react-redux";
import LoginForm from "./login-form";
import { logout } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.auth?.user);
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <h1>Welcome, {user?.name}!</h1>
          <button onClick={() => dispatch(logout())}>logout</button>
        </>
      ) : (
        <>
          <h1>Please log in.</h1>
          <LoginForm />
        </>
      )}
    </div>
  );
}

export default Profile;
