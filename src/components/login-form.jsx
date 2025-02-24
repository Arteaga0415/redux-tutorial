import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

function LoginForm() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const userData = { name: "John Doe", email: "john.doe@example.com" };
    dispatch(login(userData));
  };

  return <button onClick={handleLogin}>Log In</button>;
}

export default LoginForm;
