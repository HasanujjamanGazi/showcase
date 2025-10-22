


function Dot(param) {

  let dotCount = []
  function defineDotCount(count) {
    for (let index = 0; index < count; index++) {
      dotCount.push(index)
    }
  }

  if (param.count) {
    defineDotCount(param.count)
    return(
      dotCount.map((elem) => {

        return(
          <div key={elem} className="p-[1px]">
            <div className="h-[7px] w-[7px] rounded-full border-2 border-gray-600 "></div>
          </div>
        )
      })
    )
  }

  // return (
  //   <div className="p-[1px]">
  //     <div className="h-[7px] w-[7px] rounded-full border-2 border-gray-600 "></div>
  //   </div>
  // );
}


export default Dot