import 'remixicon/fonts/remixicon.css'


function Logo() {

  return(
    <div className='relative hover:cursor-pointer text-2xl text-[#334746] hover:after:content-[""] hover:after:h-1 hover:after:w-full hover:after:absolute hover:after:bg-[rgba(254,119,67,0.6)] hover:after:bottom-0 hover:after:left-0 hover:after:rounded-b-2xl '>
      <div className='p-1'>
      <i className="ri-apps-fill"></i>
      <span className='uppercase ml-1 font-extrabold ' >hflow</span>
      </div>
    </div>
  )
}

export default Logo