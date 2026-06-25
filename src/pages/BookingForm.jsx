import McDoRed from "../assets/mcdo-red-box.svg";
import ScheduleBooking from "../components/ScheduleBooking";
const steps = [1, 2, 3, 4, 5, 6];
function BookingForm() {
  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col md:w-139 bg-linear-to-b from-yellow-300 to-yellow-500 p-15 gap-15">
        <div>
          <img src={McDoRed} />
        </div>
        <div>
          <h1 className="text-[36px] font-bold">
            Let’s make your celebration special
          </h1>
        </div>
        <div>
          <p className="opacity-55">
            We’ll help you pull off a party to remember. Just fill out the forms
            on the right. It’s quick and simple!
          </p>
        </div>
        <div className="flex flex-col gap-1 ">
          {/* 1 Schedule */}
          <div className="flex flex-row gap-5">
            <div className="flex flex-col gap-1">
              <div className="flex justify-center items-center rounded-full font-bold bg-amber-50 w-20 h-20 pt-2">
                <p className="text-[40px]">1</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                {Array.from({ length: 23 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                ))}
              </div>
            </div>
            <div className="flex flex-col mt-6 gap-3">
              <h1 className="font-bold text-[24px]">Schedule</h1>
              <p className="opacity-55 text-[16px]">
                Select your preferred date, time and venue
              </p>
            </div>
          </div>
          {/* 2 Party Package */}
          <div className="flex flex-row gap-5 opacity-55">
            <div className="flex flex-col gap-1">
              <div className="flex justify-center items-center rounded-full font-bold bg-amber-50 w-20 h-20 pt-2">
                <p className="text-[40px]">2</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                {Array.from({ length: 23 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                ))}
              </div>
            </div>
            <div className="flex flex-col mt-6 gap-3">
              <h1 className="font-bold text-[24px]">Party Package</h1>
              <p className="opacity-55 text-[16px]">
                Select your preferred date, time and venue
              </p>
            </div>
          </div>
          {/* 3 Your Detail */}
          <div className="flex flex-row gap-5 opacity-55">
            <div className="flex flex-col gap-1">
              <div className="flex justify-center items-center rounded-full font-bold bg-amber-50 w-20 h-20 pt-2">
                <p className="text-[40px]">3</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                {Array.from({ length: 23 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                ))}
              </div>
            </div>
            <div className="flex flex-col mt-6 gap-3">
              <h1 className="font-bold text-[24px]">Your Details</h1>
              <p className="opacity-55 text-[16px]">
                Enter yours and the celebrant’s details
              </p>
            </div>
          </div>
          {/* 4 Review Booking */}
          <div className="flex flex-row gap-5 opacity-55">
            <div className="flex flex-col gap-1">
              <div className="flex justify-center items-center rounded-full font-bold bg-amber-50 w-20 h-20 pt-2">
                <p className="text-[40px]">4</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                {Array.from({ length: 23 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                ))}
              </div>
            </div>
            <div className="flex flex-col mt-6 gap-3">
              <h1 className="font-bold text-[24px]">Review Booking</h1>
              <p className="opacity-55 text-[16px]">
                Double check the details you’ve placed
              </p>
            </div>
          </div>

          {/* 5 Payment */}
          <div className="flex flex-row gap-5 opacity-55">
            <div className="flex flex-col gap-1">
              <div className="flex justify-center items-center rounded-full font-bold bg-amber-50 w-20 h-20 pt-2">
                <p className="text-[40px]">5</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                {Array.from({ length: 23 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                ))}
              </div>
            </div>
            <div className="flex flex-col mt-6 gap-3">
              <h1 className="font-bold text-[24px]">Payment</h1>
              <p className="opacity-55 text-[16px]">
                Select your preferred payment
              </p>
            </div>
          </div>
          {/* 6 Confirmation */}
          <div className="flex flex-row gap-5 opacity-55">
            <div className="flex flex-col gap-1">
              <div className="flex justify-center items-center rounded-full font-bold bg-amber-50 w-20 h-20 pt-2">
                <p className="text-[40px]">6</p>
              </div>
            </div>
            <div className="flex flex-col mt-6 gap-3">
              <h1 className="font-bold text-[24px]">Confirmation</h1>
              <p className="opacity-55 text-[16px]">
                Congratulations! You're all set!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 px-15 py-10 ">
        <ScheduleBooking />
      </div>
    </div>
  );
}

export default BookingForm;
