import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);

  const changeInputHandler = (e) => {
    e.preventDefault();
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/login`,
        userData
      );

      const user = response.data;

      setCurrentUser(user);

      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>

        <form className="form login_form" onSubmit={loginUser}>
          {error && <p className="form_error-message">{error}</p>}

          <input
            type="email"
            placeholder="email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />

          <button type="submit" className="btn primary">
            Login
          </button>
        </form>
        <small>
          Don't have an account? <Link to={`/register`}>Register</Link>
        </small>
      </div>
    </section>
  );
};
export default Login;
