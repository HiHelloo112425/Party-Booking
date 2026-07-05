import McDoRed from "../assets/mcdo-red-box.svg";
import ScheduleBooking from "../components/booking/ScheduleBooking";
import PartyPackageBooking from "../components/booking/PartyPackageBooking";
import YourDetails from "../components/booking/YourDeatails.jsx";
import PreviewBooking from "../components/booking/PreviewBooking.jsx";
import Button from "../components/Button";
import { Check } from "lucide-react";
import { useBooking } from "../hooks/useBooking";
import CustomModal from "../components/utils/modal/CustomModal.jsx";
import { Clock3 } from "lucide-react";
import { useEffect } from "react";

function BookingForm() {
  const {
    open,
    setOpen,
    timeSlots,
    timeSelected,
    setAssignTime,
    selectTime,
    schedule,
    updateSchedule,
    resetSchedule,
    currentStep,
    setCurrentStep,
    where,
    when,
    navigateToHome,
    steps,
    step,
    assignTime,
    availableDateAndTime,
    carouselData,
    foodPackages,
    addOns,
    carouselRef,
  } = useBooking();

  const activeScreen = {
    1: (
      <ScheduleBooking
        onConfirm={(nextStep) => setCurrentStep(nextStep)}
        isAvailable={true}
        schedule={schedule}
        setOpen={setOpen}
        assignTime={assignTime}
        availableDateAndTime={availableDateAndTime}
      />
    ),
    2: (
      <PartyPackageBooking
        confirm={(nextStep) => setCurrentStep(nextStep)}
        carouselData={carouselData}
        foodPackages={foodPackages}
        addOns={addOns}
        carouselRef={carouselRef}
      />
    ),
    3: <YourDetails onConfirm={(nextStep) => setCurrentStep(nextStep)} />,
    4: <PreviewBooking />,
  };

  return (
    <div className="flex flex-col md:flex-row w-full">
      <CustomModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() => setAssignTime(timeSlots[timeSelected])}
        title="Available time slot"
      >
        <div>
          <p>Select your preferred time slot</p>
        </div>
        <div className="flex flex-col gap-2 overflow-y-auto max-h-64">
          {timeSlots.map((timeSlot) => (
            <div
              key={timeSlot.id}
              onClick={() => {
                selectTime(timeSlot.id);
              }}
              className={`flex border ${timeSelected === timeSlot.id ? "border-amber-400 bg-gray-100" : "border-gray-200 bg-white"} items-center text-[16px] p-5 rounded-2xl text-center cursor-pointer hover:bg-gray-100`}
            >
              <div className="flex gap-5 justify-center items-center">
                <Clock3 />
                <div>
                  {timeSlot.start} - {timeSlot.end}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CustomModal>
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
            const isCurrent = step.number === currentStep;
            const isLast = index === steps.length - 1;
            return (
              <div
                key={step.number}
                className={`flex flex-row gap-3 md:gap-5 ${!isActive ? "opacity-55" : ""}`}
              >
                {/* Circle + dots */}
                <div className="flex flex-col gap-1">
                  <div
                    className={`flex justify-center items-center rounded-full font-bold ${isActive && !isCurrent ? "bg-primary-red" : "bg-amber-50"} w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20`}
                  >
                    {isActive && !isCurrent ? (
                      <div>
                        <Check color="white" size={50} />
                      </div>
                    ) : (
                      <p className="text-[20px] md:text-[30px] lg:text-[40px]">
                        {step.number}
                      </p>
                    )}
                  </div>

                  {!isLast && (
                    <div>
                      <div className="flex flex-col items-center gap-1 md:gap-2">
                        {Array.from({ length: 15 }).map((_, i) => (
                          <div
                            key={i}
                            className="w-1 h-1 bg-white rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Label */}
                <div className="flex flex-col mt-3 md:mt-6 gap-1 md:gap-3">
                  <h1 className="font-bold text-[16px] md:text-[20px] lg:text-[24px]">
                    {step.title}
                  </h1>
                  {isActive && !isCurrent ? (
                    <div className="flex flex-col gap-5">
                      {Object.entries(schedule).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex gap-10 opacity-55 text-[13px] md:text-[14px] lg:text-[16px]"
                        >
                          <p className="capitalize">{key} : </p>
                          <p className="font-bold">{value}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="opacity-55 text-[13px] md:text-[14px] lg:text-[16px]">
                      {step.desc}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-1 min-w-0 px-5 py-8 sm:px-10 sm:py-5">
        <div className="w-full min-w-0 flex flex-col gap-5">
          <div className="flex w-full justify-end">
            <Button
              bgColor="bg-white"
              textColor="text-black"
              borderColor="border border-gray-200"
              widthSize="w-auto"
              onClick={() => {
                navigateToHome;
              }}
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
