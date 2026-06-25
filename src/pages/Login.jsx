import McLog from "../assets/mcdo-logo.svg";
import Button from "../components/Button.jsx";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ToastMessage from "../components/utils/ToastMessage.jsx";

function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);

  function loginValidation() {
    setLoginStatus(null);

    setTimeout(() => {
      if (email === "admin" && password === "admin") {
        setLoginStatus("Login Success");
      } else {
        setLoginStatus("Invalid Email and Password");
      }
    }, 0);
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    loginStatus,
    loginValidation,
  };
}

function LoginPage() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loginStatus,
    loginValidation,
  } = useLogin();
  const navigate = useNavigate();
  const toastRef = useRef();

  useEffect(() => {
    if (loginStatus != null) {
      if (loginStatus === "Login Success") {
        setTimeout(() => {
          navigate("/profile");
        }, 0);
      } else {
        toastRef.current.notify();
      }
    }
  }, [loginStatus, navigate]);

  return (
    <div className="flex flex-col justify-center pt-10 items-center select-none">
      <ToastMessage
        ref={toastRef}
        toastStatus={"error"}
        toastMessage={loginStatus}
      />

      <div className="w-90 flex flex-col gap-10 animate-fade-up border border-gray-200 px-5 py-10 rounded-2xl shadow-lg">
        <div className="flex flex-col justify-center items-center gap-10">
          <img src={McLog} className="w-[78.46px]" />
          <h1 className="font-bold text-[30px]">Log in to your account</h1>
        </div>
        <div>
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-gray-400">Email</p>
              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <p className="text-gray-400">Password</p>
              <input
                type="password"
                value={password}
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-[14px] font-bold text-primary-red cursor-pointer">
              Forget password
            </p>
          </div>
          <div>
            <Button
              bgColor="bg-primary-red"
              textColor="text-white"
              addBoader={true}
              widthSize="w-full"
              onClick={() => {
                loginValidation();
              }}
            >
              Log in
            </Button>
          </div>
        </div>
        <div>
          <p>
            Don't have an account?{" "}
            <span
              className="font-bold text-primary-yellow cursor-pointer"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
