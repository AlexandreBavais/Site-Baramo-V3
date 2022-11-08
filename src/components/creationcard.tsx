import { tw, css } from 'twind/css';
const creationcard = (props: any) => {
    return (
        <div className={tw`border-black h-96 w-72 bg-white border-1 z-10 mt-[${props.offset}px] hover:mt-[${props.offset-40}px] transition-[margin] ease-in-out duration-500`}>
            <div className={tw`shadow-2xl shadow-black`}>
                <img className={tw`h-72 w-72 `} src={props.image} alt=""/>
                </div>
            <div className={tw`flex flex-row items-center h-24 justify-between px-4`}>
                <p className={tw`text-black font-medium text-xl`}>
                {props.titre}
            </p>  
            <img src="/images/buttoncrea.svg" alt=""/>
            </div>
        </div>
    )
}

export default creationcard