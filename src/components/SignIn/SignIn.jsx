import React from "react";
import styles from "./SignIn.module.scss"

const SignIn = () => {
  
  return (
    <div>
      <h1>Sign In Form</h1>
      <div id={styles.wrapper}>
        <form id={styles.signin} method="" action="" autocomplete="off">
          <input type="text" id="user" name="user" placeholder="username" />
          <input type="password" id="pass" name="pass" placeholder="password" />
          <button type="submit">&#xf0da;</button>
          <p>
            forgot your password? <a href="#">click here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
