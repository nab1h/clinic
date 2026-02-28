import type { IconType } from "react-icons"
import "./CardContact.scss";
interface IProps{
    icon: IconType;
    address: string;
    sizeIcone?: number;
}
const CardContent = ({icon:Icon, address ,sizeIcone= 24} : IProps)=>{
    return(
        <div className="flex flex-colum items-center card-wriper group relative overflow-visible rounded-xl">
                <div className="oval">
                    <Icon className="Icon" size={sizeIcone} style={{color : "white"}} />
                </div>
                <h6 className="text-black font-bold text-2xl">{address}</h6>
        </div>
)};
export default CardContent;