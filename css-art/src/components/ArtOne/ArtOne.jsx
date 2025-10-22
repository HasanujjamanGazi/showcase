import CenterCircles from "./CenterCircles";
import Right from "./Right/Right";
import Left from "./Left/Left";
import Peripherals from "./Left/Peripherals/Peripherals";

function ArtOne() {
  return (
    <div id="container" className="bg-[#ede8e2] p-10 h-[776px] w-[436px]">
      <div className="relative h-full flex justify-center items-center py-10">
        <CenterCircles />
        <Left />
        <Right />
        <Peripherals />
      </div>
    </div>
  );
}

export default ArtOne;
