import React, { useState } from "react";
import Backgrouund from "../assets/LoginBackGrouund.jpg";
import Logo from "../assets/Netflix-Logo.png";
import SignUpScreen from "./SignUpScreen";
import "../screens/LoginScreen.css";
const LoginSCreen = () => {
    const[signIn , setSignIn] = useState(false);

  return (
    <>
        <div className="loginScreen">
          <div className="loginScreen__background">
            <img
              className="loginscreen__logo"
              src={Logo}
              alt="login BackGround"
            />
            <button
            onClick={() => setSignIn(true)}
            className="loginscreen__button">Sign in</button>
            <div className="loginscreen__gradient" />
          </div>
          <div className="loginscreen__body">
            {signIn ? (
                <SignUpScreen/>
            ):
            <>
            <h1>Unlimited films, TV Programmes and more</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="loginscreen__input">
              <form>
                <input type="emaial" placeholder="email Address" />
                <button 
                onClick={()=>setSignIn(true)}
                className="loginscreen__getStarted">GET STARTED</button>
              </form>
            </div>
            </>}
          </div>
        </div>

    </>
  );
};

export default LoginSCreen;
