import Carousel from "../../utils/Carousel.jsx";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


function PartyTheme({ carouselData }) {
  const carouselRef = useRef(null);
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="font-bold text-[24px]">Choose a Party Theme</h1>
          <p>Pick from our selection of fun party themes!</p>
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => carouselRef.current.prev()}
            className="bg-[#F2F2F2] hover:bg-black/60 rounded-full flex items-center justify-center h-15 w-15 cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => carouselRef.current.next()}
            className="bg-[#F2F2F2] hover:bg-black/60 rounded-full flex items-center justify-center h-15 w-15 cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div>
        <Carousel
          items={carouselData}
          width={"w-full"}
          showButton={false}
          ref={carouselRef}
        />
      </div>
    </div>
  );
}
export default PartyTheme;
