import "./CardService.scss";
import { descSlice } from "../../../until";

interface IProps {
  id: number;
  address: string;
  desc: string;
  image: string;
}

const CardService = ({ id, address, desc, image }: IProps) => {
  return (
    <div className="flex flex-col items-start card-wriper group relative overflow-hidden bg-[var(--color-bg-light)] rounded-xl">
      <div className="h-80 w-full rounded-t-2xl overflow-hidden">
        <img
          src={image}
          alt={address}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col items-start gap-3 w-full text-right py-5 px-4">
        <h4 className="text-[var(--color-black)] font-bold text-lg cursor-pointer hover:text-[var(--color-primary)] transition-colors duration-200">
          {address}
        </h4>
        <p className="text-gray-500 leading-relaxed text-sm">
          {descSlice(desc, 120)}
        </p>

        <a
          href={`/services/${id}`}
          className="mt-2 inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold text-white bg-[var(--color-primary)] hover:opacity-90 transition-opacity duration-200"
        >
          تفاصيل
          <span className="text-base">←</span>
        </a>
      </div>
    </div>
  );
};

export default CardService;
