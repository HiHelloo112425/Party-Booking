import React, { useState } from "react";
import { MapPin, CalendarDays } from "lucide-react";
import Button from "../Button";
import Confetti from "../../assets/confetti.svg";
import Mlogo from "../../assets/m-logo.svg";
import FamilyImg from "../../assets/family.svg";
import McCelebration from "../../assets/mcdo-celebration.svg";
import BaloonLeft from "../../assets/balloons-left.svg";
import { formatDate } from "../utils/helper/formatDate";

function Booking({ bookPartyClick, updateSchedule, bookingSchedule }) {
  return (
    <div className="w-full h-[150vw] md:h-[70vw] lg:h-[40vw] overflow-hidden bg-light-gray">
      <div className="relative h-[150vw] md:h-[70vw] lg:h-[40vw]">
        <img
          src={Confetti}
          className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
          alt=""
        />

        <div className="lg:hidden absolute z-10 block top-0 left-0   w-1/2 h-full select-none pointer-events-none">
          <div className="relative w-full h-full overflow-visible">
            <img
              src={BaloonLeft}
              className="absolute top-40 left-[10%] w-[30vw] max-w-none h-auto z-10 animate-float"
              alt=""
            />

            <img
              src={BaloonLeft}
              className="absolute top-40 left-[65vw] w-[30vw] max-w-none h-auto z-10 -scale-x-100 animate-float"
              alt=""
            />
          </div>
        </div>

        <div className="hidden absolute z-10 lg:block bottom-0 right-0 w-1/2 h-full select-none pointer-events-none">
          <div className="relative w-full h-full overflow-visible">
            <img
              src={Mlogo}
              className="absolute top-15 right-0 w-[50vw] max-w-none h-auto z-10 origin-bottom-right"
            />

            <img
              src={McCelebration}
              className="absolute top-11 right-[14vw] w-[20vw] max-w-none h-auto z-10"
              alt=""
            />

            <img
              src={BaloonLeft}
              className="absolute top-15 right-[70%] w-[14vw] max-w-none h-auto z-10 animate-float"
              alt=""
            />

            <img
              src={BaloonLeft}
              className="absolute top-5 right-[5%] w-[12vw] max-w-none h-auto z-10 -scale-x-100 animate-float"
              alt=""
            />

            <div className="absolute z-20 bottom-0">
              <img
                src={FamilyImg}
                className="ml-[14vw] h-[30.5vw] w-auto origin-bottom-left"
              />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-30 pointer-events-auto lg:w-1/2">
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
                <div className="flex justify-center items-center  h-full">
                  <MapPin color="#48514f" className="mr-2" size={16} />
                </div>

                <div className="flex justify-center items-center h-full pt-1">
                  <input
                    value={bookingSchedule.where}
                    onChange={(e) => updateSchedule("where", e.target.value)}
                    type="text"
                    placeholder="Where?"
                    className="focus:outline-none w-full lg:w-[8vw] text-[14px] lg:text-[1vw] leading-none"
                  />
                </div>
              </div>
              {/* WHEN */}
              <div className="flex items-center border border-gray-200 rounded-sm bg-white h-full p-3">
                <div className="flex justify-center items-center  h-full">
                  <CalendarDays color="#48514f" className="mr-2" size={16} />
                </div>
                <div className="flex justify-center items-center h-full pt-1">
                  <input
                    value={formatDate(bookingSchedule.when)}
                    onChange={(e) => updateSchedule("when", e.target.value)}
                    type="text"
                    placeholder="When?"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => !e.target.value && (e.target.type = "text")}
                    className="focus:outline-none w-full lg:w-[8vw] h-full text-[14px] lg:text-[1vw]"
                  />
                </div>
              </div>
              {/* BUTTON */}
              <div className="shrink-0 h-full flex justify-center">
                <Button
                  bgColor="bg-primary-red"
                  textColor="text-white"
                  borderColor={false}
                  className="h-full px-4 lg:px-[1.5vw] text-[14px] lg:text-[1vw] whitespace-nowrap"
                  onClick={bookPartyClick}
                >
                  Book a party now!
                </Button>
              </div>
            </div>

            {/* BOTTOM TEXT */}
            <div className="mt-auto pb-10 text-[12px] lg:text-[0.7vw] select-none">
              <p>
                Party packages need a minimum of <b>30 guests</b> | A
                <b>Php 2,500 down payment</b> is required to secure booking at
                selected venue
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
