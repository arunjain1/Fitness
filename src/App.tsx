import { useEffect, useState } from 'react'
import Navbar from './screens/Navbar';
import Home from './screens/Home/index.tsx';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid';

import { SelectedPage } from './CommonTypes/types.ts';


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
     </div>
    </>
  )
}

export default App
