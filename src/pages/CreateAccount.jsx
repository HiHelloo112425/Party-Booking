import McLog from "../assets/mcdo-logo.svg";
import Button from "../components/Button.jsx";
import { Check, X } from "lucide-react";
import { useCreateAccount } from "../hooks/useCreateAccount.js";

function CreateAccount() {
  const { navigetToLogin } = useCreateAccount();
  return (
    <div className="flex flex-col justify-center items-center p-5 select-none">
      <div className="w-90 flex flex-col gap-5 animate-fade-up">
        <div className="flex flex-col justify-center items-center gap-3">
          <img src={McLog} className="w-[78.46px]" />
          <h1 className="font-bold text-[30px]">Sign up</h1>
          <p className="text-gray-400">
            Create your account. All fields are required.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <p>First Name</p>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full h-11 px-4 py-3 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <p>Last Name</p>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full h-11 px-4 py-3 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <p>Email</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-11 px-4 py-3 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type="password"
              placeholder="Create password"
              className="w-full h-11 px-4 py-3 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
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
          <div>
            <p>Confirm Password</p>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full h-11 px-4 py-3 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <Button
            bgColor="bg-primary-red"
            textColor="text-white"
            borderColor="border border-gray-200"
            widthSize="w-full"
            onClick={navigetToLogin}
          >
            Sign up
          </Button>
          <div className="text-text-gray text-center">
            <p>By signing in, you agree with </p>
            <p>
              our
              <span className="text-[#1E87DB] underline cursor-pointer">
                Terms and Conditions
              </span>
              and
              <span className="text-[#1E87DB] underline cursor-pointer">
                Privacy Policy
              </span>
              .
            </p>
            <p className="pt-5 text-black">
              Already have an account?
              <span
                className="text-primary-yellow cursor-pointer font-bold"
                onClick={navigetToLogin}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
