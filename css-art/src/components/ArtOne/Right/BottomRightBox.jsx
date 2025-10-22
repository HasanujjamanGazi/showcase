


function bottomRightBox() {
  return (
    <div className="overflow-hidden bg-[#ede8e2] relative w-full h-2/5 border-l-[1px] border-t-[1px] border-gray-600">
      <div className="absolute top-8 bg-[#adbcb7] -left-10 rounded-full h-25 w-25 border-2 border-gray-600"></div>
      <div className="absolute -top-13 left-15 border-r-[1px] rotate-150 border-b-[5px] rounded-full h-25 w-25 border-gray-600"></div>
      <div className="absolute -top-13 left-15 border-dashed border-t-2 rotate-138 rounded-full h-25 w-25 border-gray-600"></div>
      <div className="h-8 w-1/4 bg-[#ede8e2] absolute right-0"></div>
      <div
        id="pendulum"
        className="h-1/3 w-[2px] bg-gray-600 absolute top-[43px] left-22 "
      ></div>
      <div className="absolute top-[135px] left-[83px] h-3 w-3 border-2 border-gray-600 bg-[#adbcb7] rounded-full"></div>
    </div>
  );
}


export default bottomRightBox;
