import { FaLongArrowAltRight } from "react-icons/fa";

interface IProps {
    direction: 'right' | 'top' | 'down';
}
const ButtonArrow = ({ direction }: IProps) => {
    const getRotation = () => {
        switch (direction) {
            case 'right':
                return '0deg';
            case 'top':
                return '-90deg';
            case 'down':
                return '90deg';
            default:
                return '0deg';
        }
    };
    return (
        <button 
            style={{ transform: `rotate(${getRotation()})` }} 
            className="px-5 py-2 bg-[var(--primary-cyan)] rounded-xl text-white hover:opacity-90 cursor-pointer transition-opacity"
        >
            <FaLongArrowAltRight size={26} />
        </button>
    )
}
export default ButtonArrow;