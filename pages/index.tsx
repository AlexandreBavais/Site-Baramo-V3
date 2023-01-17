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
import { useRef, useState } from 'react';
import TeamSection from '../src/components/TeamSection';
import Link from 'next/link';

export default function Home() {

  const NavbarRef = useRef<any>(null);
  const Footer = useRef<any>(null);
  const HomeRef = useRef<any>(null);
  const WeAreRef = useRef<any>(null);
  const ServicesRef = useRef<any>(null);
  const CreationsRef = useRef<any>(null);
  const EquipeRef = useRef<any>(null);
  const ContactRef = useRef<any>(null);

  const [showMenu, setShowMenu] = useState(false)

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


      <div ref={NavbarRef} className={tw`flex flex-col w-full items-center px-10 justify-between sticky top-0 ${css({ "backdrop-filter": "blur(25px)" })} z-20`}>
        <div className={tw`flex flex-row h-[10vh] justify-between items-center w-full`}>
          <div className={tw`flex flex-row items-center space-x-4 cursor-pointer`}> <img src="/images/logo.svg" alt="logo baramo" />
            <p className={tw`font-medium text-xl text-black`} onClick={() => { scrollTo(HomeRef) }}>BARAMO</p>
          </div>
          <div className={tw`hidden lg:flex flex-row items-center space-x-10 text-black`}>
            <div className={tw`cursor-pointer`} onClick={() => { scrollTo(WeAreRef) }}>À PROPOS</div>
            <div className={tw`cursor-pointer`} onClick={() => { scrollTo(ServicesRef) }}>SERVICES</div>
            <div className={tw`cursor-pointer`} onClick={() => { scrollTo(CreationsRef) }}>CRÉATIONS</div>
            <div className={tw`cursor-pointer`} onClick={() => { scrollTo(EquipeRef) }}>ÉQUIPE</div>
            <div className={tw`text-[#9747FF] cursor-pointer`} onClick={() => { scrollTo(ContactRef) }}>CONTACT</div>
          </div>
          <div onClick={() => setShowMenu(!showMenu)} className={tw`flex lg:hidden flex-row items-center space-x-10 text-black cursor-pointer`}><img className={tw`h-5 w-5`} src={showMenu ? '/images/CrossIcon.png' : '/images/MenuIcon.png'} /></div>
        </div>
        {showMenu && <div className={tw`flex top-[10vh] justify-center items-center lg:hidden w-full ${css({ "backdrop-filter": "blur(25px)" })} z-30`}>
          <div className={tw`flex flex-col items-center text-black`}>
            <div className={tw`cursor-pointer p-5`} onClick={() => { scrollTo(WeAreRef); setShowMenu(false) }}>À PROPOS</div>
            <div className={tw`cursor-pointer p-5`} onClick={() => { scrollTo(ServicesRef); setShowMenu(false) }}>SERVICES</div>
            <div className={tw`cursor-pointer p-5`} onClick={() => { scrollTo(CreationsRef); setShowMenu(false) }}>CRÉATIONS</div>
            <div className={tw`cursor-pointer p-5`} onClick={() => { scrollTo(EquipeRef); setShowMenu(false) }}>ÉQUIPE</div>
            <div className={tw`text-[#9747FF] cursor-pointer p-5`} onClick={() => { scrollTo(ContactRef); setShowMenu(false) }}>CONTACT</div>
          </div>
        </div>}
      </div>



      <div ref={HomeRef} className={tw`flex flex-col md:flex-row w-full h-auto md:h-[90vh] md:px-10 text-9xl items-center text-black`}>
        <div className={tw`hidden md:flex h-full items-end pb-10 `}> <img src="/images/scroll.svg" alt="barre de scroll" /> </div>
        <div className={tw`pt-10 md:pt-0 px-10 md:px-20 sm:max-w-[60%]`}>
          <h1 className={tw`text-4xl md:text-9xl`}> CRÉONS LA</h1>
          <h1 className={tw`text-4xl md:text-9xl text-right`}>MEILLEURE </h1>
          <h1 className={tw`text-4xl md:text-9xl text-[#9747FF]`}> EXPERIENCE </h1>
          <p className={tw`text-base text-gray-400 mt-8`}> Vous accompagner dans tous vos projets pour vous permettre de toucher et développer votre audience plus facilement.  </p>

        </div>

        <div>
          <img src="/images/boule.svg" alt="" />
        </div>

      </div>
      <div className={tw`flex w-full pl-20 pt-20`}>
        <img src="/images/separateur.png" alt="" />
      </div>
      <div ref={WeAreRef} className={tw`flex flex-col md:flex-row pt-10 md:pt-0 w-full h-auto md:h-[90vh] text-8xl md:items-center text-black`}>

        <div className={tw`absolute`}>
          <img className={tw`h-[90vh]`} src="/images/bulleback.svg" alt="" />
        </div>
        <div className={tw`px-20 md:max-w-[60%] z-10`}>
          <h2 className={tw`text-4xl md:text-9xl`}>QUI SOMMES NOUS</h2>
          <p className={tw`text-base text-gray-500 mt-8`}> Une équipe de choc ! Ajoutons un peu plus de précision. Nous pourrons vous apporter une amélioration de votre image de marque grâce à notre Graphic Designer Senior. Par la suite, lors de la création de votre site, un UX/UI Designer (User Experience et User Interface) pourra mettre en place une interface web à votre image, grâce à son expertise. Ce travail étant fait, il est temps de créer ce fameux site web ! Une équipe de deux ingénieurs informaticiens, avec un grand bagage de projets à leurs actifs, pourront gérer une bonne intégration et le bon fonctionnement du site Web. Mais n’oublions pas l’un des points important, le bon référencement de votre site Web (SEO) qui sera géré par un expert SEO, vous permettant de toucher plus facilement votre audience.
            <br />Une équipe, mais pas seulement des amis passionnés par leurs métiers avant tout.  </p>
          <div onClick={() => { scrollTo(CreationsRef) }} className={tw`flex flex-row items-center space-x-10 cursor-pointer mt-8`}>
            <p className={tw`font-bold text-black text-lg`}> DÉCOUVRIR NOS CRÉATIONS</p>
            <img src="/images/fleche.png" alt="" />
          </div>
        </div>
        <div className={tw`flex items-center justify-center`}>
          <img className={tw`w-[90%]`} src="/images/imageteam.png" alt="image de l'équipe" />
        </div>
      </div>
      <div className={tw`flex w-full pl-20 pt-20`}>
        <img src="/images/separateur.png" alt="" />
      </div>

      <div ref={ServicesRef} className={tw`flex flex-col pt-10 sm:pt-0 w-full h-auto md:h-[90vh] text-8xl justify-evenly text-black`}>
        <div className={tw`px-20 md:max-w-[60%]`}>
          <h2 className={tw`text-4xl md:text-9xl`}>NOS SERVICES</h2>
          <p className={tw`text-base text-gray-500 mt-8`}> Nous proposons des services à la hauteur de vos envies, alliant qualité, rapidité, mais surtout en restant à votre écoute.  </p>

        </div>
        <div className={tw`flex w-full justify-evenly flex-col md:flex-row items-center md:space-x-10 text-black text-lg px-10`}>
          <div className={tw`flex flex-col items-center space-y-8`}>
            <Lottie className={tw`h-48`} animationData={DesignLottie} loop={true} />
            <h3 className={tw`text-2xl`}>DESIGN</h3>
            <p className={tw`text-base text-center text-gray-500`}> Logo, Charte graphique, Web Design, créations personnalisées pour vos réseaux sociaux, et bien d’autres ! Notre équipe de designers peut répondre à vos envies vous proposant leurs expertises et créant des designs à votre image.  </p>

          </div>
          <div className={tw`flex flex-col items-center space-y-8`}>
            <Lottie className={tw`h-48`} animationData={DevLottie} loop={true} />
            <h3 className={tw`text-2xl`}>DEVELOPPEMENT</h3>
            <p className={tw`text-base text-center text-gray-500`}> Site vitrine, E-commerce, application mobile, ou tout autre projet. Notre équipe d’ingénieurs en développement vous apportera qualité et rapidité. Avec la meilleure expérience utilisateur, pour que l’interface de votre site web soit accessible et facilement compréhensible par tous.   </p>

          </div>
          <div className={tw`flex flex-col items-center space-y-8`}>
            <Lottie className={tw`h-48`} animationData={SeoLottie} loop={true} />
            <h3 className={tw`text-2xl`}>SEO</h3>
            <p className={tw`text-base text-center text-gray-500`}> Les utilisateurs ont du mal à vous trouver ou le trafic sur votre site web est faible ? Laissez notre expert référencement s’occuper d’amélioration de votre contenu et de votre trafic.  </p>

          </div>
          <div className={tw`flex flex-col items-center space-y-8`}>
            <Lottie className={tw`h-48`} animationData={BlockLottie} loop={true} />
            <h3 className={tw`text-2xl`}>BLOCKCHAIN</h3>
            <p className={tw`text-base text-center text-gray-500`}> Si votre projet requiert la technologie de la blockchain, que ce soit pour de la sécurisation de données, un projet cryptomonnaie ou NFT, ou n'importe quel autre besoin, nous saurons vous accompagner dans le développement. </p>

          </div>
        </div>
      </div>
      <div className={tw`flex w-full pl-20 pt-20`}>
        <img src="/images/separateur.png" alt="" />
      </div>
      <div ref={CreationsRef} className={tw`flex flex-col pt-10 lg:pt-0 w-full h-auto lg:h-[90vh] text-8xl justify-evenly text-black`}>

        <div className={tw`absolute right-0`}>
          <img className={tw`h-[90vh]`} src="/images/bulleback2.svg" alt="" />
        </div>
        <div className={tw`px-20 md:max-w-[60%]`}>
          <h2 className={tw`text-4xl md:text-9xl`}>NOS CRÉATIONS</h2>
          <p className={tw`text-base text-gray-500 mt-8`}> Découvrez quelques idées de notre travail. </p>
          <div className={tw`flex flex-row items-center space-x-10 cursor-pointer mt-8`}>
          </div>
        </div>
        <div className={tw`flex flex-col lg:flex-row justify-evenly items-center`}>
          <CreationCard image="/images/bu-s.jpg" titre="BRANDING" offset={0} />
          <CreationCard image="/images/olw.jpg" titre="WEB SITE" offset={75} />
          <CreationCard image="/images/bu-v1.png" titre="UX/UI DESIGN" offset={0} />
          <CreationCard image="/images/cryptoflower.png" titre="CRYPTO WEBSITE" offset={75} />
          <CreationCard image="/images/facelight.jpg" titre="ILLUSTRATION" offset={0} />
        </div>

      </div>
      <div className={tw`flex w-full pl-20 pt-20`}>
        <img src="/images/separateur.png" alt="" />
      </div>
      <div ref={EquipeRef} className={tw`flex flex-col pt-10 lg:pt-0 w-full h-auto md:h-[90vh] text-8xl justify-evenly text-black px-20`}>
        <TeamSection />

      </div>
      <div className={tw`flex w-full pl-20 pt-20`}>
        <img src="/images/separateur.png" alt="" />
      </div>
      <div ref={ContactRef} className={tw`flex flex-col w-full h-auto min-h-[90vh] md:h-[90vh] text-8xl justify-evenly text-black px-20`}>
        <ContactSection />
      </div>

      <div ref={Footer} className={tw`flex w-full h-[10vh] items-center px-10 justify-between sticky top-0 z-20`}>
        <div className={tw`flex flex-row items-center space-x-4 cursor-pointer`} onClick={() => { scrollTo(HomeRef) }}> <img src="/images/logo.svg" alt="logo baramo" />
        </div>
        <div className={tw`flex flex-row items-center space-x-10 text-black`}>
          <Link href='/terms' className={tw`cursor-pointer`}>Mentions Légales</Link>
          <Link href='/privacy' className={tw`cursor-pointer`}>Politiques de Confidentialités</Link>

        </div>

      </div>
    </div>

  )
}
