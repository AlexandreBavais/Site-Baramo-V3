import { useState } from 'react';
import { tw, css } from 'twind/css';

const TeamSection = (props: any) => {

  const [selected, setSelected] = useState("")
  const [hovered, setHovered] = useState(false)

  const data: any = {
    "lucas" : {
      nom : "LUCAS RAMADOUR",
      image : "/images/bu-s.jpg",
      description : "Descritpion"
    },
    "alexandre" : {
      nom : "ALEXANDRE BAVAIS",
      image : "/images/bu-s.jpg",
      description : "Descritpion"
    },
    "clement" : {
      nom : "CLEMENT MOLLER",
      image : "/images/bu-s.jpg",
      description : "Descritpion"
    }
  }

  const displayedData = data[selected]

  return (
    <div className={tw`flex flex-row `}>
      <div className={tw`px-20 w-2/3`}>
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
      <div className={tw`opacity-0 mt-10 flex flex-row space-x-6 ${hovered ? "opacity-100 mt-0" : ""} transition-all ease-in-out duration-500`}>
        <img className={tw`h-48`} src={displayedData?.image} alt=''/>
        <div className={tw`flex flex-col`}>
          <div className={tw`text-2xl font-bold`}>{displayedData?.nom || ''}</div>
          <div className={tw`text-2xl`}>{displayedData?.description || ''}</div>
        </div>
      </div>
    </div>
  )
}

export default TeamSection