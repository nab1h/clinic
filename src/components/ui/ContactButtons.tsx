import { FaWhatsapp, FaPhone } from "react-icons/fa";
interface IProp{
  whatsapp: string  | undefined;
  number: string | undefined;
}

const ContactButtons: React.FC<IProp> = ({whatsapp, number}) => {
  return (
    <>
      {/* واتساب */}
      <a
        className="fixed bottom-10 right-4 p-3 rounded-xl text-white hover:opacity-90 cursor-pointer transition-opacity z-50 shadow-lg"
        style={{ backgroundColor: "#13C5CC" }}
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp size={26} />
      </a>

      {/* تليفون */}
      <a
        className="fixed bottom-24 right-4 p-3 rounded-xl text-white hover:opacity-90 cursor-pointer transition-opacity z-50 shadow-lg"
        style={{ backgroundColor: "#13C5CC" }}
        href={`tel:+${number}`}
      >
        <FaPhone size={26} />
      </a>
    </>
  );
};

export default ContactButtons;