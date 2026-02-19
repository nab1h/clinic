import type { IconType } from "react-icons";
import "./Circle.scss";

interface IProps {
    icon: IconType;
    colorIcon?: string;
    sizeIcon?: number;
    address: string;
    title: string;
}

const CircleIcon = ({ icon: Icon, colorIcon= "#13C5DD", sizeIcon = 48 , address, title}: IProps) => {
    return (
        <div className="circle">
            <Icon size={sizeIcon} style={{ color: colorIcon }} />
            <h4>{address}</h4>
            <h5>{title}</h5>
        </div>
    );
};
export default CircleIcon;
