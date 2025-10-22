import Dot from "../Dot"


function Peripherals() {

  return(
    <>
      <div className="absolute top-[2px] left-41 h-38 w-[1.5px] bg-gray-600"></div>
      <div className="absolute top-[57px] left-39 h-25 w-[1.5px] bg-gray-600"></div>


    {/* UPPER DOTS */}
      <div className="flex flex-wrap left-15 top-20 absolute h-17 w-10 ">
          <Dot count={40} />
      </div>


      {/* UPPER YELLOW CIRLCLE */}
      <div className="absolute top-27 right-20 bg-[#ddb793] h-10 w-10 rounded-full border-[2px] border-gray-600"></div>
      <div className="absolute top-46 left-17 bg-[#adbcb7] h-7 w-7 rounded-full border-[2px] border-gray-600"></div>


      {/* LOWER LINES */}
      <div className="right-40 bottom-0 absolute h-3/12 w-[2px] bg-gray-600"></div>
      <div className="right-38 bottom-5 absolute h-[23%] w-[2px] bg-gray-600"></div>
      <div className="right-36 bottom-10 absolute h-[21%] w-[2px] bg-gray-600"></div>


      {/* LOWER RIGHT DOTS  */}
      <div className="flex flex-wrap right-15 bottom-20 absolute h-17 w-15 ">
          <Dot count={30} />
      </div>


      {/* LOWER RIGHT DOTS  */}
      <div className="right-58 bottom-20 absolute h-17 w-15 ">
        <Dot count={15} />
      </div>
    </>
  )
}

export default Peripherals