import Button from "./Button";
import VenueCard from "./utils/VenueCard";
import RoomAvailabilityCard from "./utils/RoomAvailabilityCard";
import { MapPin, Calendar, Pencil, ChevronDown, Space } from "lucide-react";
function ScheduleBooking() {
  return (
    <div className="flex flex-col h-auto w-full gap-15">
      <div className="flex justify-end">
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

      <div className="flex flex-col w-full gap-10">
        <div>
          <h1 className="text-[24px] font-bold">Even details</h1>
          <p className="text-[16px]">
            Provide the essential details for your celebration
          </p>
        </div>

        <div className="flex justify-center items-center gap-20 h-auto p-5 border border-gray-300 rounded-2xl text-[16px]">
          <div className="flex gap-4 items-center justify-center">
            <MapPin />
            <p className="font-bold">
              Location:{" "}
              <span className="font-normal">Quezon City, Metro Manila</span>
            </p>
          </div>

          <div className="flex gap-4 items-center justify-center">
            <Calendar />
            <p className="font-bold">
              Date: <span className="font-normal">July 14, 2026</span>
            </p>
          </div>
          <Button
            bgColor="bg-white"
            textColor="text-black"
            addBoader={true}
            widthSize="w-auto"
            onClick={() => {}}
          >
            <div className="flex flex-row gap-3">
              <Pencil />
              <p>Edit Details</p>
            </div>
          </Button>
        </div>

        <div className="flex w-full gap-5">
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
        <hr className="border-[#6A6A6A33] mt-15" />
        <div className="flex flex-col gap-25">
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

          <div className="flex flex-col gap-10">
            <h1 className="text-[24px] font-bold">Room Availability</h1>
            <RoomAvailabilityCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleBooking;
