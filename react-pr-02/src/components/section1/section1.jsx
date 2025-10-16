import Section1Right from "./section1right/Section1Right";
import Section1Left from "./section1left/Section1Left";



function Section1() {
  
  return(
    <div className="flex h-svh w-full font-poppins bg-[#ebebeb]">
      <Section1Left />
      <Section1Right />
    </div>
    
  )
}

export default Section1