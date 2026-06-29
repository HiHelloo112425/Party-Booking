import McDoRed from "../assets/mcdo-red-box.svg";
import ScheduleBooking from "../components/ScheduleBooking";
import Button from "../components/Button";
import React, { useState } from "react";
const steps = [
  {
    number: 1,
    title: "Schedule",
    desc: "Select your preferred date, time and venue",
  },
  {
    number: 2,
    title: "Party Package",
    desc: "Select your preferred date, time and venue",
  },
  {
    number: 3,
    title: "Your Details",
    desc: "Enter yours and the celebrant's details",
  },
  {
    number: 4,
    title: "Review Booking",
    desc: "Double check the details you've placed",
  },
  { number: 5, title: "Payment", desc: "Select your preferred payment" },
  {
    number: 6,
    title: "Confirmation",
    desc: "Congratulations! You're all set!",
  },
];
function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const step = steps.find((data) => data.number === currentStep);
  const activeScreen = {
    1: <ScheduleBooking onConfirm={(nextStep) => setCurrentStep(nextStep)} />,
  };

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="flex flex-col w-full md:w-75 lg:w-139 bg-linear-to-b from-yellow-300 to-yellow-500 p-8 md:p-15 md:gap-10 lg:gap-15">
        <div className="flex flex-col gap-5 md:gap-10">
          <div>
            <img src={McDoRed} className="lg:w-20" />
          </div>
          <div>
            <h1 className="text-[36px] md:text-[20px] lg:text-[25px] xl:text-[36px] font-bold">
              Let’s make your celebration special
            </h1>
          </div>
          <div>
            <p className="opacity-55">
              We’ll help you pull off a party to remember. Just fill out the
              forms on the right. It’s quick and simple!
            </p>
          </div>

          <div className="flex items-center w-full md:hidden gap-5">
            <div className="flex justify-center items-center rounded-full font-bold bg-amber-50 w-10 h-10">
              <p className="text-[20px]]">{step.number}</p>
            </div>
            <div>
              <h1 className="font-bold text-[20px]">{step.title}</h1>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col gap-1">
          {steps.map((step, index) => {
            const isActive = step.number <= currentStep;
            const isLast = index === steps.length - 1;
            return (
              <div
                key={step.number}
                className={`flex flex-row gap-3 md:gap-5 ${!isActive ? "opacity-55" : ""}`}
              >
                {/* Circle + dots */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-center items-center rounded-full font-bold bg-amber-50 w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20">
                    <p className="text-[20px] md:text-[30px] lg:text-[40px]">
                      {step.number}
                    </p>
                  </div>

                  {!isLast && (
                    <div className="flex flex-col items-center gap-1 md:gap-2">
                      {Array.from({ length: 23 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-1 bg-white rounded-full"
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Label */}
                <div className="flex flex-col mt-3 md:mt-6 gap-1 md:gap-3">
                  <h1 className="font-bold text-[16px] md:text-[20px] lg:text-[24px]">
                    {step.title}
                  </h1>
                  <p className="opacity-55 text-[13px] md:text-[14px] lg:text-[16px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-1 px-5 py-8 sm:px-10 sm:py-5">
        <div className="w-full flex flex-col gap-5">
          <div className="flex w-full justify-end">
            <Button
              bgColor="bg-white"
              textColor="text-black"
              addBoader={true}
              widthSize="w-auto"
              onClick={() => {}}
            >
              Cancel Booking
            </Button>
          </div>
          {activeScreen[currentStep]}
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
