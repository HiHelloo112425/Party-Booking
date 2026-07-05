import McLog from "../assets/mcdo-logo.svg";
import { Check,X } from "lucide-react";
import Button from "../components/Button";
function ResetPassword() {
  return (
    <div className="flex h-full w-full justify-center items-center animate-fade-up">
      <div className="flex flex-col items-center w-100 border border-gray-300 rounded-2xl shadow-2xl p-10 gap-5">
        <img src={McLog} />
        <h1 className="font-bold text-[24px]">Reset Password</h1>
        <p className="text-center">
          Choose a strong password to secure your account. We recommend a mix of
          letters, number, and character
        </p>
        <div className="flex flex-col w-full justify-start">
          <p>Password</p>
          <input
            className="outline-none focus:outline-none p-3 border border-gray-400 rounded-sm"
            placeholder="Enter new password"
            type="email"
          />
        </div>
               <div className="flex flex-col w-full justify-start">
          <p>Re-enter Password</p>
          <input
            className="outline-none focus:outline-none p-3 border border-gray-400 rounded-sm"
            placeholder="Re-enter new password"
            type="email"
          />
        </div>
           <div>
            <div className="flex flex-row justify-start items-center gap-2">
              <div className="rounded-full bg-secondary-gray p-1">
                <Check size={15} color="#ffffff" strokeWidth={4} />
              </div>
              <p className="pt-1 text-text-gray">Minimum of 6 characters</p>
            </div>
            <div className="flex flex-row justify-start items-center gap-2">
              <div className="rounded-full bg-green-400 p-1">
                <Check size={15} color="#ffffff" strokeWidth={4} />
              </div>
              <p className="pt-1 text-green-400">At least one number</p>
            </div>
            <div className="flex flex-row justify-start items-center gap-2">
              <div className="rounded-full bg-primary-red p-1">
                <X size={15} color="#ffffff" strokeWidth={4} />
              </div>
              <p className="pt-1 text-primary-red">
                At least one upper and lower case
              </p>
            </div>
          </div>
            <Button
          bgColor={"bg-primary-red"}
          textColor={"text-white"}
          widthSize={"w-full"}
        >
          Reset Password
        </Button>
      </div>
    </div>
  );
}

export default ResetPassword;
