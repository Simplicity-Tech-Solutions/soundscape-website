import { createSignal, For, Show } from 'solid-js';

import Header from '../../common/components/layout/Header.component.tsx';
import Footer from '../../common/components/layout/Footer.component.tsx';

import Herofeatures from '../../assets/images/Herofeatures.jpg';
import SoundscapeStreetPreview from '../../assets/images/SoundscapeStreetPreview.png';
import SoundscapeStreetPreviewSmall from '../../assets/images/SoundscapeStreetPreviewSmall.png';

import ftPagefeatures1 from '../../assets/images/ftPagefeat1.png';
import ftPagefeatures2 from '../../assets/images/ftPagefeat2.png';
import ftPagefeatures3 from '../../assets/images/ftPagefeat3.png';

import spatialAudio from '../../assets/images/spatialAudio.png';
import wayFinding from '../../assets/images/wayFinding.png';
import beaconFeature from '../../assets/images/beaconFeature.png';
import bgApp from '../../assets/images/bgApp.png';
import buildings from '../../assets/images/buildings.png';
import OpenStreetmap from '../../assets/images/OpenStreetmap.png';


function FeaturesPage() {

    return (
        <>
            <Header />
                <div className='h-[450px] w-full'>
                    <img
                        className="h-full object-cover tv:w-full desktop:w-auto laptop:w-auto
                                tv:object-hero-big-screen desktop:object-hero-big-screen
                                laptop:object-hero-big-screen s-laptop:object-left-top
                                tablet:object-left-top mobile:object-left-top"
                        src={(WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" ) + Herofeatures}
                        alt="picture of hand holiding up a phone with the Soundscape app open with panels illustrating what is being said by the application. In the background is a city street with people walking and buildings."
                    />
                </div>
                {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
                <div className="flex w-full h-auto bg-white py-28
                                tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-10">
                    <div className="flex flex-row flex-wrap w-full h-auto">
                        <div className="flex flex-col desktop:basis-5/12 laptop:basis-full s-laptop:basis-full tablet-basis:full pt-10   py-4 gap-6">
                            <h2 className="section-title-orange w-fit bg-transparent py-2 font-semibold leading-normal text-orange text-3xl">Audio information in 3D - for more independence and mobility</h2>
                            <p className="font-work-sans text-dark-grey font-medium text-medium  pr-4">
                                Soundscape is a general-purpose application and allows you to switch effortlessly between using it in the real world or in the virtual world, to help build a richer awareness of your surroundings and explore your environment.
                                <br/><br/>
                                Place your phone in your pocket or bag and enjoy a hands-free Soundscape experience as it automatically calls out what is around you with any standard pair of stereo headphones!
                            </p>
                        </div>
                        <div className="flex justify-center items-center my-8 max-h-[475px] desktop:basis-7/12 laptop:basis-full laptop:w-full s-laptop:basis-full s-laptop:w-full tablet:basis-full tablet:w-full desktop:pl-10 mobile:basis-full">
                            <iframe className="video-sizing w-[80%] max-h-[400px] max-w-[712px]  rounded-section-image" src="https://www.youtube.com/embed/QR_2eF0YjM0?cc_load_policy=1" title="Youtube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
                <div className="flex flex-col w-full h-auto bg-light-grey-bg py-28 
                          tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-10">
                    <div className="flex flex-row flex-wrap w-full h-auto items-center justify-center ">
                        <div className="flex desktop:basis-5/12 laptop:basis-full s-laptop:basis-full tablet-basis:full laptop:pb-6 s-laptop:pb-6 tablet:pb-6 mobile:pb-6  pt-4">
                            <img className ="hidden md:flex h-phone w-fit" src={(WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" )+ SoundscapeStreetPreview} alt="Image of two iphone screens displaying Soundscape Community. The first screen on the left displays the soundscape street preview screen while the second is displaying a location screen with a map and task options" />
                            <img className ="md:hidden flex h-phone w-fit" src={(WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" )+ SoundscapeStreetPreviewSmall} alt="Image of iphone screen displaying Soundscape Community street preview" />
                        </div>
                        <div className="flex flex-col desktop:basis-7/12 laptop:basis-full s-laptop:basis-full tablet-basis:full desktop:pl-4 py-6 gap-6 pt-8">
                            <h2 className="section-title-blue w-fit bg-transparent py-2 font-bold text-navy-blue text-3xl">Soundscape Street Preview</h2>
                            <p className="font-work-sans text-navy-blue font-medium text-medium   mr-16">
                            Soundscape Street Preview breaks fresh ground for Soundscape by providing an innovative tool for virtually exploring the world! With it, you can select any location in the world to preview the area at street level in order to familiarize and build a mental map of the space.
                            <br/><br/>
                            Soundscape Street Preview will help enrich your awareness of familiar places, and help you explore and discover new and unfamiliar places!
                            </p>
                            <a className="h-auto w-fit bg-navy-blue rounded-primary-btn px-16 py-3 text-white text-laptop font-semibold" href="https://www.youtube.com/embed/et6FlZXfBvM" target="_blank">Watch the video</a> 
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full h-auto bg-navy-blue py-28 
                         tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-10">
                    <div className="flex flex-row py-8">
                        <div className="desktop:basis-4/12 laptop:basis-full s-laptop:basis-full tablet-basis:full">
                        <h2 className="section-title-white w-fit bg-transparent pb-2 pt-4 font-semibold text-white text-3xl leading-10">Explore the world from the comfort of your sofa</h2>
                        </div>
                    </div>
                    <div className="flex flex-row pb-16">
                        <div className="desktop:basis-8/12 laptop:basis-full s-laptop:basis-full tablet-basis:full">
                        <p className="font-medium text-medium  text-white">
                            When people have more ambient information, they naturally and intuitively create better mental maps, so they can explore more and feel more comfortable and connected in new environments. Soundscape provides spatial information everywhere you go and adds functionality to existing navigation systems.        
                        </p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-around w-full h-auto py-5">
                        <div className="flex flex-col s-laptop:!basis-[28%]  tablet:basis-full mobile:basis-full h-auto mb-12"> 
                            <img className="w-fill" src={(WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" ) + ftPagefeatures1} alt="Picture of a group of people standing in an open space listening to Soundscape. One person has a guide dog, another person as a long cane." />
                            <p className="pt-4 font-medium text-base leading-6 text-white text-center">Grow your awareness and discover new places.</p>
                        </div>
                        <div className="flex flex-col s-laptop:!basis-[28%]   tablet:basis-full mobile:basis-full h-auto mb-12"> 
                            <img className="w-fill" src={(WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" ) + ftPagefeatures2} alt="Picture of a map with a path starting in a park and ending in a metropolitan area" />
                            <p className="pt-4 font-medium text-base leading-6 text-white text-center">Enrich your experience of familiar places and confidently explore the unfamiliar.</p>
                        </div>
                        <div className="flex flex-col s-laptop:!basis-[28%]   tablet:basis-full mobile:basis-full h-auto mb-12"> 
                            <img className="w-fill" src={(WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" ) + ftPagefeatures3} alt="Picture on the left is a map of Amsterdam with 6 points each with numbers one through six in them. The Right has a picture of a river in the city with buildings on both sides." />
                            <p className="pt-4 font-medium text-base leading-6 text-white text-center">Run it in the background for a rich ambient experience.</p>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------------------------------------------------------------------------------------------------------------------ */}
                <div className="flex flex-col w-full h-auto bg-white py-28 
                                tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-10">
                    <div className="flex flex-row flex-wrap justify-around w-full h-auto">
                        <div className="flex flex-col s-laptop:!basis-[30%]  tablet:basis-full mobile:basis-full h-auto py-10">
                            <div className="flex items-center justify-center h-48">
                                <img className="w-36" src={(WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" ) + spatialAudio} alt="Illustration of a sphere with headphones in the center and audio heading in all directions towards the headphones" />
                            </div>
                            <h2 className="w-fit bg-transparent py-6 font-semibold text-orange text-xl" >What is spatial audio?</h2>
                            <p className="font-work-sans text-dark-grey">Soundscape calls out landmarks in relation to you, letting you connect with your environment naturally and more intuitively without getting in the way of what you’re doing or who you’re with.</p>
                        </div>
                        <div className="flex flex-col s-laptop:!basis-[30%]  tablet:basis-full mobile:basis-full h-auto py-10"> 
                            <div className="flex justify-center items-center h-48">
                                <img className="w-56" src={(WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" ) + beaconFeature} alt="Illustration of a bank with a location icon and sound waves coming from it" />
                            </div> 
                            <h2 className="w-fit bg-transparent py-6 font-semibold text-orange text-xl" >Setting a beacon</h2>
                            <p className="font-work-sans text-dark-grey">Once you set the audio beacon to a destination, you can put the phone away and walk. Soundscape will call out roads and intersections through your headphones, putting you in control of how you want to get there.</p>
                        </div>
                        <div className="flex flex-col s-laptop:!basis-[30%]  tablet:basis-full mobile:basis-full h-auto py-10"> 
                            <div className="flex justify-center items-center h-48">
                                <img className="w-56" src={(WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" ) + buildings} alt="Illustration of a city with audio waves coming outof the sky line. Under the city is three icons, a location icon, direction icon and geolocation icon" />
                            </div> 
                            <h2 className="w-fit bg-transparent py-6 font-semibold text-orange text-xl" >What is spatial audio?</h2>
                            <p className="font-work-sans text-dark-grey">My Location, Around Me, and Ahead of Me buttons help build a picture of where you are and what’s around you. “Around Me” will call out four points of interest in a 360-degree sweep, and “Ahead of Me” calls out five items in front of you.</p>
                        </div>
                        <div className="flex flex-col s-laptop:!basis-[30%]  tablet:basis-full mobile:basis-full h-auto py-10">
                            <div className="flex items-center justify-center h-48">
                                <img className="w-56" src={(WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" ) + wayFinding} alt="Illustration of a person walking with a long can near a bus stop. Audio waves are coming from the bus stop" />
                            </div>
                            <h2 className="w-fit bg-transparent py-6 font-semibold text-orange text-xl" >Wayfinding</h2>
                            <p className="font-work-sans text-dark-grey">Unlike step-by-step instructions, sounds guide you a more natural way to move through spaces and find places on your own terms.</p>
                        </div>
                        <div className="flex flex-col s-laptop:!basis-[30%]  tablet:basis-full mobile:basis-full h-auto py-10"> 
                            <div className="flex justify-center items-center h-48">
                                <img className="w-36" src={(WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" ) + bgApp} alt="Illustration of a phone screen with logo and tiles" />
                            </div> 
                            <h2 className="w-fit bg-transparent py-6 font-semibold text-orange text-xl" >Running in the background</h2>
                            <p className="font-work-sans text-dark-grey">Soundscape can be used as a stand-alone app, or it can complement other navigational aids by running in the background, helping build a richer ambient awareness of your surroundings.</p>
                        </div>
                        <div className="flex flex-col s-laptop:!basis-[30%]  tablet:basis-full mobile:basis-full h-auto py-10"> 
                            <div className="flex justify-center items-center h-48">
                                <img className="w-40" src={(WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" ) + OpenStreetmap} alt="Illustration of Open Street Maps Logo, A partially folded map with a large spyglass infornt of it" />
                            </div> 
                            <h2 className="w-fit bg-transparent py-6 font-semibold text-orange text-xl" >OpenStreetMap</h2>
                            <p className="font-work-sans text-dark-grey">Soundscape uses <a target="_blank" href="https://www.openstreetmap.org/#map=5/38.007/-95.844"><span className="underline">OpenStreetMap</span> <span class="screen-reader-only">(opens in a new tab)</span></a> data, which is a rich and constantly enhanced community-generated mapping platform.</p>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    );
}

export default FeaturesPage;