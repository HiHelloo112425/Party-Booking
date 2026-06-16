import Confetti from "../assets/confetti.svg";
import Mlogo from "../assets/m-logo.svg";
import FamilyImg from "../assets/family.svg";
import McCelebration from "../assets/mcdo-celebration.svg";
import BaloonLeft from "../assets/balloons-left.svg";
function BookingBackground({ children }) {
  return (
    <div className="w-full h-auto lg:h-[40vw] overflow-hidden">
      <div className="relative h-[100vw] md:h-[65vw] lg:h-[40vw] bg-primary-gray">
        <img
          src={Confetti}
          className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
          alt=""
        />

        <div className="lg:hidden absolute z-10 block top-0 left-0   w-1/2 h-full select-none pointer-events-none">
          <div className="relative w-full h-full overflow-visible">
            <img
              src={BaloonLeft}
              className="absolute top-40 left-[10%] w-[30vw] max-w-none h-auto z-10 animate-float"
              alt=""
            />

            <img
              src={BaloonLeft}
              className="absolute top-40 left-[65vw] w-[30vw] max-w-none h-auto z-10 -scale-x-100 animate-float"
              alt=""
            />
          </div>
        </div>

        <div className="hidden absolute z-10 lg:block bottom-0 right-0 w-1/2 h-full select-none pointer-events-none">
          <div className="relative w-full h-full overflow-visible">
            <img
              src={Mlogo}
              className="absolute top-15 right-0 w-[50vw] max-w-none h-auto z-10 origin-bottom-right"
            />

            <img
              src={McCelebration}
              className="absolute top-11 right-[14vw] w-[20vw] max-w-none h-auto z-10"
              alt=""
            />

            <img
              src={BaloonLeft}
              className="absolute top-15 right-[70%] w-[14vw] max-w-none h-auto z-10 animate-float"
              alt=""
            />

            <img
              src={BaloonLeft}
              className="absolute top-5 right-[5%] w-[12vw] max-w-none h-auto z-10 -scale-x-100 animate-float"
              alt=""
            />

            <div className="absolute z-20 bottom-0">
              <img
                src={FamilyImg}
                className="ml-[14vw] h-[30.5vw] w-auto origin-bottom-left"
              />
            </div>
          </div>
        </div>

        {children && (
          <div className="absolute inset-0 z-30 pointer-events-auto lg:w-1/2">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingBackground;
