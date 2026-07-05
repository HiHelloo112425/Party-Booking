import { useState, useRef, useEffect } from "react";
import BookingCard from "../utils/BookingCard";

const TABS = ["Upcoming Bookings", "Past Booking", "Cancel Bookings"];

function MyBookings({ setFolder, activeFolder }) {
  const [sliderStyle, setSliderStyle] = useState({});
  const containerRef = useRef(null);
  const btnRefs = useRef([]);

  useEffect(() => {
    const updateSlider = () => {
      const activeIndex = TABS.indexOf(activeFolder);
      const btn = btnRefs.current[activeIndex];
      const container = containerRef.current;
      if (!btn || !container) return;

      const containerRect = container.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();

      setSliderStyle({
        left: btnRect.left - containerRect.left,
        width: btnRect.width,
      });
    };

    updateSlider();

    const observer = new ResizeObserver(updateSlider);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [activeFolder]);

  return (
    <div className="flex flex-col w-full p-3 sm:p-5 gap-5 animate-fade-up">
      <div className="flex flex-col w-full">
        <h1 className="font-bold text-[20px] sm:text-[24px]">My Bookings</h1>
        <p className="text-text-gray text-sm sm:text-base">
          Keep track of your bookings in one place.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative flex items-center bg-gray-100 border border-gray-200 h-10 w-full sm:max-w-fit rounded-xl shadow-lg overflow-x-auto lg:overflow-x-visible scrollbar-hide"
      >
        <div
          className="absolute top-[0.5px] h-[calc(100%-1px)] bg-white border border-gray-200 rounded-[10px] transition-all duration-250 ease-in-out"
          style={{ left: sliderStyle.left, width: sliderStyle.width }}
        />

        {TABS.map((label, i) => (
          <button
            key={label}
            ref={(el) => (btnRefs.current[i] = el)}
            onClick={() => setFolder(label)}
            className={`relative z-10 px-3 sm:px-5 h-full text-sm rounded-[10px] whitespace-nowrap transition-colors duration-200 cursor-pointer shrink-0 sm:flex-none
        ${activeFolder === label ? "text-blue-400 font-medium" : "text-text-gray"}`}
          >
            {label}
          </button>
        ))}
      </div>

      <BookingCard />
    </div>
  );
}

export default MyBookings;
