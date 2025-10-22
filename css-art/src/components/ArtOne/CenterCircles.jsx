


function CenterCircles() {

  return(
    <div className="relative flex justify-center items-center h-60 w-60  rounded-full">
      <div className="absolute border-[2px] border-gray-600 -top-19 h-26 w-26 rounded-full bg-[#f0f0f0]"></div>
      <div className="absolute border-[2px] border-gray-600 h-full w-full rounded-full bg-[#ede8e2]  "></div>
      <div className="absolute -bottom-25 left-8 bg-[#ddb793] h-35 w-35 rounded-full border-[2px] border-gray-600"></div>
    </div>
  )
}

export default CenterCircles