import type { IconType } from "react-icons"
import "./CardService.scss";
interface IProps{
    icon: IconType;
    address: string;
    desc: string;
    sizeIcone: number;
    colorIcon: string;
}
const CardService = ({icon:Icon, address, desc ,colorIcon ,sizeIcone} : IProps)=>{
    return(
        <div className="flex flex-colum items-center card-wriper">
                <div className="oval">
                    <Icon className="Icon" size={sizeIcone} style={{color : colorIcon}} />
                </div>
                <h4>{address}</h4>
                <p className="text-gray-500">{desc}</p>
        </div>
)};
export default CardService;