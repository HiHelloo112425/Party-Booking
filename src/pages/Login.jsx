import McLog from "../assets/mcdo-logo.svg";
import Button from "../components/Button.jsx";
import ToastMessage from "../components/utils/ToastMessage.jsx";
import ForgetPassword from "../pages/ForgetPassword.jsx";
import { useLogin } from "../hooks/useLogin.js";

function LoginPage() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loginValidationAndNavigate,
    toastRef,
    navigateToSignUp,
    navigateToForgetPassword,
  } = useLogin();

  return (
    <div className="flex flex-col justify-center pt-10 items-center select-none">
      <ToastMessage
        ref={toastRef}
        toastStatus={"error"}
        toastMessage={"Invalid Email and Password"}
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
            <Button onClick={navigateToForgetPassword}>
              <p className="text-[14px] font-bold text-primary-red cursor-pointer">
                Forget password
              </p>
            </Button>
          </div>
          <div>
            <Button
              bgColor="bg-primary-red"
              textColor="text-white"
              borderColor="border border-gray-200"
              widthSize="w-full"
              onClick={loginValidationAndNavigate}
            >
              Log in
            </Button>
          </div>
        </div>
        <div>
          <p>
            Don't have an account?
            <span
              className="font-bold text-primary-yellow cursor-pointer"
              onClick={navigateToSignUp}
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
