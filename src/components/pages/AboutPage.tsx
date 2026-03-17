import { useParams } from "react-router-dom";

import { FaUserMd, FaClock, FaAward, FaHeartbeat } from "react-icons/fa";
import CircleIcon from "../ui/CircleIcon";
import Content from "../ui/content/Content";
import type { Clinic } from "../../interfaces";
import { useEffect, useState } from "react";
import { getClinicAll } from "../../api/settings";
import LoadingScreen from "../LoadingScreen";

const AboutPage = () => {
  const { clinicSlug } = useParams<{ clinicSlug: string }>();
  const baseURL = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState<Clinic | null>(null);

  useEffect(() => {
    if (!clinicSlug) {
      setLoading(false);
      return;
    }
    getClinicAll(clinicSlug)
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [clinicSlug]);

  if (loading) return <LoadingScreen />;

  const features = [
    {
      icon: FaUserMd,
      address: "أطباء متخصصون",
      title: "فريق طبي ذو خبرة وكفاءة عالية في جميع التخصصات"
    },
    {
      icon: FaClock,
      address: "خدمة 24 ساعة",
      title: "نستقبل المرضى على مدار الساعة طوال أيام الأسبوع"
    },
    {
      icon: FaAward,
      address: "جودة عالية",
      title: "نلتزم بأعلى معايير الجودة في تقديم الخدمات الطبية"
    },
    {
      icon: FaHeartbeat,
      address: "رعاية شخصية",
      title: "نقدم رعاية فردية لكل مريض لضمان الراحة والشفاء"
    }
  ];

  return (
    <div className="min-h-[400px] my-20" id="about">
      <div className="grid grid-cols-1 md:grid-cols-9 items-center gap-10">
        <div
          className="w-full md:col-span-3 rounded-xl overflow-hidden"
          style={{ height: "400px" }}
        >
          <img
            src={`${baseURL}/storage/${data?.logo}`}
            alt="about"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-6 flex flex-col items-end text-right gap-6 w-full">
          <Content
            name="حولنا"
            content={data?.settings?.content || "عيادة متخصصة تقديم أفضل الخدمات الطبية"}
            className="w-full text-right"
            style={{ color: "var(--color-black)" }}
            description={data?.settings?.footer_text || "نسعى دائماً لتحقيق رضاكم وضمان صحتكم"}
          />

          <div className="grid grid-cols-1 sm:grid-cols-4 place-items-center gap-6 w-full">
            {features.map((feature, index) => (
              <CircleIcon
                key={index}
                icon={feature.icon}
                address={feature.address}
                title={feature.title}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;