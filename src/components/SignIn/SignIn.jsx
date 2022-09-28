import React from "react";
import styles from "./SignIn.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../features/applicationSlice";

const SignIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(loginThunk({ login, password }));
  };

  return (
    <div>
      <div>
        <div class="login">
          <h1>Вход</h1>
          <form onSubmit={(e) => handleClick(e)}>
            <input
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              type="text"
              name="u"
              placeholder="Username"
              required="required"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="p"
              placeholder="Password"
              required="required"
            />
            <button type="submit" class="btn btn-primary btn-block btn-large">
              Let me in.
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
