import { ChevronLeft, ChevronRight } from "lucide-react";
import ConfettiHorizontal from "../../assets/confetti-horizontal.svg";
import McBg from "../../assets/mc-bg.svg";
import PromoCard from "../../assets/promo-card.png";
import Carousel from "../../components/utils/Carousel.jsx";
import { useHome } from "../../hooks/useHome.js";

function ThemePromo({ carouselData }) {
  return (
    <div>
      <div className="h-[220vw] sm:h-[140vw] md:h-[150vw] lg:w-full lg:h-[130vw] xl:h-[105vw] 2xl:h-[97vw] overflow-hidden">
        <div className="relative w-full h-[200vw] lg:h-[100vw] xl:h-[85vw] 2xl:h-[75vw]">
          <img src={ConfettiHorizontal} className="w-full" />
          <div
            className="absolute top-25 w-full h-230 bg-cover bg-center bg-repeat z-10"
            style={{ backgroundImage: `url(${McBg})` }}
          />
          <div>
            <div className="flex flex-col text-center lg:text-start justify-start lg:ms-25 gap-5">
              <h1 className="font-bold text-[4vw] md:text-[6.25vw] lg:text-[35px] 2xl:text-[48px]">
                Find a Party Theme That
                <span className="text-primary-red">Everyone Will Love</span>
              </h1>
              <div className="lg:w-250">
                <p>
                  From thrilling adventures to enchanting tales, we have a theme
                  to make every child's dream celebration come true. Explore our
                  popular options and find the perfect fit for your l ittle one!
                </p>
              </div>
            </div>
            <div className="mt-10">
              <Carousel
                items={carouselData}
                width={"w-350"}
                showButton={true}
              />
            </div>
            <div className="flex flex-col text-center lg:text-start lg:justify-start lg:ms-25 mt-10 gap-5">
              <h1 className="font-bold text-[4vw] md:text-[6.25vw] lg:text-[35px] 2xl:text-[48px]">
                Checkout our
                <span className="text-primary-red"> Deals and Promo</span>
              </h1>
            </div>
            <div className="flex justify-center w-[90vw] lg:w-full px-[5vw] mx-auto">
              <img src={PromoCard} className="w-330" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ThemePromo;
