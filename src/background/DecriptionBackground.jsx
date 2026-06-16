import CurveVerctor from "../assets/curve-vector.svg";
import McBg from "../assets/mc-bg.svg";

function DecriptionBackground({ children }) {
  return (
    <div className="h-[250vw] lg:w-full lg:h-[150vw] overflow-hidden">
      <div className="relative w-full h-[220vw] lg:h-[100vw] xl:h-[85vw] 2xl:h-[75vw] bg-primary-gray">
        <div
          className="absolute bottom-0 w-full h-full bg-cover bg-center bg-repeat z-10"
          style={{ backgroundImage: `url(${McBg})` }}
        />
        <img
          src={CurveVerctor}
          className="absolute w-full h-[50vw] md:h-[40vw] xl:h-[30vw] object-cover object-bottom z-10 select-none pointer-events-none"
        />
        {children && (
          <div className="absolute inset-0 z-30 pointer-events-auto lg:w-full">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default DecriptionBackground;
