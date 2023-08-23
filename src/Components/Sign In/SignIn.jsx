import React, { useRef } from "react";
import "./SignIn.scss";

import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const signInHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
      emailRef.current.value = "";
      passwordRef.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="sign-in">
        <h2>Sign In</h2>
        <form onSubmit={signInHandler}>
          <input ref={emailRef} type="email" placeholder="Username" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
