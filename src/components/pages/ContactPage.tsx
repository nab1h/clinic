// import type { MdContactPage } from "react-icons/md";
import { contactData } from "../../data";
import AddressPage from "../ui/AddressPage"
import CardContent from "../ui/CardContact";

interface IProps {}
const ContactPage: React.FC<IProps> = () => {
  return (
    <div className="py-20" id="contact">
      <AddressPage address={"اتصل بنا"} title={"هل لديك سؤال ؟"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 rounded-xl">
        {contactData.map((item) => (
          <CardContent key={item.address} icon={item.icon} address={item.address} sizeIcone={item.sizeIcone} />
        ))}
      </div>
      <div className="mt-12 rounded-2xl overflow-hidden shadow-lg h-80 w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0!2d31.2357!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzM5LjgiTiAzMcKwMTQnMDguNSJF!5e0!3m2!1sar!2seg!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    </div>
  );
};
export default ContactPage;