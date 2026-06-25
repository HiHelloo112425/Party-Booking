import { Menu } from "lucide-react";
import McDoLogo from "../assets/mcdo-logo.svg";
import Button from "../components/Button.jsx";
import Booking from "../components/Booking.jsx";
import Description from "../components/Description.jsx";
import ThemePromo from "../components/ThemePromo.jsx";
import PartyBookingInfo from "../components/PartyBookingInfo.jsx";
import { Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 select-none">
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
          <Button
            bgColor="bg-white"
            textColor="text-black"
            addBoader={true}
            onClick={() => navigate("/login")}
          >
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
        <div className="bg-white">
          <Booking bookPartyClick={() => navigate("/home/booking")} />
          <Description />
          <ThemePromo />
          <PartyBookingInfo />
        </div>
      </div>

      <footer>
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
            <div className="grid grid-cols-2 grid-row-3 lg:gap-x-90 xl:gap-x-100 2xl:gap-x-150 gap-y-2  text-left px-10 py-5">
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
          <div className="flex md:justify-center w-full py-5">
            © {new Date().getFullYear()} McDonald's Philippines. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
