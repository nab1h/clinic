import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";
import type { IconType } from "react-icons";
import AddressPage from "../ui/AddressPage";
import CardContent from "../ui/CardContact";

interface IClinicData {
  phone: string;
  address: string;
  email: string;
  google_maps: string;
  working_hours: string;
}

interface IContactItem {
  icon: IconType;
  address: string;
  sizeIcone: number;
}

const ContactPage: React.FC = () => {
  const { clinicSlug } = useParams<{ clinicSlug: string }>();
  const [clinicData, setClinicData] = useState<IClinicData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClinic = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/api/${clinicSlug}/settings`;
        const res = await axios.get(url);
        setClinicData(res.data);
      } catch (err) {
        console.error("خطأ في جلب بيانات العيادة:", err);
      } finally {
        setLoading(false);
      }
    };

    if (clinicSlug) fetchClinic();
  }, [clinicSlug]);

  // بناء الـ contactData ديناميكياً من الـ API
  const contactItems: IContactItem[] = clinicData
    ? [
        { icon: FaPhone,         address: clinicData.phone,         sizeIcone: 24 },
        { icon: FaMapMarkerAlt,  address: clinicData.address,       sizeIcone: 24 },
        { icon: FaEnvelope,      address: clinicData.email,         sizeIcone: 24 },
        { icon: FaClock,         address: clinicData.working_hours, sizeIcone: 24 },
      ]
    : [];

  return (
    <div className="py-20" id="contact">
      <AddressPage address={"اتصل بنا"} title={"هل لديك سؤال ؟"} />

      {loading ? (
        <div className="flex justify-center items-center py-16">
          <div className="w-10 h-10 border-4 border-[#00bcd4] border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 rounded-xl">
            {contactItems.map((item) => (
              <CardContent
                key={item.address}
                icon={item.icon}
                address={item.address}
                sizeIcone={item.sizeIcone}
              />
            ))}
          </div>

          {/* خريطة Google Maps من الـ API */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-lg h-80 w-full">
            <iframe
              src={clinicData?.google_maps}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ContactPage;