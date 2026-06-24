import ProfileCard from "../components/ProfileCard";
import ViewProfile from "../components/ViewProfile";
import MyBookings from "../components/MyBookings";
import Button from "../components/Button";
import McDoLogo from "../assets/mcdo-logo.svg";
import { Mail, Phone } from "lucide-react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Profile() {
  const [process, setProcess] = useState("View Profile");
  const [folder, setFolder] = useState("Upcoming Bookings");
  const navigate = useNavigate();

  function handleBack() {
    navigate("/profile");
  }

  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handleBack);
    return () => window.removeEventListener("popstate", handleBack);
  });

  return (
    <div className="flex flex-col min-h-screen">
      <header className="font-bold text-gray-700 bg-white flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-[3vw] py-4 lg:py-[1vw] w-full text-[14px] lg:text-[1vw]">
        {/* DESKTOP NAV */}
        <div className="hidden sm:flex items-center gap-4">
          <img src={McDoLogo} className="w-10 sm:w-12 lg:w-[3vw]" />
          <div className="flex items-center gap-x-6 md:gap-x-10 lg:gap-x-[2vw]">
            <button>HOME</button>
            <button className="flex items-center gap-1">
              THEMES <span>▾</span>
            </button>
            <button className="flex items-center gap-1">
              PACKAGES <span>▾</span>
            </button>
            <button className="flex items-center gap-1">
              STORES <span>▾</span>
            </button>
            <button>FAQ</button>
          </div>
        </div>

        {/* DESKTOP BUTTONS */}
        <div className="hidden sm:flex items-center gap-2">
          <Button
            bgColor="bg-white"
            textColor="text-primary-red"
            addBoader={true}
            onClick={() => navigate("/login")}
          >
            Logout
          </Button>
        </div>

        {/* MOBILE NAV */}
        <div className="sm:hidden relative flex items-center justify-between w-full">
          <button className="p-2">
            <Menu />
          </button>
          <img
            src={McDoLogo}
            className="w-10 absolute left-1/2 -translate-x-1/2"
          />
          <div className="w-8" />
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-col lg:flex-row w-full items-start py-6 px-4 sm:px-6 lg:px-10 gap-6 lg:gap-10 flex-1 overflow-x-hidden">
        <div className="w-full lg:w-auto flex flex-col select-none">
          <div className="flex flex-col gap-5">
            <h1 className="text-[24px] font-bold">My Account</h1>
            <ProfileCard setProcess={setProcess} activeProcess={process} />
          </div>
        </div>
        <div className="w-full min-h-0">
          {process === "View Profile" && <ViewProfile />}
          {process === "My Booking" && (
            <MyBookings setFolder={setFolder} activeFolder={folder} />
          )}
        </div>
      </div>

      <footer className="mt-auto">
        <div className="flex flex-col w-full bg-dark-charcoal-gray text-white">
          <div className="md:hidden w-full justify-center py-5 px-5">
            <p>
              <span className="font-bold">McDonald's</span> Party Booking
              Philippines
            </p>
            <p>Powered by TechPryme</p>
            <p>Questions? Contact us:</p>
            <div className="flex">
              <Mail className="shrink-0" />
              <p className="ms-2">
                <span className="font-bold">Email:</span>
              </p>
              <a href="mailto:partybooking@mcdonalds.com.ph" className="ms-1">
                partybooking@mcdonalds.com.ph
              </a>
            </div>
            <div className="col-start-2">
              <div className="flex flex-row">
                <Phone className="shrink-0" />
                <p className="ms-2">
                  <span className="font-bold">Phone:</span>
                </p>
                (02) 8-McDo-8888
              </div>
            </div>
          </div>

          <div className="hidden md:flex w-full justify-center">
            <div className="grid grid-cols-2 grid-row-3 lg:gap-x-90 xl:gap-x-100 2xl:gap-x-150 gap-y-2 text-left px-10 py-5">
              <p>
                <span className="font-bold">McDonald's</span> Party Booking
                Philippines
              </p>
              <p>Questions? Contact us:</p>
              <p>Powered by TechPryme</p>
              <div className="flex">
                <Mail className="shrink-0" />
                <p className="ms-2">
                  <span className="font-bold">Email:</span>
                </p>
                <a href="mailto:partybooking@mcdonalds.com.ph" className="ms-1">
                  partybooking@mcdonalds.com.ph
                </a>
              </div>
              <div className="col-start-2">
                <div className="flex flex-row">
                  <Phone className="shrink-0" />
                  <p className="ms-2">
                    <span className="font-bold">Phone:</span>
                  </p>
                  (02) 8-McDo-8888
                </div>
              </div>
            </div>
          </div>
          <hr className="mx-30 border-[#6A6A6A33]" />
          <div className="flex justify-center items-center py-5">
            © {new Date().getFullYear()} McDonald's Philippines. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Profile;