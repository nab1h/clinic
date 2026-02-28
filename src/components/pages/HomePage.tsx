import Button from "../ui/Button";
import Content from "../ui/content/Content";
import "./HomePage.scss";

interface IProps {}

const HomePage: React.FC<IProps> = () => {
  return (
    <div className="hero-section min-h-screen -mx-16 px-8 md:px-16 mt-20 flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-9 items-center w-full">
        <div className="md:col-span-6 flex flex-col items-center text-right text-center">
          <Content
            name="مرحبا بك في الامانة"
            content="بسم الله الرحمن الرحيم الحمدلله رب العالمين الرحمن الرحيم مالك يوم الدين"
            className="w-full text-right text-center"
          />
          <div className="flex flex-wrap gap-4 mt-10">
            <Button variant="primary" className="font-bold">احجز معادك</Button>
            <Button variant="outline" className="font-bold">إتصل بنا</Button>
          </div>
        </div>

        <div className="md:col-span-3 hidden md:block" />
      </div>
    </div>
  );
};

export default HomePage;