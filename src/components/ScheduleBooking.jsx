import Button from "./Button";
import VenueCard from "./utils/VenueCard";
import RoomAvailabilityCard from "./utils/RoomAvailabilityCard";
import { MapPin, Calendar, Pencil, ChevronDown, Space } from "lucide-react";
function ScheduleBooking({ onConfirm }) {
  return (
    <div className="flex flex-col justify-center items-center w-full lg:w-full gap-10">
      <div className="flex flex-col justify-center items-center w-full lg:w-full gap-10 border sm:border-0 border-[#E5E7EB] rounded-2xl p-5 sm:p-0 shadow-lg sm:shadow-none">
        <div className="flex-1 w-full justify-start">
          <h1 className="text-[24px] font-bold">Even details</h1>
          <p className="text-[16px]">
            Provide the essential details for your celebration
          </p>
        </div>
        <div className="flex flex-col w-full sm:flex-row justify-center xl:justify-between sm:items-center h-auto p-5 border border-gray-300 rounded-2xl text-[16px] gap-5 sm:gap-15 xl:gap-0">
          <div className="flex sm:flex-col xl:flex-row gap-2">
            <div className="flex gap-1">
              <MapPin />
              <p className="font-bold">Location:</p>
            </div>

            <p>Quezon City, Metro Manila</p>
          </div>

          <div className="flex sm:flex-col xl:flex-row gap-2">
            <div className="flex gap-1">
              <Calendar />
              <p className="font-bold">Date:</p>
            </div>

            <p>July 14, 2026</p>
          </div>
          <Button
            bgColor="bg-white"
            textColor="text-black"
            addBoader={true}
            widthSize="w-auto"
            onClick={() => {}}
          >
            <div className="flex flex-row gap-3 justify-center items-center">
              <Pencil />
              <p>Edit Details</p>
            </div>
          </Button>
        </div>
        <div className="flex flex-col xl:flex-row w-full gap-5">
          <div className="flex flex-col w-full ">
            <p>Select your preferred McDonald's Branch</p>
            <div className="relative flex max-w-full border border-gray-300 rounded-2xl p-2 cursor-pointer">
              <select className="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
                <option>Select McDonald's Branch</option>
                <option>McDonald's Marcos Highway</option>
                <option>McDonald's Another Branch</option>
              </select>
              <span className="flex-1 text-gray-800">
                McDonald's Marcos Highway
              </span>
              <ChevronDown />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <p>How many guest?</p>
            <div className="flex flex-col max-w-full border border-gray-300 rounded-2xl p-2 cursor-pointer">
              <input
                type="number"
                min={0}
                onKeyDown={(e) => e.key === "-" && e.preventDefault()}
                className="outline-none w-full"
              />
            </div>
            <div className="mt-5">
              <p>
                Party packages need a{" "}
                <span className="font-bold">minimum of 30 guests</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="w-full border-gray-300" />
      <div className="flex flex-col w-full gap-10">
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="text-[24px] font-bold">Venue Information</h1>
            <p>
              Choose your preferred McDonald's branch and available time slot
            </p>
          </div>
          <div>
            <VenueCard />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-[24px] font-bold">Room Availability</h1>
          <RoomAvailabilityCard />
        </div>
      </div>
      <div className="flex justify-end items-center w-full gap-5">
        <Button
          bgColor="bg-white"
          textColor="text-black"
          addBoader={true}
          widthSize="w-auto"
          onClick={() => {}}
        >
          <p>Cancel</p>
        </Button>

        <Button
          bgColor="bg-primary-red"
          textColor="text-white"
          addBoader={true}
          widthSize="w-30"
          onClick={() => onConfirm(2)}
        >
          <p>Confirm</p>
        </Button>
      </div>
    </div>
  );
}

export default ScheduleBooking;
