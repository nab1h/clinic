import type { IconType } from "react-icons"
import "./CardService.scss";
import ButtonArrow from "../ButtonArrow";
interface IProps{
    icon: IconType;
    address: string;
    desc: string;
    sizeIcone: number;
    colorIcon: string;
}
const CardService = ({icon:Icon, address, desc ,colorIcon ,sizeIcone} : IProps)=>{
    return(
        <div className="flex flex-colum items-center card-wriper group relative overflow-visible">
                <div className="oval">
                    <Icon className="Icon" size={sizeIcone} style={{color : colorIcon}} />
                </div>
                <h4>{address}</h4>
                <p className="text-gray-500 leading-relaxed antialiased">{desc}</p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
                    <ButtonArrow direction="right" />
                </div>
        </div>
)};
export default CardService;