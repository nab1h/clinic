import BookingForm from "../ui/BookingForm";
import Button from "../ui/Button";
import Content from "../ui/content/Content";
interface IProps {}
const BookingPage: React.FC<IProps> = () => {
    return (
      <div className="bg-[var(--color-primary)] min-h-screen -mx-16 px-8 px-16 py-16" id="booking">
        <div className="grid grid-cols-1 md:grid-cols-10 items-center gap-10 h-full">
          <div className="md:col-span-5 flex flex-col items-start text-right">
            <Content
              name="مرحبا بك في الامانة"
              content="بسم الله الرحمن الرحيم الحمدلله رب العالمين الرحمن الرحيم مالك يوم الدين"
              className="w-full text-right"
              colorTitle="white"
              style={{ color: "var(--color-black)" }}
            />
            <div className="flex flex-wrap gap-4 mt-10">
              <Button variant="primary" className="font-bold bg-[var(--color-black)] text-white">
                مكالمة هاتفية
              </Button>
              <Button variant="outline" className="font-bold text-[var-(--color-black)] hover:bg-[var(--color-black)] hover:text-white border-[var(--color-black)]">
                إتصل بنا
              </Button>
            </div>
          </div>

          <div className="md:col-span-5 w-full">
            <BookingForm title="احجز معادك بكل سهوله" />
          </div>
  
        </div>
      </div>
    );
  };
  
  export default BookingPage;
