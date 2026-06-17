import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Carousel({ items = [] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? items.length - 3 : i - 1));
  const next = () => setCurrent((i) => (i >= items.length - 3 ? 0 : i + 1));

  return (
    <div className="relative w-full">
      {/* Overflow container — no px here */}
      <div className="overflow-hidden w-[78vw] mx-auto">
        {/* On the parent flex div, add items-stretch */}
        <div
          className="flex transition-transform duration-500 items-stretch"
          style={{ transform: `translateX(-${current * (100 / 3)}%)` }}
        >
          {items.map((item, i) => (
            <div key={i} className="flex-none w-100 px-2">
              <div className="rounded-2xl overflow-hidden shadow-md flex flex-col h-full">
                {/* Image */}
                <div className="w-full h-70 flex-none">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt={item.title}
                  />
                </div>

                {/* Blue bottom section */}
                <div className="bg-[#29ABE2] px-4 pt-3 pb-5 flex-1">
                  <h2 className="text-white font-bold text-xl mb-2">
                    {item.title}
                  </h2>
                  <p className="text-white text-sm leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev button */}
      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-9 h-9 rounded-full flex items-center justify-center z-10"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next button */}
      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-9 h-9 rounded-full flex items-center justify-center z-10"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {items.slice(0, items.length - 2).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-[#29ABE2]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
