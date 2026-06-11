import React from "react";
import { MapPin, CalendarDays } from "lucide-react";
import Button from "./Button";
import BookingBackground from "../background/BookingBackground.jsx";

function Booking() {
  return (
    <BookingBackground>
      <div className="flex flex-col justify-start items-center mt-5 lg:mt-10 lg:items-start lg:ml-35 h-full">
        
        {/* HEADING */}
        <div className="font-bold text-center lg:text-start">
          <h1 className="text-[45px] md:text-[50px] lg:text-[4.5vw] select-none leading-tight">
            Celebrate your
          </h1>
          <h2 className="text-[45px] md:text-[55px] lg:text-[5vw] text-primary-red select-none leading-tight">
            Birthday Party
          </h2>
          <h1 className="text-[40px] md:text-[50px] lg:text-[4.5vw] select-none leading-tight">
            at McDonald's
          </h1>
        </div>

        {/* DESCRIPTION */}
        <div className="md:mt-5 lg:mt-[2vw]">
          <p className="text-[14px] lg:text-[1.1vw]">
            Hassle-free planning, endless smiles. We'll guide <br />
            you through simple steps to their dream birthday!
          </p>
        </div>

        {/* INPUTS + BUTTON */}
        <div className="flex flex-col gap-5 w-60 lg:flex-row justify-center lg:justify-start items-stretch mt-20 lg:mt-[2vw] lg:w-auto h-12 lg:h-[3.5vw] lg:gap-0">
          {/* WHERE */}
          <div className="flex items-center border border-gray-200 rounded-sm bg-white h-full p-3">
            <MapPin color="#48514f" className="mr-2" size={16} />
            <input
              type="text"
              placeholder="Where?"
              className="focus:outline-none w-full lg:w-[8vw] h-full text-[14px] lg:text-[1vw]"
            />
          </div>
          {/* WHEN */}
          <div className="flex items-center border border-gray-200 rounded-sm bg-white h-full p-3">
            <CalendarDays color="#48514f" className="mr-2" size={16} />
            <input
              type="text"
              placeholder="When?"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => !e.target.value && (e.target.type = "text")}
              className="focus:outline-none w-full lg:w-[8vw] h-full text-[14px] lg:text-[1vw]"
            />
          </div>
          {/* BUTTON */}
          <div className="shrink-0 h-full flex justify-center">
            <Button
              bgColor="bg-primary-red"
              textColor="text-white"
              addBoader={false}
              className="h-full px-4 lg:px-[1.5vw] text-[14px] lg:text-[1vw] whitespace-nowrap"
            >
              Book a party now!
            </Button>
          </div>
        </div>

        {/* BOTTOM TEXT */}
        <div className="mt-auto pb-5 text-[12px] lg:text-[0.8vw] select-none">
          <p>
            Party packages need a minimum of <b>30 guests</b> | A{" "}
            <b>Php 2,500 down payment</b> is required to secure booking at
            selected venue
          </p>
        </div>

      </div>
    </BookingBackground>
  );
}

export default Booking;