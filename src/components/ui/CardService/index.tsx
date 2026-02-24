import "./CardService.scss";
import { descSlice } from "../../../until";
interface IProps {
  address: string;
  desc: string;
  image: string;
}
const CardService = ({ address, desc, image }: IProps) => {
  return (
    <a href="#">
        <div className="flex flex-colum items-start card-wriper group relative overflow-visible bg-[var(--primary-gray-light)] rounded rounded-xl">
      <div className="h-80 w-full rounded-t-2xl overflow-hidden p-0 m-0">
        <img
          src={image}
          alt={address}
          className="w-full h-full object-cover p-0 m-0 "
        />
      </div>
      <div className="flex flex-col items-start gap-2 w-full text-right py-5 px-2">
        <h4 className="cursor-pointer hover:text-[var(--cyan)]">{address}</h4>
        <p className="text-gray-500 leading-relaxed">
          {descSlice(desc, 120)}
        </p>
      </div>
    </div>
    </a>
  );
};
export default CardService;
