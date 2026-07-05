import Button from "../../Button.jsx";
import StoreVector from "../../../assets/store-vector.svg";

function NoAvailableBooking({availableDateAndTime}) {

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <hr className="relative w-full border-gray-300 z-0 top-5" />
      <div className="relative flex justify-center items-center border border-[#EDF0F3]/50 w-65 h-65 sm:w-81.25 sm:h-81.25 rounded-full z-10">
        <div className="flex justify-center items-center border border-[#EDF0F3]/70 w-55 h-55 sm:w-68.75 sm:h-68.75 rounded-full">
          <div className="flex justify-center items-center border border-[#EDF0F3] w-45 h-45 sm:w-56.25 sm:h-56.25 rounded-full">
            <div className="flex justify-center items-center bg-linear-to-b from-[#F9FAFB] to-[#EDF0F3] w-35 h-35 sm:w-43.75 sm:h-43.75 rounded-full">
              <img src={StoreVector} className="w-25 sm:w-31.25" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative bottom-15 flex flex-col justify-center items-center z-20">
        <h1 className="text-[24px] font-bold">
          No available slots for this date
        </h1>
        <p>This branch is fully booked for the selected schedule.</p>
        <div className="flex flex-col justify-center items-center mt-5 gap-5">
          <p>Next available options:</p>
          <ul className="space-y-1 mt-[2vw] lg:mt-0">
            {availableDateAndTime.map((item, i) => (
              <li key={i} className="flex justify-center items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0"></span>
                <span>
                  {item.date} — {item.startTime}, {item.endTime}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-5 mt-15">
          <div>
            <Button
              bgColor="bg-white"
              textColor="text-black"
              borderColor="border border-gray-200"
              widthSize="w-auto"
              onClick={() => {}}
            >
              <p>Change Branch</p>
            </Button>
          </div>

          <div>
            <Button
              bgColor="bg-white"
              textColor="text-primary-red"
              borderColor="border border-primary-red"
              widthSize="w-auto"
              onClick={() => {}}
            >
              <p>Select Next Available Date</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoAvailableBooking;
