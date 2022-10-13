import React, { useEffect } from "react";
import { authThunk } from "../../features/applicationSlice";

import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./Sign.scss";
import { ToastContainer, toast } from 'react-toastify';
import { loginThunk } from "../../features/applicationSlice";
import { addmadePC, fetchmadePC, getOnePC } from "../../features/madePCSlice";
import { color } from "@mui/system";

const SignIn = () => {
  const error = useSelector((state) => state.application.error);
  
  const load = useSelector((state)=> state.application.load)
  const [reglogin, setRegLogin] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleClickRegistr = () => {
    dispatch(authThunk({ reglogin, regPassword }));
    dispatch(addmadePC({ name: reglogin }));
  };
  const notify = () => toast(`${error}`, {
    type: 'error'
});
const success = () => toast("Успешно", {
  type: 'success'
});

  const handleClick = (e) => {
    dispatch(getOnePC());
    dispatch(loginThunk({ login, password }));
   
  };
 
  
   

  return (
    <div>
      <div class="section">
        <div class="container">
          <div class="row full-height justify-content-center">
            <div class="col-12 text-center align-self-center py-5">
              <div class="section pb-5 pt-5 pt-sm-2 text-center">
                <br />
                <br />
                <br />
                <br />
                <input
                  class="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label for="reg-log"></label>
                <div class="card-3d-wrap mx-auto">
                  <div class="card-3d-wrapper">
                    <div class="card-front">
                      <div class="center-wrap">
                        <div class="text-center">
                          <div className="title">
                            <h4 class="mb-4 pb-3">ВХОД</h4>
                          </div>
                          <div class="form-group">
                            <input
                              value={login}
                              onChange={(e) => setLogin(e.target.value)}
                              type="email"
                              name="logemail"
                              class="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-at"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              onChange={(e) => setPassword(e.target.value)}
                              type="password"
                              name="logpass"
                              class="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a onClick={() => handleClick()} class="btn mt-4">
                            submit
                          </a>
                          <p class="mb-0 mt-4 text-center">
                            <a href="#0" class="link">
                              Forgot your password?
                            </a>
                          </p>
                          <p className="error">{error}</p>
                        </div>
                      </div>
                    </div>
                    <div class="card-back">
                      <div class="center-wrap">
                        <div class="text-center">
                          <div className="title">
                            <h4 class="mb-4 pb-3">Регистрация</h4>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              value={reglogin}
                              onChange={(e) => setRegLogin(e.target.value)}
                              type="email"
                              name="logemail"
                              class="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-at"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              value={regPassword}
                              onChange={(e) => setRegPassword(e.target.value)}
                              type="password"
                              name="logpass"
                              class="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autocomplete="off"
                            />
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>
                          <div className="btn"
                              onClick={() => handleClickRegistr()}
                              >
                            <a
                              class="btn mt-4"
                            >
                              submit
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
