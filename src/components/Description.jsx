import DecriptionBackground from "../background/DecriptionBackground";
import GroupImg from "../assets/group-img.png";
import DownDouble from "../assets/chevron-down-double.svg";
import Meal from "../assets/Meal.svg";
import Wave from "../assets/wave.svg";
import BandaritasL from "../assets/bandaritas-l.svg";
import BandaritasR from "../assets/bandaritas-r.svg";
import IconBranch from "../assets/icon-branch.svg";
import IconGift from "../assets/icon-gift.svg";
import IconCC from "../assets/icon-cc.svg";

function Description() {
  return (
    <DecriptionBackground>
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center mt-3">
          <p className="text-white font-bold text-[1.56vw] lg:text-[1.17vw]">
            LEARN MORE
          </p>
          <button>
            <img src={DownDouble} className="animate-float" />
          </button>
        </div>

        {/* SECTION 1 - IMAGE + TEXT */}
        <div className="flex flex-col lg:flex-row justify-evenly items-center lg:items-start gap-5 px-[4vw] lg:px-0">
          <div className="self-center w-100 lg:w-120 2xl:w-150 lg:self-end mt-10 lg:mt-20 relative">
            <div className="absolute inset-0 w-full h-full bg-primary-yellow rounded-3xl border-4 border-white -rotate-3 translate-x-2 translate-y-2 z-0" />
            <img
              src={GroupImg}
              className="relative w-[80vw] md:w-[60vw] lg:w-150 rounded-3xl border-4 border-white rotate-4 z-10 select-none pointer-events-none"
            />
          </div>

          <div className="flex flex-col text-center lg:text-start h-full pt-[1vw] lg:pt-[0.10vw]">
            <div className="lg:w-100 xl:w-150">
              <div className="font-bold text-[6.25vw] lg:text-[35px] 2xl:text-[48px]">
                <h1 className="flex-wrap gap-3 ">
                  Celebrate{" "}
                  <span className="text-primary-red"> Big Moments</span>
                </h1>
                <h1>with McDonald's</h1>
              </div>
              <div className="text-[2vw] lg:text-[15px] 2xl:text-[18px] mt-[2vw] lg:mt-0">
                <p>
                  At McDonald's, we believe every celebration should be filled
                  with joy, not stress. Our party packages are designed to make
                  planning effortless, so you can focus on what truly matters:
                  <b> creating unforgettable memories with your loved ones.</b>
                </p>
                <br />
                <p>
                  We take care of everything, from delicious meals and exciting
                  games to decorations and service. This means you can simply
                  enjoy the fun on their special day.
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src={Meal} className="lg:hidden mx-auto w-[40vw] md:w-[45vw]" />

        <div className="flex flex-col lg:flex-row justify-evenly items-center mb-25 lg:items-start gap-5 mt-[8vw] lg:mt-30 px-[4vw] lg:px-0">
          <div className="md:px-5 xl:px-0 flex flex-col w-full lg:w-148">
            <div className="font-bold text-[6.25vw] text-center lg:text-start lg:text-[35px] 2xl:text-[48px]">
              <h1>Every McDonald's</h1>
              <h1 className="gap-3">
                <span className="text-primary-red">Party Package</span>{" "}
                Includes:
              </h1>
            </div>

            <div className="text-gray-700 text-[2vw] lg:text-[15px] 2xl:text-[18px]">
              <ul className="space-y-1 mt-[2vw] lg:mt-0">
                {[
                  "Decorated Party Room: A festive space ready for fun!",
                  "Themed Invitations & Party Hats: Set the mood from the start.",
                  "Activity Mats & Balloons: Keeping little hands busy and spirits high.",
                  "Exciting Giveaways & Prizes: Fun for everyone!",
                  "Special Gift for the Celebrant: A treat for the star of the day.",
                  "Professional Party Host: Our friendly team ensures smooth sailing and endless games.",
                  "Character Appearance: (For select packages) Meet your favorite McDonald's character!",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-black shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-center lg:text-start">
                We take care of the details, so you can enjoy the magic!
              </p>
            </div>
          </div>
          <img
            src={Meal}
            className="hidden lg:block w-[55vw] xl:w-auto lg:pb-11  xl:pb-0"
          />
        </div>

        {/* SECTION 3 - STEPS */}
        <div className="absolute z-20 w-full top-[55vw] sm:top-[35vw] md:top-[70vw] lg:top-[45vw] xl:top-[25vw] 2xl:top-[16vw] left-0">
          <img
            src={Wave}
            className="absolute top-[160vw] md:top-[120vw] lg:top-[55vw] left-0 w-full z-10 select-none pointer-events-none"
          />
          <img
            src={BandaritasL}
            className="absolute top-[165vw] md:top-[125vw] lg:top-[60vw] left-0 w-[30vw] md:w-[22vw] lg:w-[25vw] z-20 select-none pointer-events-none"
          />
          <img
            src={BandaritasR}
            className="absolute top-[160vw] md:top-[120vw] lg:top-[55vw] right-0 w-[40vw] md:w-[30vw] lg:w-[35vw] z-20 select-none pointer-events-none"
          />

          <div className="relative flex flex-col w-full justify-center items-center top-[63vw] gap-[6vw] lg:gap-20 px-[4vw] lg:px-0 z-30">
            <h1 className="flex flex-row flex-wrap justify-center gap-3 font-bold text-[6vw] md:text-[4vw] lg:text-[2.3vw] 2xl:text-[2.15vw] text-center">
              Your McDonald's Party in a{" "}
              <span className="text-primary-red">Few Simple Steps!</span>
            </h1>
            <div className="flex flew-row gap-10">
              {[
                { bg: "bg-primary-red", text: "Step 1", icon: IconBranch },
                { bg: "bg-primary-yellow", text: "Step 2", icon: IconGift },
                { bg: "bg-primary-red", text: "Step 3", icon: IconCC },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`rounded-2xl w-[80vw] md:w-[25vw] lg:w-85 h-[40vw] md:h-[20vw] lg:h-58 ${card.bg}`}
                >
                  <div className="mt-5 ml-5 rounded-full w-15 h-15 flex justify-center items-center overflow-hidden bg-primary-gray">
                    <img src={card.icon} className="w-10 h-10 object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DecriptionBackground>
  );
}

export default Description;
