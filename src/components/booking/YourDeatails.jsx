import BasicInfo from "./your-detail/BasicInfo";
import { useState } from "react";
import { Plus, Trash } from "lucide-react";
import Button from "../Button";
function YourDetails({ onConfirm }) {
  const [celebrantsQty, setCelebrantsQty] = useState(1);

  return (
    <div className="flex flex-col w-full animate-fade-up gap-15">
      <div className="flex flex-col w-full">
        <h1 className="font-bold text-[24px]">My Information</h1>
        <p>
          Please provide your essential details to proceed with your booking.
        </p>
      </div>
      <div>
        <BasicInfo />
      </div>
      <hr className="w-full border-gray-300" />
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full gap-10">
          {Array.from({ length: celebrantsQty }).map((_, index) => {
            return (
              <div>
                <div className="flex flex-row justify-between">
                  <h1 className="font-bold text-[24px]">
                    Celebrant’s Information
                  </h1>
                  <div className={`${index === 0 ? "hidden" : "block"}`}>
                    <Button
                      onClick={() => {
                        setCelebrantsQty((prev) => prev - 1);
                      }}
                    >
                      <Trash color="red" />
                    </Button>
                  </div>
                </div>
                <p>
                  Provide the celebrant’s information to help us prepare for the
                  celebration.
                </p>
                <BasicInfo />
              </div>
            );
          })}
        </div>
      </div>

      <Button
        onClick={() => {
          setCelebrantsQty((prev) => prev + 1);
        }}
      >
        <div className="flex flex-row w-full gap-3 justify-start items-cente">
          <Plus color="red" />
          <p className="pt-1 font-bold text-primary-red">
            Add Another Celebrant
          </p>
        </div>
      </Button>
      <hr className="w-full border-gray-300" />
      <div>
        <h1 className="font-bold text-[24px]">Additional Request</h1>
      </div>
      <div>
        <p>Remarks (Optional)</p>
        <textarea
          placeholder="Type in any questions or concerns that you may have..."
          rows={4}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:border-gray-300"
        />
      </div>
      <hr className="w-full border-gray-300" />
      <div className="flex flex-col gap-3">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={""}
            onChange={(e) => {}}
            className="w-5 h-5 mt-0.5 rounded-md border-gray-300 accent-black cursor-pointer"
          />
          <span className="text-gray-800">
            I confirm that all the information I provided above is accurate.
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={""}
            onChange={(e) => {}}
            className="w-5 h-5 mt-0.5 rounded-md border-gray-300 accent-black cursor-pointer"
          />
          <span className="text-gray-800">
            By continuing, you agree{" "}
            <a
              href="/terms"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Privacy Policy
            </a>
            .
          </span>
        </label>
      </div>
      <div className="flex justify-end items-center w-full gap-5">
        <Button
          bgColor="bg-white"
          textColor="text-black"
          borderColor="border border-gray-200"
          widthSize="w-auto"
          onClick={() => {}}
        >
          <p>Cancel</p>
        </Button>

        <Button
          bgColor="bg-primary-red"
          textColor="text-white"
          borderColor="border border-gray-200"
          widthSize="w-30"
          onClick={() => {
            onConfirm(4);
          }}
        >
          <p>Confirm</p>
        </Button>
      </div>

      
    </div>
  );
}

export default YourDetails;
