import React from 'react'
import { SelectedPage } from '../../CommonTypes/types';
import ActionButton from '../../Ui/ActionButton';
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../../hooks/useMediaQuery';

type Props = {
  selectedPage : SelectedPage,
  setSelectedPage : (value : SelectedPage)=> void
}

function Home({setSelectedPage}: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
   <section
    id="home"
    className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
   >
    {/* Image and main header */}
    <div className='mx-auto w-5/6 items-center justify-center md:flex md:h-5/6'>
      {/* Main Header */}
      <div className='z-10 mt-32 md:basis:3/5'>
        {/* Headings */}
        <div className='md:-mt-20'>
          <div className='relative'> 
            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
              <img alt="home-page-text" src={HomePageText}/>
            </div>
          </div>

          <p>
          Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
          </p>
        </div>

        {/*Action Button */}
        <div>
          <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
          <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
           onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
           href={`#${SelectedPage.ContactUs}`} 
          >
           <p>Learn More</p>
          </AnchorLink>
        </div>

      </div>
      {/* Image */}
       <img src={HomePageGraphic} alt="Home-PageGraphic"/>
      
    </div>
    {isAboveMediumScreens && (
      <div>
        <div>
          <div>
            <img alt="redbull-sponsor" src={SponsorRedBull} />
            <img alt="forbes-sponsor" src={SponsorForbes} />
            <img alt="fortune-sponsor" src={SponsorFortune} />
          </div>
        </div>
      </div>
    )}
   </section>
  )
}

export default Home