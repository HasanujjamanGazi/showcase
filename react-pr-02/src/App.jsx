import Navbar from './components/navbar/Navbar';
import Section1 from './components/section1/section1';

function App() {

  const btnData = [
    {'text': "Home"},
    {'text': "About me"},
    {'text': "Courses"},
  ]

  return (
    <>
      <Navbar btnData={btnData} />
      <Section1 />
    </>
  )
}

export default App
