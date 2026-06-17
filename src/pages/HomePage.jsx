import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import McDoLogo from "../assets/mcdo-logo.png";
import Button from "../components/Button.jsx";
import Booking from "../components/Booking.jsx";
import Description from "../components/Description.jsx";
import ThemePromo from "../components/ThemePromo.jsx"

function HomePage() {
  const [screen, setScreen] = useState("mobile");
  const [screenSizeWidth, setScreenSizeWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSizeWidth(width);
      if (width >= 1536) setScreen("2xl");
      else if (width >= 1280) setScreen("xl");
      else if (width >= 1024) setScreen("lg");
      else if (width >= 768) setScreen("md");
      else if (width >= 640) setScreen("sm");
      else setScreen("xs");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
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
          <Button bgColor="bg-white" textColor="text-black" addBoader={true}>
            Log in
          </Button>
          <Button
            bgColor="bg-primary-red"
            textColor="text-white"
            addBoader={false}
          >
            Sign up
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

      <div className="flex flex-col w-full">
        <Booking />
        <Description />
        <ThemePromo />

        {/* DEBUG — tanggalin na kapag tapos na */}
        <div className="mb-auto">
          <p>
            Screen :: {screen} width :: {screenSizeWidth}
          </p>
        </div>
        {/* <div className="w-full h-100"></div> */}
      </div>
    </div>
  );
}

export default HomePage;
