import { ChevronLeft, ChevronRight } from "lucide-react";
import ConfettiHorizontal from "../assets/confetti-horizontal.svg";
import McBg from "../assets/mc-bg.svg";
import Image1 from "../assets/image-1.png";
import Image2 from "../assets/image-2.png";
import Image3 from "../assets/image-3.png";
import PromoCard from "../assets/promo-card.png";
import Image4 from "../assets/boss-bossing.gif";
import Carousel from "../components/utils/Carousel.jsx";

const carouselData = [
  {
    image: Image1,
    title: "Grimace Theme",
    content: `Step into a world of purple fun where Grimace is the star of the show. It's a high-energy celebration filled with vibrant berry colors, and playful games.`,
  },
  {
    image: Image2,
    title: "Happy Meal Theme",
    content: `Celebrate with the iconic joy of a Happy Meal! This classic theme brings all their McDonald's favorites to life for a truly happy party.`,
  },
  {
    image: Image3,
    title: "Madagascar Theme",
    content: `Join Alex, Marty, and the whole gang for a wild adventure! This Madagascar theme promises a party filled with laughter and jungle fun.`,
  },
  {
    image: Image4,
    title: "Boss bossing Theme",
    content: `Bossing kamusta ang buhay buhay`,
  },
];

function ThemePromo() {
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
                Find a Party Theme That{" "}
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
              <Carousel items={carouselData} />
            </div>
            <div className="flex flex-col text-center lg:text-start lg:justify-start lg:ms-25 mt-10 gap-5">
              <h1 className="font-bold text-[4vw] md:text-[6.25vw] lg:text-[35px] 2xl:text-[48px]">
                Checkout our{" "}
                <spam className="text-primary-red"> Deals and Promo</spam>
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
