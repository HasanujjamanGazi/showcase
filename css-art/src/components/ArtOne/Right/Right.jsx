import BottomRightBox from "./BottomRightBox"


function Right() {

  return(
    <div className="absolute h-full right-0 w-1/2 flex flex-col justify-center">
      <div className="w-full h-2/5 border-l-[1px] border-b-[1px] border-gray-600"></div>
      <BottomRightBox />
    </div>
  )
}


export default Right