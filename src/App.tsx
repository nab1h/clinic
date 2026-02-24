import "./App.css";
import ButtonArrow from "./components/ui/ButtonArrow";
import CardService from "./components/ui/CardService";
import Content from "./components/ui/content/Content";
import BlogCard from "./components/ui/BlogCard";
import { FaUserDoctor } from "react-icons/fa6";
// import Input from "./components/ui/Input";
// import BookingForm from "./components/ui/BookingForm";

function App() {
  return (
    <>
      <Content
        name="العشماوي"
        content="بسم الله الرحمن الرحيم مالك يوم الدين"
      />
      <CardService
        icon={FaUserDoctor}
        address="الطوارئ"
        desc="بسم الله الرحمن الرحيم الحمدلله رب العالمين "
        colorIcon="white"
        sizeIcone={56}
      />
      <ButtonArrow direction="right" />
      {/* <BookingForm title="احجز معادك">
        <Input name="name" placeholder="الاسم" label="الاسم" type="text" required={true} />
      </BookingForm> */}
      <BlogCard
        title="العشماوي"
        description="بسم الله الرحمن الرحيم مالك يوم الديبسم الله الرحمن الرحيم مالك يوم الديبسم الله الرحمن الرحيم مالك يوم الديبسم الله الرحمن الرحيم مالك يوم الديبسم الله الرحمن الرحيم مالك يوم الديبسم الله الرحمن الرحيم مالك يوم الديبسم الله الرحمن الرحيم مالك يوم الدي بسم الله الرحمن الرحيم مالك يوم الدين"
        image="https://picsum.photos/300/200"
        date="2026-02-22"
        author="العشماوي"
        views={100}
        comments={100}
        authetImage="https://picsum.photos/300/200"
        commentsList={[
          {
            id: 1,
            author: "العشماوي",
            authorImage: "https://picsum.photos/300/200",
            content: "بسم الله الرحمن الرحيم مالك يوم الدين",
            date: "2026-02-22",
          },
          {
            id: 1,
            author: "العشماوي",
            authorImage: "https://picsum.photos/300/200",
            content: "بسم الله الرحمن الرحيم مالك يوم الدين",
            date: "2026-02-22",
          },
          {
            id: 1,
            author: "العشماوي",
            authorImage: "https://picsum.photos/300/200",
            content: "بسم الله الرحمن الرحيم مالك يوم الدين",
            date: "2026-02-22",
          },
          {
            id: 1,
            author: "العشماوي",
            authorImage: "https://picsum.photos/300/200",
            content: "بسم الله الرحمن الرحيم مالك يوم الدين",
            date: "2026-02-22",
          },
        ]}
        
      />
    </>
  );
}
export default App;
