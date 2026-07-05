import { Users, Clock3 } from "lucide-react";
import Button from "../../Button.jsx";
import React, { useState } from "react";
import Room from "../../../assets/room.png";
function RoomAvailabilityCard({ setOpen, assignTime}) {

  return (
    <div className="w-full">
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
                  borderColor="border border-gray-200"
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
