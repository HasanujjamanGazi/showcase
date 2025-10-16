import Contact from "./contact/Contact";
import Logo from "./logo/Logo";
import NavBtn from "./nav-btn/NavBtn";



function Navbar(props) {

  // console.log(props)

  return(
    <div className="z-10 font-poppins navbar my-4 left-1/12 fixed bg-[rgba(51,71,70,0.37)] backdrop-blur-xl h-15 w-10/12 flex justify-between items-center px-10 rounded-4xl ">
      <Logo/>
      <div className="flex gap-2">
      {
        props.btnData.map((elem, idx) => {
          return(
            <NavBtn key={idx} text={elem.text} />
          )
        })
      }
      </div>
      <Contact/>
    </div>
  )
}

export default Navbar