import Button from "../components/Button";
import McLog from "../assets/mcdo-logo.svg";
import { MoveLeft } from "lucide-react";
import { useForgetPass } from "../hooks/useForgetPass";

function CustomerPayment() {
  const { navigateToLogin } = useForgetPass();

  return (
    <div className="flex h-full w-full justify-center items-center animate-fade-up">
      <div className="flex flex-col items-center w-100 border border-gray-300 rounded-2xl shadow-2xl p-10 gap-5">
        <img src={McLog} />
        <h1 className="font-bold text-[24px]">Forget password?</h1>
        <p className="text-center">
          No worries! Enter your email address below and we'll send you a
          verification code.
        </p>
        <div className="flex flex-col w-full justify-start">
          <p>Email</p>
          <input
            className="outline-none focus:outline-none p-3 border border-gray-400 rounded-sm"
            placeholder="Enter your email"
            type="email"
          />
        </div>
        <Button
          bgColor={"bg-primary-red"}
          textColor={"text-white"}
          widthSize={"w-full"}
        >
          Send Code
        </Button>
        <div className="mt-10">
          <Button onClick={navigateToLogin}>
            <div className="flex flex-row gap-3 justify-center items-center">
              <MoveLeft color="red" />
              <p className="text-primary-red">Back To Login</p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CustomerPayment;
