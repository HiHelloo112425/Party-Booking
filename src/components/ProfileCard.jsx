import Profile from "../assets/profile.jpg";
import { ChevronRight } from "lucide-react";

function ProfileCard() {
  return (
    <div className="flex flex-col border border-gray-200 rounded-2xl w-full max-w-sm shadow-xl p-5">
      <div className="flex flex-col justify-center items-center w-full">
        {/* Avatar + Info */}
        <div className="w-full flex flex-row justify-center gap-5">
          <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 border border-gray-200 rounded-full flex justify-center items-center shrink-0">
            <div className="w-14 h-14 sm:w-22 sm:h-22 md:w-25 md:h-25 rounded-full overflow-hidden">
              <img src={Profile} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col justify-center min-w-0">
            <h1 className="text-gray-400 text-xs sm:text-sm truncate">
              Welcome Back!
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold truncate">
              Bossing
            </p>
            <p className="text-gray-400 text-xs sm:text-sm truncate">
              boss.bossing@gmail.com
            </p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="w-full flex flex-col items-start mt-6 sm:mt-10 font-bold cursor-pointer">
          {[
            { label: "View Profile" },
            { label: "My Booking" },
            { label: "Guest Management" },
          ].map(({ label }) => (
            <button
              key={label}
              className="flex justify-between items-center w-full h-11 sm:h-13 px-4 sm:px-5 rounded-2xl hover:bg-gray-100 transition-colors text-sm sm:text-base cursor-pointer"
            >
              {label}
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            </button>
          ))}
        </div>
        <div className="mt-10 w-full text-text-gray">
          <p>Member since 09/09/25</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
