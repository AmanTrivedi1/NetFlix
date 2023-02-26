import React, { useRef } from "react";
import { auth } from "../firebase";
import "../screens/SignUpScreen.css";
const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authuser) => {
        console.log(authuser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const singIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authuser)=>{
      console.log(authuser);
    }).catch((error)=>{
      alert(error.message)
    })
  };
  return (
    <>
      <div className="signupScreen">
        <form>
          <h1>Sign In</h1>
          <input ref={emailRef} placeholder="Email" type="email" />
          <input ref={passwordRef} placeholder="password" type="password" />
          <button type="submit" onClick={singIn}>
            Sign In
          </button>
          <h4>
            <button className="signupscreen__link" onClick={register}>
              Sing Up 
            </button>
          </h4>
        </form>
        <span className="information">New User Putt details and tap on signup</span>
      </div>
    </>
  );
};

export default SignUpScreen;
