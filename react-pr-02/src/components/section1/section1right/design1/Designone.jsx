function DesignOne() {
  return (
    <div className="w-1/2 h-full z-2">
      <div className="bg-[#334746] h-3/4 w-3/4 rounded-bl-full rounded-br-full p-10 pt-0">
        <div className="relative h-full w-full  border-2 border-gray-500 rounded-bl-full rounded-br-full border-t-0 flex justify-center">
          <div className="h-full w-1/2 border-r-[1px] border-gray-500">
            <div className="h-1/4 w-full rounded-tl-full border-t-2 border-gray-500 "></div>
            <div className="h-1/4 w-full rounded-tl-full border-t-2 border-gray-500 "></div>
            <div className="h-1/4 w-full rounded-tl-full border-t-2 border-gray-500 "></div>
          </div>
          <div className="h-full w-1/2 border-l-[1px] border-gray-500">
              <div className="h-1/4 w-full rounded-tr-full border-t-2 border-gray-500 "></div>
              <div className="h-1/4 w-full rounded-tr-full border-t-2 border-gray-500 "></div>
              <div className="h-1/4 w-full rounded-tr-full border-t-2 border-gray-500 "></div>
          </div>
          <div className="absolute top-75 left-25 uppercase rotate-90 text-3xl text-[#ebebeb] font-gravity ">design flowers</div>
        </div>
      </div>
    </div>
  );
}

export default DesignOne;
