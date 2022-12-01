import { useState } from 'react';
import { tw, css } from 'twind/css';

const TeamSection = (props: any) => {

  const [selected, setSelected] = useState("")
  const [hovered, setHovered] = useState(false)

  const data: any = {
    "lucas" : {
      nom : "LUCAS RAMADOUR",
      image : "/images/bu-s.jpg",
      role : "Developpeur FullStack",
      description : "Super beau"
    },
    "alexandre" : {
      nom : "ALEXANDRE BAVAIS",
      image : "/images/bu-s.jpg",
      role : "Graphic Designer",  
      description : "A peur de sa propre ombre"
    },
    "clement" : {
      nom : "CLEMENT MOLLER",
      image : "/images/bu-s.jpg",
      role : "Developpeur Solidity",
      description : "Vendeur de beigner sur la plage"
    }
  }

  const displayedData = data[selected]

  return (<div>
    <div className={tw`hidden lg:flex flex-row`}>
      <div className={tw`px-20 w-[60%]`}>
        <h2>LA TEAM</h2>
        <div 
          onMouseEnter={()=>{ setSelected("lucas"); setHovered(true) }} 
          onMouseLeave={()=>{ setHovered(false) }} 
          className={tw`text-6xl mt-36 text-[#989898] hover:text-black transition-[color] ease-in-out duration-500`}
        > 
          LUCAS RAMADOUR 
        </div>
        <div
          onMouseEnter={()=>{ setSelected("clement"); setHovered(true) }} 
          onMouseLeave={()=>{ setHovered(false) }} 
          className={tw`text-6xl mt-8 pl-20 text-[#989898] hover:text-black transition-[color] ease-in-out duration-500`}
        > 
          CLEMENT MOLLER 
        </div>
        <div 
          onMouseEnter={()=>{ setSelected("alexandre"); setHovered(true) }}
          onMouseLeave={()=>{ setHovered(false) }} 
          className={tw`text-6xl mt-8 text-[#989898] hover:text-black transition-[color] ease-in-out duration-500`}
        > 
          ALEXANDRE BAVAIS
        </div>
      </div>
      <div className={tw`flex h-full justify-center items-center`}>
        <div className={tw`opacity-0 h-auto mt-10 flex flex-row space-x-6 ${hovered ? "opacity-100 mt-0" : ""} transition-all ease-in-out duration-500 `}>
          <img className={tw`h-56`} src={displayedData?.image} alt=''/>
          <div className={tw`flex flex-col`}>
            <div className={tw`text-2xl font-bold`}>{displayedData?.nom || ''}</div>
            <div className={tw`text-2xl`}>{displayedData?.role || ''}</div>
            <div className={tw`text-base text-gray-500`}>{displayedData?.description || ''}</div>
          </div>
        </div>
      </div>
    </div>
    <div className={tw`flex lg:hidden flex-col space-x-0`}>
      <div className={tw`px-10 w-full`}>
        <h2 className={tw`text-4xl md:text-9xl`}>LA TEAM</h2>
      </div>
      {
        Object.keys(data).map((key: string) => <div key={key} className={tw`flex flex-col sm:flex-row h-full justify-center items-center sm:items-start h-auto mt-10 sm:space-x-6`}>
          <img className={tw`h-56 w-56`} src={data[key]?.image} alt='' />
          <div className={tw`flex flex-col w-72`}>
            <div className={tw`text-2xl font-bold text-center sm:text-left`}>{data[key]?.nom || ''}</div>
            <div className={tw`text-2xl text-center sm:text-left`}>{data[key]?.role || ''}</div>
            <div className={tw`text-base text-gray-500 text-center sm:text-left`}>{data[key]?.description || ''}</div>
          </div>
        </div>)
      }

    </div>
    </div>
  )
}

export default TeamSection