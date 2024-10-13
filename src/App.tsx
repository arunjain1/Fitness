import { useEffect, useState } from 'react'
import Navbar from './screens/Navbar';
import Home from './screens/Home/index.tsx';
import Benefits from './screens/Benefits/index.tsx';
import { SelectedPage } from './CommonTypes/types.ts';
import OurClasses from './screens/OurClasses/index.tsx';
import ContactUs from './screens/ContactUs/index.tsx';
import Footer from './screens/Footer/index.tsx';


function App() {
  const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage,setIsTopOfPage] = useState<Boolean>(true);

  useEffect(()=>{
   const handleScroll = ()=>{
    if(window.scrollY === 0){
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home);
    }
    if(window.scrollY !== 0){
      setIsTopOfPage(false);
    }
   } 
   window.addEventListener("scroll",handleScroll);
   return ()=>  window.removeEventListener("scroll",handleScroll);
  },[]);
  return (
    <>
      <div className='app bg-gray-20'>
       <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage}/>
       <Home selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
       <Benefits setSelectedPage={setSelectedPage}/>
       <OurClasses setSelectedPage={setSelectedPage}/>
       <ContactUs setSelectedPage={setSelectedPage}/>
       <Footer/>
     </div>
    </>
  )
}

export default App
