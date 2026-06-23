import HappyMeal from "../assets/happy-meal.svg";
import VectorCircularLine from "../assets/vector-circular-line.svg";
import PartyPopper from "../assets/party-popper.svg";
import Button from "./Button";
import InfoList from "../components/utils/InfoList.jsx";
function PartyBookingInfo() {
  return (
    <div className="flex flex-col w-full bg-primary-gray">
      <div className="flex items-center justify-center text-center text-[5vw] sm:text-[3vw] lg:text-[2.3vw] 2xl:text-[2.15vw] font-bold gap-10 mt-10">
        <img src={HappyMeal} className="hidden sm:block" />
        <p className="pt-5">What to Expect When You Book a McDonald’s Party</p>
      </div>

      <InfoList />

      <div className="w-full h-65 md:h-55.25 bg-primary-yellow mt-10">
        <div className="pt-2">
          <img src={VectorCircularLine} className="absolute z-0" />
          <img
            src={VectorCircularLine}
            className="absolute z-0 right-0 -scale-y-100 -scale-x-100"
          />
        </div>
        <div className="flex flex-col absolute z-10 w-full justify-center items-center gap-3">
          <div className="flex flex-row gap-3">
            <img src={PartyPopper} className="hidden md:block"/>
            <h1 className="flex text-center md:text-start justify-center items-center text-[30px] font-bold pt-5">
              Plan a Party They’ll Never Forget
            </h1>
          </div>
          <p className="md:text-[18px] px-2 md:px-auto">
            Make the celebrant’s day magical with an easy, fun-filled party at
            McDonald’s.
          </p>
          <Button
            bgColor="bg-primary-red"
            textColor="text-white"
            addBoader={false}
            className="h-full px-4 lg:px-[1.5vw] text-[14px] lg:text-[1vw] whitespace-nowrap"
          >
            Book a party now!
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PartyBookingInfo;
