import McLog from "../assets/mcdo-logo.svg";
import Button from "../components/Button.jsx";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center p-10 select-none">
      <div className="w-90 flex flex-col gap-10 animate-fade-up">
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
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <p className="text-gray-400">Password</p>
              <input
                type="password"
                placeholder="********"
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
              onClick={()=>{navigate("/profile")}}
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
              onClick={() => {navigate("/signup")}}
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
