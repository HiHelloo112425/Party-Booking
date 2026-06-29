import { Users, Clock3 } from "lucide-react";
import Button from "../Button";
import React, { useState } from "react";
import CustomModal from "../modal/CustomModal";
import Room from "../../assets/room.png";

const timeSlots = [
  { id: 0, start: "8:00 AM", end: "10:00 AM" },
  { id: 1, start: "11:00 AM", end: "1:00 PM" },
  { id: 2, start: "2:00 PM", end: "4:00 PM" },
  { id: 3, start: "5:00 PM", end: "7:00 PM" },
  { id: 4, start: "8:00 PM", end: "10:00 PM" },
  { id: 5, start: "8:00 PM", end: "10:00 PM" },
  { id: 6, start: "8:00 PM", end: "10:00 PM" },
  { id: 7, start: "8:00 PM", end: "10:00 PM" },
];

function RoomAvailabilityCard() {
  const [open, setOpen] = useState(false);
  const [timeSelected, selectTime] = useState();
  const [assignTime, setAssignTime] = useState(null);

  return (
    <div className="w-full">
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
      <div className="flex flex-row w-full border border-gray-400 rounded-2xl overflow-hidden shadow-2xl">
        <div className="hidden sm:block w-4 self-stretch bg-primary-red rounded-s-2xl" />
        <div className="flex flex-col-reverse xl:flex-row w-full p-5 justify-between items-center gap-10">
          <div className="flex flex-col w-full">
            <div>
              <h1 className="text-[24px] font-bold">Party Room A</h1>
            </div>
            <div className="flex flex-col gap-15 xl:gap-20">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-5">
                  <div className="flex gap-2">
                    <Users />
                    <p className="text-[16px] pt-1">Capacity:</p>
                  </div>
                  <div className="text-[16px] pt-1 font-bold">80 people</div>
                </div>
                <div className={`flex justify-normal  gap-5`}>
                  <div className="flex gap-2">
                    <Clock3 />
                    <p className="text-[16px] pt-1">Selected Time</p>
                  </div>
                  {assignTime != null ? (
                    <div className="flex justify-center text-[#067647] border border-green-400 items-center text-[10px] bg-[#ABEFC6] p-2 rounded-2xl text-center">
                      {assignTime.start} - {assignTime.end}
                    </div>
                  ) : (
                    <div>
                      <p>--:-- - --:--</p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <Button
                  bgColor="bg-white"
                  textColor="text-black"
                  addBoader={true}
                  widthSize="w-auto"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Select a Time Slot
                </Button>
              </div>
            </div>
          </div>
          <img src={Room} className="w-100 xl:w-80" />
        </div>
      </div>
    </div>
  );
}

export default RoomAvailabilityCard;
