import { createSignal, onMount, For } from "solid-js";
import logo from '../../assets/logo.svg';
import styles from '../../App.module.css';

import Header from '../../common/components/layout/Header.component.tsx';
import Footer from '../../common/components/layout/Footer.component.tsx';
import heroBgImg from "../../assets/images/HERO.jpg"

import STS_LOGO from "../../assets/images/simplicity-main-logo.png"
import RPI_LOGO from "../../assets/images/logo-rpi.png"
import NCBI_LOGO from "../../assets/images/logo-ncbi.png"
import CRNA_LOGO from "../../assets/images/logo-crna.png"
import IA_LABS_LOGO from "../../assets/images/logo-ia-labs.png"
import NVIBE_LOGO from "../../assets/images/logo-nvibe.png"
import PIXELSPACE_LOGO from "../../assets/images/logo-pixelspace.png"
import OKEENEA_LOGO from "../../assets/images/logo-okeenea.png"

import Group_Intro from "../../assets/images/Group_Intro.jpg"
import iPhone14_First from "../../assets/images/iPhone14_First.png"
import features1Img from "../../assets/images/Features_1.png"
import features2Img from "../../assets/images/Features_2.png"
import features3Img from "../../assets/images/Features_3.png"


import { Marquee } from "solid-marquee"
                    
function HomePage() {
  //let domain = (new URL(url));
  //domain = domain.hostname;
  onMount(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth', block: 'center'
          });
      });
    });
  });


  return (
    <>
      <Header />

       {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
       <div className='flex flex-col h-main-hero w-full relative justify-between mt-8'>
          <img className="absolute h-full object-cover z-10
                            tv:object-hero-big-screen desktop:object-hero-big-screen  laptop:object-hero-big-screen  s-laptop:object-left-top tablet:object-left-top  mobile:object-left-top" src={(WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" )  + heroBgImg}  alt="Picture of a hand holding up a phone running soundscape for everyone with panels illustrating what is being called out. In the background there are people in a park."/>
          <div className="flex flex-col z-30 gap-6 mx-20
                          tv:mx-20  desktop:mx-20 laptop:mx-20   s-laptop:mx-16  tablet:mx-8  mobile:mx-6
                          tv:items-start  desktop:items-start laptop:items-start   s-laptop:items-center  tablet:items:center  mobile:items-center
                          tv:mt-36 desktop:mt-36  laptop:mt-24  s-laptop:mt-24  tablet:mt-24  mobile:mt-24
                          tv:w-[45vw]  desktop:w-[45vw]  laptop:w-[35vw]  s-laptop:w-fill-available  tablet:w-fill-available  mobile:w-fill-available ">
              <h3 className="w-full  text-white text-hero-title font-bold leading-none
                            tv:text-left desktop:text-left laptop:text-center s-laptop:text-center tablet:text-center mobile:text-center">
                Soundscape 
                <br className="tv:hidden desktop:hidden laptop:flex s-laptop:flex tablet:flex mobile:flex"/>
                <span  className="tv:text-hero-title desktop:text-hero-title laptop:text-hero-title-sub s-laptop:text-hero-title-sub tablet:text-hero-title-sub mobile:text-hero-title-sub">for Everyone</span> 
              
              </h3>
              <p className="font-work-sans font-normal w-full text-left text-white  
                            tv:text-3xl desktop:text-3xl laptop:text-2xl  s-laptop:text-2xl  tablet:text-2xl  mobile:text-2xl
                            tv:text-left desktop:text-left laptop:text-left  s-laptop:text-center  tablet:text-center  mobile:text-center">
                Explore, discover, and have fun with your own 3D sound map of the word!
              </p>
              <a className="h-auto w-fit bg-orange rounded-primary-btn px-16 py-4 text-white text-lg font-semibold" href="https://www.flipcause.com/secure/cause_pdetails/MTc5NDQ1" target="_blank">Donate</a>
          </div>
        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}

      <div id="consortium" className={`flex flex-col h-auto w-fill-available bg-navy-blue pb-8`} style={{ boxShadow: 'inset 0 0px 10px #000' }}>
        <h3 className="w-full text-white font-bold text-3xl text-center my-8 leading-8" >Meet the Soundscape Consortium</h3>
        <div class="relative flex overflow-x-hidden gap-8">
          <div className="flex py-2 justify-around flex-wrap gap-6">
            <img className="flex justify-center h-24 w-36 mx-12" src={ (WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" ) + NCBI_LOGO} alt="National Council for the Blind of Ireland Logo" />
            <img className="flex justify-center h-24 w-36 mx-12" src={ (WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" ) + IA_LABS_LOGO} alt="Inclusion and Accessibility Labs Logo" />
            <img className="flex justify-center h-24 w-36 mx-12" src={ (WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" ) + RPI_LOGO} alt="Rensselaer Polytechnic Institute Logo"  />
            <img className="flex justify-center h-24 w-36 mx-12" src={ (WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" ) + STS_LOGO} alt="Simplicity Tech Solutions Logo" />
            <img className="flex justify-center h-24 w-36 mx-12" src={ (WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" ) + NVIBE_LOGO} alt="N-Vibe Logo" />
            <img className="flex justify-center h-24 w-36 mx-12" src={ (WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" ) + CRNA_LOGO} alt="Capital Region Nordic Alliance Logo" />
            <img className="flex justify-center h-24 w-36 mx-12" src={ (WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" )  + PIXELSPACE_LOGO} alt="Pixelspace Logo" />
            <img className="flex justify-center h-24 w-36 mx-12" src={ (WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" ) + OKEENEA_LOGO} alt="Okeenea Logo" />
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}  
      <div className="flex flex-col w-full h-auto bg-light-grey-bg py-28 
                        tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-10">
          <h4 className="section-title-blue w-fit bg-transparent py-2 font-bold text-navy-blue text-3xl ">What is Soundscape</h4>
          <div className="flex flex-row flex-wrap w-full h-auto
                          tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-0">
            <div className="flex h-auto py-12
                            tv:items-start desktop:items-start laptop:items-start s-laptop:items-center tablet:items-center mobile:items-center
                            tv:flex-row desktop:flex-row laptop:flex-row s-laptop:flex-col tablet:flex-col mobile:flex-col
                            tv:basis-1/2 desktop:basis-1/2 laptop:basis-full s-laptop:basis-full tablet-basis:full mobile:basis-full ">
              <img className="h-phone w-fit" src={(WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" )  + iPhone14_First} alt="Image of Soundscape for Everyone running on an iphone displaying a location screen with a map and task options" />
              <div className="flex flex-col pl-8 pr-2 py-8 gap-6">
                <h5 className="w-fit bg-transparent py-2 font-semibold text-orange text-xl" >Spatial Audio Technology</h5>
                {/** mr-8 seemed to flow better */}
                <p className="mr-6 font-work-sans text-navy-blue font-medium">Soundscape uses 3D or spatial audio technology to enable people to build a richer awareness of their surroundings, thus becoming more confident and empowered to get around. </p>
              </div>
            </div>
            <div className="flex h-auto py-12
                            tv:items-start desktop:items-start laptop:items-start s-laptop:items-center tablet:items-center mobile:items-center
                            tv:flex-row desktop:flex-row laptop:flex-row s-laptop:flex-col tablet:flex-col mobile:flex-col
                            tv:basis-1/2 desktop:basis-1/2 laptop:basis-full s-laptop:basis-full tablet-basis:full mobile:basis-full ">
              <img className="h-phone w-fit" src={(WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" ) + iPhone14_First} alt="Image of Soundscape for Everyone running on an iphone displaying a location screen with a map and task options" />
              <div className="flex flex-col pl-8 pr-2 py-8 gap-6">
                <h5 className="w-fit bg-transparent py-2 font-semibold text-orange text-xl" >Intuitive way to works</h5>
                {/** mr-8 seemed to flow better */}
                <p className="mr-6 font-work-sans text-navy-blue font-medium">Hence, Soundscape makes familiar places richer with the information it provides; and it makes unfamiliar places become familiar because of the intuitive way it works. </p>
              </div>
            </div>
          </div>
        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="flex flex-col w-full h-auto bg-white py-28
                        tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-10">
          <div className="flex flex-row flex-wrap w-full h-auto">
            <div className="flex justify-center  min-h-[475px]  desktop:basis-1/2 laptop:basis-full s-laptop:basis-full tablet-basis:full  laptop:pb-6 s-laptop:pb-6 tablet:pb-6 mobile:pb-6">
              <img className="h-section-img max-h-[475px] w-auto rounded-section-image" src={(WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" )  + Group_Intro} alt="Image of a woman wearing shades and headphones walking down a busy street using soundscape for everyone. With supplemental white speakers surrounding her head to show the spatial audio from the application"/> 
            </div>
            <div className="flex flex-col desktop:basis-1/2 laptop:basis-full s-laptop:basis-full tablet-basis:full desktop:pl-10 py-4 gap-6">
              <h4 className="section-title-orange w-fit bg-transparent py-2 font-bold text-orange text-3xl ">Intro to Consortium</h4>
              <p className="font-work-sans text-navy-blue font-medium  mr-16">Following Microsoft’s decision to close down Soundscape, we are delighted to announce that a group of organizations and people, including the co-founders of Soundscape, have come together to not only make it available to existing users, but eventually make it available for everyone! </p>
              <a className="h-auto w-fit bg-navy-blue rounded-primary-btn px-16 py-3 text-white text-laptop font-semibold" href="#consortium" >Learn More</a> 
            </div>
          </div>
        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
      <div className="flex flex-col w-full h-auto bg-navy-blue py-28 
                         tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-10">
          <div className="flex flex-row-reverse flex-wrap  w-full h-auto"> {/* Just Have To Reverse here */}
          {/* change all screens like xl to more understandable version in tailwind.config*/}
          <div className="flex justify-center items-center min-h-[400px] desktop:basis-7/12 laptop:basis-full laptop:w-full mb-8 s-laptop:basis-full s-laptop:w-full tablet:basis-full tablet:w-full desktop:pl-10 mobile:basis-full">
            <iframe className=" min-h-[275px] h-[375px] max-h-[400px]  max-w-[90%] aspect-video rounded-section-image" src="https://www.youtube.com/embed/QR_2eF0YjM0?cc_load_policy=1" title="Youtube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="flex flex-col desktop:basis-5/12 laptop:basis-full s-laptop:basis-full tablet-basis:full pt-10   py-4 gap-6">
            <h4 className="section-title-white w-fit bg-transparent py-2 font-bold text-white text-3xl ">How Soundscape works</h4>
            <p className="font-work-sans text-white font-medium mr-16">
              Soundscape provides information about your surroundings with synthesized binaural audio, creating the effect of 3D sound. It runs in the background in conjunction with navigation or other applications to provide you with additional context about the environment.
              <br/><br/>
              Your phone, in hand or in pocket, is used to track movement using location and activity sensors, and let you move toward a self-set audio beacon.
            </p>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="flex flex-col w-full h-auto bg-white py-28 
                        tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-10">
          <div className="flex flex-row  flex-wrap justify-around w-full h-auto">
            <div className="flex flex-col basis-96 h-auto pb-4"> 
              <img className="w-10/12" src={(WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" )  + features1Img} alt="Illustration of a phone, headphones, and soundwaves" /> 
              <h4 className="w-fit bg-transparent py-2 font-semibold text-orange text-xl" >Getting started with Soundscape</h4>
              <p className="mr-2 font-work-sans text-navy-blue font-medium pr-8">After you install Soundscape, connect a stereo headset or earbuds. Follow the introductions and when prompted, allow the app to access your location. Then, explore a familiar route to get used to how Soundscape delivers spatial information.</p>
            </div>
            <div className="flex flex-col basis-96 h-auto pb-4"> 
              <img className="w-10/12" src={(WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" )  + features2Img} alt="Illustration of a phone screen with logo and tiles" /> 
              <h4 className="w-fit bg-transparent py-2 font-semibold text-orange text-xl" >Device compatibility</h4>
              <p className="mr-2 font-work-sans text-navy-blue font-medium pr-8">Soundscape is an application designed to operate on iPhone SE, iPhone 6S, and newer models. It is engineered to be compatible with both wired and Bluetooth stereo headsets, providing users with a seamless audio experience.</p>
            </div>
            <div className="flex flex-col basis-96 h-auto pb-4"> 
              <img className="w-10/12" src={(WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" )  + features3Img} alt="Line illustration of an irregular path with soundwaves at various points" /> 
              <h4 className="w-fit bg-transparent py-2 font-semibold text-orange text-xl" >Explore, discover, and have fun!</h4>
              <p className="mr-2 font-work-sans text-navy-blue font-medium pr-8">You can use Soundscape in a number of different ways, whether on a well-known route, out about with a friend or using it to discover new places.​</p>
            </div>
          </div>
        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="flex flex-col w-full h-auto bg-navy-blue py-28
                        tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-10">
          <div className="flex flex-row flex-wrap w-full h-auto gap-8">
            <div className="flex flex-col w-full h-auto basis-full"> {/* was basis-eList-1 */}
              <h4 className="w-fit bg-transparent py-2 font-semibold text-white text-2xl "><span className="text-cyan-blue">Email List Coming Soon!</span> Stay up to date on <span className="text-cyan-blue">Soundscape.</span></h4>
              <p className="font-work-sans text-white font-medium">Get ready to sign up to get the latest updates and news about Soundscape for Everyone.</p>
            </div>
            <div className="hidden gap-8 basis-eList-2  
                            tv:basis-eList-2  desktop:basis-eList-2  laptop:basis-eList-2  s-laptop:basis-eList-2  tablet:basis-full mobile:basis-full
                            tv:flex-row desktop:flex-row laptop:flex-row s-laptop:flex-row tablet:flex-col mobile:flex-col" >
              <div className="flex flex-col gap-2">
                <input type="text" placeholder="Email Address" style={{'borderColor': 'lightgrey', 'color': 'lightgrey'}} 
                        className="flex px-4 py-3 w-96 text-laptop rounded-primary-input bg-pale-bg border-2 border-gray-200 outline-0 text-gray-300
                                   tv:w-96 desktop:w-96 laptop:w-96 s-laptop:w-96 tablet:w-full mobile:w-full" /> 
                <p className="font-work-sans text-white font-tabletall text-tablet" >We will only sporadically send you availability updates.</p>
              </div>
              <div>
                <button className="h-auto w-fit bg-orange rounded-primary-btn px-10 py-3 text-white text-laptop font-semibold"  >Get Updates</button>
              </div>
            </div>
          </div>
        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="flex flex-col w-full h-auto bg-white py-28
                        tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-10">
          <h5 className="w-fit bg-transparent py-2 mb- font-semibold text-dark-grey text-2xl">Disclaimer</h5>
          <div className="flex w-full gap-16
                          tv:flex-row desktop:flex-row laptop:flex-row s-laptop:flex-row tablet:flex-col mobile:flex-col">  
            <div className="flex tv:w-1/2 desktop:w-1/2 laptop:w-1/2 s-laptop:w-1/2 tablet:w-full mobile:w-full ">
              <p>Microsoft Soundscape is not designed, intended or made available for diagnosis, treatment, or prevention of diseases and for use as a mobility aid or medical device; and is not designed or intended to be a substitute for professional medical advice, diagnosis, treatment, or judgement and should not be used to replace or as a substitute for professional </p>
            </div>
            <div className="flex tv:w-1/2 desktop:w-1/2 laptop:w-1/2 s-laptop:w-1/2 tablet:w-full mobile:w-full ">
              <p>medical advice, diagnosis, treatment, or judgement. The mapping data incorporated into the Microsoft Soundscape program is captured from a third-party program, and therefore, there may be limitations with the accuracy of the information presented and the user is responsible for their actions and their own safety and well-being.</p>
            </div>
          </div>
        </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
      <Footer />
    </>
  );
}

export default HomePage;
