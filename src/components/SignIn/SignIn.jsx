import React from "react";
import { authThunk } from "../../features/applicationSlice";

import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./Sign.scss"

import { loginThunk } from "../../features/applicationSlice";

const SignIn = () => {
	const [reglogin, setRegLogin] = useState("");
	const [regPassword, setRegPassword] = useState("");
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const handleClickRegistr = ()=>{
		
		dispatch(authThunk({reglogin,regPassword}))
	  }

  const handleClick = (e) => {
    
    dispatch(loginThunk({ login, password }));
  };

  return (
    <div>
      <a href="https://front.codes/" class="logo" target="_blank">
		<img src="https://assets.codepen.io/1462889/fcy.png" alt=""/>
	</a>

	<div class="section">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
			          	<input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<div class="card-front">
									<div class="center-wrap">
										<div class="text-center">
											<div className="title"><h4 class="mb-4 pb-3">ВХОД</h4></div>
											<div class="form-group">
												<input value={login} onChange={(e)=> setLogin(e.target.value)} type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
												<i class="input-icon uil uil-at"></i>
											</div>	
											<div class="form-group mt-2">
												<input  onChange={(e)=> setPassword(e.target.value)}  type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<a onClick={()=> handleClick()} class="btn mt-4">submit</a>
                            				<p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
				      					</div>
			      					</div>
			      				</div>
								<div class="card-back">
									<div class="center-wrap">
										<div class="text-center">
											<div className="title"><h4 class="mb-4 pb-3">Регистрация</h4></div>	
											<div class="form-group mt-2">
												<input value={reglogin} onChange={(e)=> setRegLogin(e.target.value)} type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
												<i class="input-icon uil uil-at"></i>
											</div>	
											<div class="form-group mt-2">
												<input value={regPassword} onChange={(e)=> setRegPassword(e.target.value)} type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<div className="btn"><a onClick={()=> handleClickRegistr()} class="btn mt-4">submit</a></div>
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
  );
};

export default SignIn;
