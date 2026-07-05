import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);
  const navigate = useNavigate();
  const toastRef = useRef();

  const loginValidationAndNavigate = () => {
    setLoginStatus(null);

    setTimeout(() => {
      if (email === "admin" && password === "admin") {
        navigate("/profile");
      } else {
        toastRef.current.notify();
      }
    }, 0);
  };

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  const navigateToForgetPassword = () => {
    navigate("/login/forgetpassword");
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loginValidationAndNavigate,
    toastRef,
    navigateToSignUp,
    navigateToForgetPassword,
  };
}
