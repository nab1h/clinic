import { MdEmergency } from "react-icons/md";
import CircleIcon from "../ui/CircleIcon";
import Content from "../ui/content/Content";

interface IProps {}

const AboutPage: React.FC<IProps> = () => {
  return (
    <div className="min-height-[400px]" id="about">
      <div className="grid grid-cols-1 md:grid-cols-9 items-center gap-10">
        <div
          className="w-full md:col-span-3 rounded-xl overflow-hidden"
          style={{ height: "400px" }}
        >
          <img
            src="/img/about.jpg"
            alt="about"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-6 flex flex-col items-end text-right gap-6 w-full">
          <Content
            name="حولنا"
            content="بسم الله الرحمن الرحيم الحمدلله رب العالمين الرحمن الرحيم مالك يوم الدين"
            className="w-full text-right"
            style={{ color: "var(--color-black)" }}
            description="بسم الله الرحمن الرحيم مالك يوم الدين اياك نعبد واياك نستعين"
          />

          <div className="grid grid-cols-1 sm:grid-cols-4 place-items-center gap-6 w-full">
            <CircleIcon icon={MdEmergency} address="طوارئ" title="خدمة طوارئ 24 ساعة" />
            <CircleIcon icon={MdEmergency} address="طوارئ" title="خدمة طوارئ 24 ساعة" />
            <CircleIcon icon={MdEmergency} address="طوارئ" title="خدمة طوارئ 24 ساعة" />
            <CircleIcon icon={MdEmergency} address="طوارئ" title="خدمة طوارئ 24 ساعة" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
