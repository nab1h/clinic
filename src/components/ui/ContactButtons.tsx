import { FaWhatsapp, FaPhone } from "react-icons/fa";

const ContactButtons = () => {
  return (
    <>
      {/* واتساب */}
      <a
        className="fixed bottom-10 right-4 p-3 rounded-xl text-white hover:opacity-90 cursor-pointer transition-opacity z-50 shadow-lg"
        style={{ backgroundColor: "#13C5CC" }}
        href="https://wa.me/201001234567"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp size={26} />
      </a>

      {/* تليفون */}
      <a
        className="fixed bottom-24 right-4 p-3 rounded-xl text-white hover:opacity-90 cursor-pointer transition-opacity z-50 shadow-lg"
        style={{ backgroundColor: "#13C5CC" }}
        href="tel:+201001234567"
      >
        <FaPhone size={26} />
      </a>
    </>
  );
};

export default ContactButtons;