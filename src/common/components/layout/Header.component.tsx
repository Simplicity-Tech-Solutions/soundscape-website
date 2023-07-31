import type { JSX, Component } from 'solid-js';
import { createSignal, For, Show } from 'solid-js';
/* ^^ Solid JS Imports Above ^^ */
import { FiMenu } from 'solid-icons/fi'
import { IoClose } from 'solid-icons/io'
//import { SoundscapeLogoImg } from '../../../utils/media.ts';
import SoundscapeLogoImg from "../../../assets/images/Soundscape_Logo.svg"


const Header: Component = () => {


  const [headerItems, setHeaderItems] = createSignal([
    { name: 'Features', link: '/features' },
    { name: 'Privacy Policy', link: 'https://ialabs.ie/privacy-policy/' },
  ]);

  const [showNavDropdown, setShowNavDropdown] = createSignal(true);
 


  return (
   <>
      <header className="flex h-header w-full fixed top-0 left-0 z-50 py-4 items-center justify-between bg-soundscape-blue-bg 
                           2xl:px-16 xl:px-16 lg:px-16 md:px-16 sm:px-8 xs:px-8"  style={{ boxShadow: '0 0px 15px #000' }}> 
        {/* Start of Header Identity Section */}
        <div className="flex h-full w-auto">
          <img className="h-16 w-16" src={ (WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" )  + SoundscapeLogoImg}  alt="Soundscape for Everyone Logo"/>
          <div className="flex-col w-auto px-4
                          2xl:flex xl:flex lg:flex md:flex sm:flex xs:hidden">
            <h1 className="w-full text-center text-soundscape-white text-2xl">Soundscape</h1>
            <h2 className="w-full text-center text-soundscape-white text-sm">for Everyone</h2>
          </div>
        </div>
        {/* End of Header Identity Section */}

        {/* Start of Header Link Section */}
        <div className="2xl:flex xl:flex lg:hidden m:hidden sm:hidden xs:hidden"> 
          <For each={headerItems()}>
            {(element, index) => {
              return (
                <a className="flex h-10 w-auto text-soundscape-white text-center items-center text-base px-4 mx-3 cursor-pointer rounded-header-btn hover:bg-soundscape-white hover:text-soundscape-dark-blue " href={element.link as string} key={index}>
                  {element.name}
                </a>
              )
            }}
          </For>
        </div>
        {/* End of Header Link Section */}

        <Show when={showNavDropdown()}
          fallback={<IoClose title="Close Navigation Menu"  className="2xl:hidden xl:hidden lg:flex md:flex sm:flex xs:flex text-white" style={{ 'cursor': 'pointer'}} color="#fff" fill="#fff" size={"2.5rem"}  onClick={() => { setShowNavDropdown(true)}} />}
        >
          <FiMenu aria-label="Image of a Hamburger Menu" aria-describedby="hamburger-menu" title="Navigation Menu Icon" className="2xl:hidden xl:hidden lg:flex md:flex sm:flex xs:flex text-white" style={{ 'cursor': 'pointer'}} color="#fff" fill="#fff" size={"2.5rem"} onClick={() => { setShowNavDropdown(false)}} />
          <p id="hamburger-menu" className="hidden">Hamburger Menu Image</p>
        </Show>
      </header>
      
      <Show when={!showNavDropdown()}
        fallback={<></>}
      >
        <nav className="flex flex-col h-auto w-full fixed top-[90px] left-0 z-50 py-4 items-center justify-between bg-soundscape-white
                           2xl:px-8 xl:px-8 lg:px-8 md:px-8 sm:px-4 xs:px-4 2xl:hidden xl:hidden lg:flex m:flex sm:flex xs:flex"  style={{ boxShadow: '0 15px 25px #222' }}> 
          <For each={headerItems()}>
            {(element, i) => {
                return (
                  <a className={`flex h-10 w-fill-available text-stone-200 text-left text-xl font-bold items-center py-12 px-8 mx-3 cursor-pointer hover:text-soundscape-orange 
                                    ${ i() === 0 ? '' : 'border-t-2 border-t-stone-200' }`} href={element.link as string}  key={i()}>
                    {element.name}
                  </a>
                )
              }}
            </For>
        </nav>
      </Show>
   </>
  );
};

export default Header;
