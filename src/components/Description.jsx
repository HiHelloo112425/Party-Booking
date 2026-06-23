import GroupImg from "../assets/group-img.png";
import DownDouble from "../assets/chevron-down-double.svg";
import Meal from "../assets/Meal.svg";
import Wave from "../assets/wave.svg";
import BandaritasL from "../assets/bandaritas-l.svg";
import BandaritasR from "../assets/bandaritas-r.svg";
import IconBranch from "../assets/icon-branch.svg";
import IconGift from "../assets/icon-gift.svg";
import IconCC from "../assets/icon-cc.svg";
import CurveVerctor from "../assets/curve-vector.svg";
import McBg from "../assets/mc-bg.svg";

function Description() {
  return (
    <div className="h-[450vw] sm:h-[350vw] md:h-[300vw] lg:w-full lg:h-[115vw] overflow-hidden">
      <div className="relative w-full h-[200vw] lg:h-[100vw] xl:h-[85vw] 2xl:h-[75vw]">
        <div
          className="absolute bottom-0 w-full h-full bg-cover bg-center bg-repeat z-10"
          style={{ backgroundImage: `url(${McBg})` }}
        />
        <img
          src={CurveVerctor}
          className="absolute w-full h-[50vw] md:h-[40vw] xl:h-[35vw] object-cover object-bottom z-10 select-none pointer-events-none"
        />

        <div className="absolute inset-0 z-30 pointer-events-auto lg:w-full">
          <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center mt-3 gap-3">
              <p className="text-white font-bold text-[3vw] lg:text-[1.17vw]">
                LEARN MORE
              </p>
              <button>
                <img src={DownDouble} className="animate-float" />
              </button>
            </div>

            {/* SECTION 1 - IMAGE + TEXT */}
            <div className="flex flex-col lg:flex-row justify-evenly items-center lg:items-start gap-5 px-[4vw] lg:px-0">
              <div className="self-center w-75 md:w-100 lg:w-120 xl:w-150 lg:self-end mt-10 lg:mt-20 relative">
                <div className="absolute inset-0 w-full h-full bg-primary-yellow rounded-3xl border-4 border-white -rotate-3 translate-x-2 translate-y-2 z-0" />
                <img
                  src={GroupImg}
                  className="relative w-[80vw] md:w-[60vw] lg:w-150 rounded-3xl border-4 border-white rotate-4 z-10 select-none pointer-events-none"
                />
              </div>

              <div className="flex flex-col text-center lg:text-start h-full pt-[1vw] lg:pt-[0.10vw]">
                <div className="lg:w-100 xl:w-150">
                  <div className="font-bold text-[6.25vw] lg:text-[35px] xl:text-[48px]">
                    <h1 className="flex-wrap gap-3 ">
                      Celebrate{" "}
                      <span className="text-primary-red"> Big Moments</span>
                    </h1>
                    <h1>with McDonald's</h1>
                  </div>
                  <div className="text-[3vw] lg:text-[15px] lg:mt-0 xl:text-[18px] mt-[2vw] ">
                    <p>
                      At McDonald's, we believe every celebration should be
                      filled with joy, not stress. Our party packages are
                      designed to make planning effortless, so you can focus on
                      what truly matters:
                      <b>
                        {" "}
                        creating unforgettable memories with your loved ones.
                      </b>
                    </p>
                    <br />
                    <p>
                      We take care of everything, from delicious meals and
                      exciting games to decorations and service. This means you
                      can simply enjoy the fun on their special day.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <img
              src={Meal}
              className="lg:hidden mx-auto w-[40vw] md:w-[45vw]"
            />

            <div className="flex flex-col lg:flex-row justify-evenly items-center mb-25 lg:items-start gap-5 mt-[8vw] lg:mt-30 px-[4vw] lg:px-0">
              <div className="md:px-5 xl:px-0 flex flex-col w-full lg:w-148">
                <div className="font-bold text-[6.25vw] text-center lg:text-start lg:text-[35px] xl:text-[48px]">
                  <h1>Every McDonald's</h1>
                  <h1 className="gap-3">
                    <span className="text-primary-red">Party Package</span>{" "}
                    Includes:
                  </h1>
                </div>

                <div className="text-gray-700 text-[3vw] lg:text-[15px] xl:text-[18px]">
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
            <div className="absolute z-20 w-full top-[110vw] sm:top-[75vw] md:top-[115vw] lg:top-[45vw] xl:top-[25vw] 2xl:top-[16vw] left-0">
              <img
                src={Wave}
                className="absolute top-[160vw] md:top-[120vw] lg:top-[55vw] left-0 w-full z-10 select-none pointer-events-none"
              />
              <img
                src={BandaritasL}
                className="absolute top-[165vw] md:top-[125vw] lg:top-[60vw] left-0 w-[30vw] md:w-[22vw] lg:w-[19vw] z-20 select-none pointer-events-none"
              />
              <img
                src={BandaritasR}
                className="absolute top-[160vw] md:top-[120vw] lg:top-[55vw] right-0 w-[40vw] md:w-[30vw] lg:w-[30vw] z-20 select-none pointer-events-none"
              />

              <div className="relative flex flex-col w-full justify-center items-center top-[170vw] md:top-[126vw] lg:top-[63vw] gap-[3vw] lg:gap-13 xl:gap-20 px-[4vw] lg:px-0 z-30">
                <h1 className="flex flex-row flex-wrap justify-center text-[4vw] gap-2 mx-20 md:mx-25 lg:mx-0 font-bold  md:text-[3vw] lg:text-[2.3vw] 2xl:text-[2.15vw] text-center">
                  Your McDonald's Party in a{" "}
                  <span className="text-primary-red">Few Simple Steps!</span>
                </h1>
                <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                  {[
                    {
                      bg: "bg-primary-red",
                      text: "Step 1",
                      icon: IconBranch,
                      iconColor: "#BB0C07",
                      label: "1. Choose your Branch",
                      content:
                        "Easily find a McDonald's with party facilities perfect for your celebration.",
                    },
                    {
                      bg: "bg-primary-yellow",
                      text: "Step 2",
                      icon: IconGift,
                      iconColor: "#F1A500",
                      label: "2. Pick your Party Package",
                      content:
                        "Choose from exciting themes and customize with all their favorite treats.",
                    },
                    {
                      bg: "bg-primary-red",
                      text: "Step 3",
                      icon: IconCC,
                      iconColor: "#BB0C07",
                      label: "3. Customized and Pay",
                      content:
                        "Confirm your booking and pay online or on the venue.",
                    },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className={`rounded-2xl w-full h-[46vw] sm:h-[25vw] md:h-[40vw] md:w-[25vw] lg:w-[25vw] lg:h-50 ${card.bg}`}
                    >
                      <div className="flex flex-col md:gap-3">
                        <div className="flex flex-row w-full justify-center lg:justify-start ">
                          <div
                            className={`mt-5 lg:ml-5 rounded-full w-15 h-15 flex justify-center items-center overflow-hidden bg-${card.iconColor}`}
                          >
                            <img
                              src={card.icon}
                              className="w-10 h-10 object-contain"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col text-white md:gap-5 lg:gap-0">
                          <div className="flex ps-5 md:justify-center md:ps-0 lg:justify-start lg:ps-5 w-full h-10 font-bold text-center lg:text-start">
                            <h1>{card.label}</h1>
                          </div>
                          <div className="mx-5 lg:ml-3 lg:mr-18">
                            <p>{card.content}</p>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
