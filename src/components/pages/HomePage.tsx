import Button from "../ui/Button";
import Content from "../ui/content/Content";

interface IProps {}
const HomePage: React.FC<IProps> = () => {
  return (
    <div className="bg-blue-500 min-h-screen -mx-16 px-16">
      <div className="grid grid-cols-1 md:grid-cols-9">
        <div className="md:col-span-5 bg-blue-500 ">
            <Content
              name="الأمانة"
              content="بسم الله الرحمن الرحيم الحمدلله رب  العالمين الرحمن الرحيم مالك يوم الدين "
              className="w-full md:text-right"
            />
            <div className="flex text-right gap-5 ">
              <Button children="احجز معادك" variant="primary" />
              <Button children="إتصل بنا" variant="outline" />
            </div>
        </div>
        <div className="col-span-4 bg-green-500 hidden md:block">
          <h1>بسم الله الرحمن الرحيم</h1>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
