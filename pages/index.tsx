import Head from 'next/head';
import { tw, css } from 'twind/css';
import styles from '../styles/Home.module.css';
import Lottie from "lottie-react";
import DesignLottie from '../public/lottie/design.json';
import DevLottie from '../public/lottie/dev.json';
import SeoLottie from "../public/lottie/seo.json";
import BlockLottie from "../public/lottie/block.json";
import CreationCard from "../src/components/creationcard";
import ContactSection from '../src/components/ContactSection';
import { useRef } from 'react';
import TeamSection from '../src/components/TeamSection';

export default function Home() {

  const NavbarRef = useRef(null);
  const Footer = useRef(null);
  const HomeRef = useRef(null);
  const WeAreRef = useRef(null);
  const ServicesRef = useRef(null);
  const CreationsRef = useRef(null);
  const EquipeRef = useRef(null);
  const ContactRef = useRef(null);

  const scrollTo = (ref: any) => {
    window.scrollTo({ top: ref.current.getBoundingClientRect().top + window.pageYOffset - (NavbarRef?.current?.clientHeight || 0), behavior: 'smooth' })
  }

  return (

    <div className={tw`flex flex-1 w-full h-full min-h-[100vh] flex-col ${css({ backgroundImage: "url('/images/back.svg')" })}`}>
      <Head>
        <title>Baramo</title>
        <meta name="description" content="Baramo est une entreprise française de développement informatique et de graphisme, pour vous accompagner dans votre projet." />
        <link rel="icon" href="/images/logo.svg" />
      </Head>


      <div ref={NavbarRef} className={tw`flex w-full h-[10vh] items-center px-10 justify-between sticky top-0 ${css({ "backdrop-filter": "blur(25px)" })} z-20`}>
        <div className={tw`flex flex-row items-center space-x-4 cursor-pointer`}> <img src="/images/logo.svg" alt="logo baramo" />
          <p className={tw`font-medium text-xl text-black`} onClick={() => { scrollTo(HomeRef) }}>BARAMO</p>
        </div>
        <div className={tw`flex flex-row items-center space-x-10 text-black`}>
          <div className={tw`cursor-pointer`} onClick={() => { scrollTo(WeAreRef) }}>WE ARE</div>
          <div className={tw`cursor-pointer`} onClick={() => { scrollTo(ServicesRef) }}>SERVICES</div>
          <div className={tw`cursor-pointer`} onClick={() => { scrollTo(CreationsRef) }}>CRÉATIONS</div>
          <div className={tw`cursor-pointer`} onClick={() => { scrollTo(EquipeRef) }}>ÉQUIPE</div>
          <div className={tw`text-[#9747FF] cursor-pointer`} onClick={() => { scrollTo(ContactRef) }}>CONTACT</div>
        </div>

      </div>

      <div ref={HomeRef} className={tw`flex w-full h-[90vh] px-10 text-9xl items-center text-black`}>
        <div className={tw`flex h-full items-end pb-10 `}> <img src="/images/scroll.svg" alt="barre de scroll" /> </div>
        <div className={tw`px-20 max-w-[60%]`}>
          <h1> WE BUILD</h1>
          <h1 className={tw`text-right`}> BETTER </h1>
          <h1 className={tw`text-[#9747FF]`}> EXPERIENCE </h1>
          <p className={tw`text-base text-gray-400 mt-8`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>

        </div>

        <div>
          <img src="/images/boule.svg" alt="" />
        </div>

      </div>
      <div className={tw`flex w-full pl-20 pt-20`}>
        <img src="/images/separateur.png" alt="" />
      </div>
      <div ref={WeAreRef} className={tw`flex w-full h-[90vh] text-8xl items-center text-black`}>

        <div className={tw`absolute`}>
          <img className={tw`h-[90vh]`} src="/images/bulleback.svg" alt="" />
        </div>
        <div className={tw`px-20 max-w-[60%]`}>
          <h2>QUI SOMMES NOUS</h2>
          <p className={tw`text-base text-gray-500 mt-8`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
          <div className={tw`flex flex-row items-center space-x-10 cursor-pointer mt-8`}>
            <p className={tw`font-bold text-black text-lg`}> DÉCOUVRIR NOS CRÉATIONS</p>
            <img src="/images/fleche.png" alt="" />
          </div>
        </div>
        <div>
          <img className={tw`w-[90%]`} src="/images/imageteam.png" alt="image de l'équipe" />
        </div>
      </div>
      <div className={tw`flex w-full pl-20 pt-20`}>
        <img src="/images/separateur.png" alt="" />
      </div>

      <div ref={ServicesRef} className={tw`flex flex-col w-full h-[90vh] text-8xl justify-evenly text-black`}>
        <div className={tw`px-20 max-w-[60%]`}>
          <h2>NOS SERVICES</h2>
          <p className={tw`text-base text-gray-500 mt-8`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>

        </div>
        <div className={tw`flex w-full justify-evenly flex-row items-center space-x-10 text-black text-lg px-10`}>
          <div className={tw`flex flex-col items-center space-y-8`}>
            <Lottie className={tw`h-48`} animationData={DesignLottie} loop={true} />
            <h3 className={tw`text-2xl`}>DESIGN</h3>
            <p className={tw`text-base text-center text-gray-500`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>

          </div>
          <div className={tw`flex flex-col items-center space-y-8`}>
            <Lottie className={tw`h-48`} animationData={DevLottie} loop={true} />
            <h3 className={tw`text-2xl`}>DEVELOPPEMENT</h3>
            <p className={tw`text-base text-center text-gray-500`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>

          </div>
          <div className={tw`flex flex-col items-center space-y-8`}>
            <Lottie className={tw`h-48`} animationData={SeoLottie} loop={true} />
            <h3 className={tw`text-2xl`}>SEO</h3>
            <p className={tw`text-base text-center text-gray-500`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>

          </div>
          <div className={tw`flex flex-col items-center space-y-8`}>
            <Lottie className={tw`h-48`} animationData={BlockLottie} loop={true} />
            <h3 className={tw`text-2xl`}>BLOCKCHAIN</h3>
            <p className={tw`text-base text-center text-gray-500`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>

          </div>
        </div>
      </div>
      <div className={tw`flex w-full pl-20 pt-20`}>
        <img src="/images/separateur.png" alt="" />
      </div>
      <div ref={CreationsRef} className={tw`flex flex-col w-full h-[90vh] text-8xl justify-evenly text-black`}>

        <div className={tw`absolute right-0`}>
          <img className={tw`h-[90vh]`} src="/images/bulleback2.svg" alt="" />
        </div>
        <div className={tw`px-20 max-w-[60%]`}>
          <h2>NOS CRÉATIONS</h2>
          <p className={tw`text-base text-gray-500 mt-8`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
          <div className={tw`flex flex-row items-center space-x-10 cursor-pointer mt-8`}>
          </div>
        </div>
        <div className={tw`flex flex-row justify-evenly`}>
          <CreationCard image="/images/bu-s.jpg" titre="BRANDING" offset={0} />
          <CreationCard image="/images/olw.jpg" titre="WEB SITE" offset={75} />
          <CreationCard image="/images/bu-v1.png" titre="UX/UI DESIGN" offset={0} />
          <CreationCard image="/images/cryptoflower.png" titre="UX/UI DESIGN" offset={75} />
          <CreationCard image="/images/facelight.jpg" titre="ILLUSTRATION" offset={0} />
        </div>

      </div>
      <div className={tw`flex w-full pl-20 pt-20`}>
        <img src="/images/separateur.png" alt="" />
      </div>
      <div ref={EquipeRef} className={tw`flex flex-col w-full h-[90vh] text-8xl justify-evenly text-black px-20`}>
        <TeamSection />

      </div>
      <div className={tw`flex w-full pl-20 pt-20`}>
        <img src="/images/separateur.png" alt="" />
      </div>
      <div ref={ContactRef} className={tw`flex flex-col w-full h-[90vh] text-8xl justify-evenly text-black px-20`}>
        <ContactSection />
      </div>

      <div ref={Footer} className={tw`flex w-full h-[10vh] items-center px-10 justify-between sticky top-0 z-20`}>
        <div className={tw`flex flex-row items-center space-x-4 cursor-pointer`}> <img src="/images/logo.svg" alt="logo baramo" />
          <p className={tw`font-medium text-xl text-black`} onClick={() => { scrollTo(HomeRef) }}>BARAMO</p>
        </div>
        <div className={tw`flex flex-row items-center space-x-10 text-black`}>
          <div className={tw`cursor-pointer`} onClick={() => { scrollTo(WeAreRef) }}>Mentions Légales</div>
          <div className={tw`cursor-pointer`} onClick={() => { scrollTo(ServicesRef) }}>Politiques de Confidentialités</div>
          <div className={tw`cursor-pointer`} onClick={() => { scrollTo(CreationsRef) }}>Nos créations</div>
          <div className={tw`cursor-pointer`} onClick={() => { scrollTo(EquipeRef) }}>Accueil</div>
          <div className={tw`text-[#9747FF] cursor-pointer`} onClick={() => { scrollTo(ContactRef) }}>CONTACT</div>
        </div>

      </div>
      </div>
    
  )
}
