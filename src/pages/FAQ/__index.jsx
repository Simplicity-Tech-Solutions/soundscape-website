import { createSignal } from 'solid-js';
import logo from '../../assets/logo.svg';
import styles from '../../App.module.css';
import Header from '../../common/components/layout/Header.component.tsx';
import Footer from '../../common/components/layout/Footer.component.tsx';

import Accordion from '../../common/components/accordion';

function SupportPage() {


  const [accordionData, setAccordionData] = createSignal([
    {
      title: 'Is Soundscape Community available on both Android and Apple devices? ',
      content: `At this time, the Soundscape Community app is only available on iOS for Apple iPhones. However, it is our plan to bring it to Android devices as soon as possible. Please join our Discord community for regular updates.`,
      link: "https://discordapp.com/channels/1114629295277625394/1122577762092339201",
      linkText: "Join our Discord community for regular updates"
    },
    {
      title: 'How do I find it in the App store? ',
      content: `Search for ‘Soundscape Community’ `
    },
    {
      title: 'What does the new icon look like? ',
      content: `A navy blue background with three vertical bars in blue, red and white, under an overarching white line and zig zag lines underneath, simulating soundwaves`
    },
    {
      title: 'Is the functionality different from the previous version? ',
      content: `It works in the same way and the layout, icons, map and labels are in the same locations. There is additional functionality in the new version that enables an existing Soundscape user to access to access their pre-made (authored) routes and import them into the Soundscape Community app. `
    },
    {
      title: 'Does the search function work as previously?',
      content: `The search bar is still located at the top of the screen and we have replaced what Microsoft Soundscape had and integrated Soundscape Community with Apple’s map kit, so you will find the search results appear in exactly the same way. `
    },
    {
      title: 'Will it be rolled out to all regions?',
      content: `For launch, we are planning to roll out Soundscape Community to the regions Soundscape was already available in, with the addition of Spain. Our intention is to release it in as many countries as possible very soon thereafter.`
    },
    {
      title: 'Why did it change?',
      content: `Microsoft made a financial decision to no longer support the app so it was going to be discontinued and removed from the App Store. The Consortium and original developers of Soundscape worked together to re-launch the app in the current version. `
    },
    {
      title: 'Can I use this app instead of maps for navigation?',
      content: `Soundscape is a 3D audio map of the world. It provides information on your surroundings. It can be used for navigation but it does not give step by step directions between points as do the traditional navigation apps. It can, however, be used in conjunction with existing navigations apps and devices and you will find that it helps to create a richer experience through greater awareness of what is around you.`
    },
    {
      title: 'Can I use this app instead of a mobility aid?',
      content: `No, it does not replace a mobility aid, but it can be used alongside your existing aid. `
    },
    {
      title: 'Do I have to use headphones?',
      content: `It is not a requirement to use headphones. However, it is necessary to wear stereo headphones to benefit from the 3D sound capabilities of the app. It is recommended by O&M instructors that headphones should be bone conducting or worn in transparency mode. `
    },
    {
      title: 'Is it safe to wear headphones?',
      content: `When headphones are bone conducting or worn in transparency mode it is possible to still hear background environmental noise, which is an essential part of safe travel. `
    },
    {
      title: 'Can I put my phone in my pocket or bag and still use Soundscape?',
      content: `If you use headphones, you can put your phone away and the app will track your movement so you will still hear soundmarks and beacons. If you wear head tracking headphones, you will hear the directions in relation to your head position. `
    },
    {
      title: 'What map does Soundscape Use, is it up to date?',
      content: `Soundscape uses data from Open Street Map, which is a rich and constantly enhanced community-generated mapping platform. This doesn't guarantee it is totally accurate especially about businesses that may have closed down or moved. However, because Open Street Map is community based, we would encourage everyone to update map data to help keep the information up to date as possible.  `
    },
    {
      title: 'How close does it bring me to a beacon/marker? ',
      content: `Soundscape will take you to within 3-10 metres of a beacon or marker. However, please note that due to environmental factors like weather, nearby buildings etc., the distance may vary.`
    },
    {
      title: 'Does it have a transport mode for use in cars / buses etc? ',
      content: `Yes, Soundscape takes into account the speed at which you may be travelling and will modify the callouts it presents based on that. For instance, when you are travelling in a vehicle it will prioritise landmarks over nearby points of interest. `
    },
    {
      title: 'How much battery does it use? ',
      content: `Soundscape has been designed for all day use and power consumption is one of the areas the team has paid special attention to. Also, it is possible to snooze the app and this will save on battery usage too.  `
    },
    {
      title: 'Do I have to pre-set beacons to get guidance?',
      content: `The app uses Open Street Maps so information about what’s around you will be pre-loaded. From the points of interest presented to you, you can select any one of them and place a virtual audio beacon, or soundmark, on it.  `
    },
    {
      title: 'Can I control how much information is called out? ',
      content: `Yes, you can - through the settings section. This will allow you to filter the different types of information you may be most interested in or which may be most relevant to you based on what you are doing and where you are. For example, there are filters for nearby places like shops and restaurants, and for intersection and transportation information.  `
    },
    {
      title: 'Where did the idea / concept come from? ',
      content: `Original Soundscape project began in 2014 and the app launched in 2018. The Consortium was formed after Microsoft announced that Soundscape would be discontinued in 2022.  `
    },
    {
      title: 'Who is the consortium?  ',
      content: `The Soundscape Community consortium is comprised of the following organisations from around the world, along with former members (including the co-founders of Microsoft Soundscape) and blind developers in the open-source community.  

 

      Capital Region Nordic Alliance (USA) – specialising in adaptive sports for persons with disabilities.  
      
      IA Labs (Ireland – affiliated with NCBI) 
      
      N-Vibe (outdoor navigation specialist using haptic technology, France) 
      
      National Council for the Blind Ireland (NCBI)  
      
      Okeenea - (specialists in indoor wayfinding, traffic light and pedestrian crossing integration, France) 
      
      ONCE – Spain 
      
      Pixelspace (US/Mexico) – creative design and UX agency.  
      
      Rensselaer Polytechnic Institute (Troy, NY, USA – we are working closely with their open-source programme) 
      
      Simplicity Tech Solutions (N Carolina, USA) `
    },
    {
      title: 'What does Soundscape mean?',
      content: `A soundscape is a sound or combination of sounds in any given environment. The aim of the Soundscape app is to provide a 3D audio experience  `
    },
    {
      title: 'What is a Soundmark? ',
      content: `This is a landmark or point of interest represented by a sound. `
    },
  ]);



  return (
    <>
      <Header />
        <div className="flex flex-col mt-header-gap py-16 gap-16
          tv:px-20 desktop:px-20 laptop:px-20 s-laptop:px-20 tablet:px-10 mobile:px-8 ">
            <div className="flex flex-col gap-3">
                <h2 className="section-title-orange w-fit bg-transparent py-2 font-bold text-orange text-3xl ">Support for Soundscape</h2>
                <p className="font-work-sans text-navy-blue font-medium  mr-16">Thoughtful input from our customers, partners and the community about the role technology can play to empower people has been a rewarding experience and enables us to continually improve our products and services. Please continue to share your experiences with Soundscape, and if you have questions or need additional support: </p>
                <li className="h-auto w-fit text-navy-blue py-3 text-laptop font-semibold" >Ask questions and share feedback—select to Soundscape Community by contacting the Disability Answer Desk (Link Coming Soon).</li> 
                <li className="h-auto w-fit text-navy-blue py-3 text-laptop font-semibold" >We want Soundscape Community to be accessible for everyone! Find accessibility support via the Disability Answer Desk (Link Coming Soon).</li> 
            </div>    
            <div className="flex flex-col gap-3">
              <h2 className="w-fit bg-transparent py-2 font-bold text-navy-blue text-2xl ">Frequently Asked Questions</h2>
              <div className="flex flex-col">
                <For each={accordionData()}>
                  {(element, i) => {
                    console.log(element);
                      return (
                        <Accordion title={element.title} content={element.content} link={element?.link} linkText={element?.linkText} />
                      )
                    }}
                </For>
              </div>
            </div>


        
        </div>

      <Footer/>
    </>

  );
}

export default SupportPage;
