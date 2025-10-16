


function HeroImg() {

  return(
    <>
      <div className="w-1/2  h-full relative">
        <div id="image-outline" className="h-10/12 w-3/4 rounded-full absolute left-65 top-25 z-1 border-3 border-gray-500 p-5 "></div>
        <div id="img" className="absolute h-[80%] w-[70%] rounded-full left-68 top-28 overflow-hidden z-3">
          <img src="https://media.presetz.co/wp-content/uploads/2024/08/19203902/Rose-Gold-1.jpg" alt="lady-with-flower" className="h-full w-full object-cover"/>
        </div>
      </div>
    </>
    
  )
}

export default HeroImg