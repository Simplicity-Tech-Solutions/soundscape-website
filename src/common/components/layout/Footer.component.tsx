import type { JSX, Component } from 'solid-js';
import { createSignal, For, Show } from 'solid-js';
/* ^^ Solid JS Imports Above ^^ */
import { FiMenu } from 'solid-icons/fi'
import { IoClose } from 'solid-icons/io'
//import { SoundscapeLogoImg } from '../../../utils/media.ts';
import SoundscapeLogoImg from "../../../assets/images/Soundscape_Logo.svg"


const Footer: Component = () => {

    const [headerItems, setHeaderItems] = createSignal([
        { name: 'Privacy Policy', link: 'https://ialabs.ie/privacy-policy/', target: '_blank', JSX: ( <span class="screen-reader-only">(opens in a new tab)</span> ) },
      ]);
  return (
    <footer className="flex flex-row justify-between py-8 bg-soundscape-dark-grey text-soundscape-white
        2xl:px-16 xl:px-16 lg:px-16 md:px-16 sm:px-8 xs:px-8">
        <div className="flex flex-row">©{new Date().getFullYear()} Soundscape Community</div>
        <div className="2xl:flex xl:flex lg:hidden m:hidden sm:hidden xs:hidden"> 
            <For each={headerItems()}>
                {(element, i) => {
                    return (
                        <a target={element.target} className="flex h-10 w-auto text-soundscape-white text-center items-center text-base px-4 mx-3 cursor-pointer rounded-header-btn hover:bg-soundscape-dark-blue " href={element.link} key={i()}>
                            {element.name}
                            {element.JSX}
                        </a>
                    )
                }}
            </For>
        </div>
    </footer>
  );
}

export default Footer;