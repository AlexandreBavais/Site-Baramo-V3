import { tw, css } from 'twind/css';
const Teamsection = (props: any) => {
  return (
    <div className={tw`px-20 max-w-[60%]`}>
      <h2>LA TEAM</h2>
      <div className={tw`text-2xl text-black mt-8`}> LUCAS RAMADOUR </div>
      <div className={tw`text-sm text-black mt-8`}> CLEMENT MOLLER </div>
      <div className={tw`text-xl text-black mt-8`}> ALEXANDRE BAVAIS</div>
    </div>

  )


}

export default Teamsection