import "./App.css";
import ButtonArrow from "./components/ui/ButtonArrow";
import CardService from "./components/ui/CardService";
import Content from "./components/ui/content/Content";
// import BlogCard from "./components/ui/BlogCard";
import { FaUserDoctor } from "react-icons/fa6";
import TestimonialCard from "./components/ui/TestimonialCard";
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
      <TestimonialCard
        testimonials={[
          {
            id: 1,
            name: "Patient Name",
            profession: "Profession",
            image: "https://picsum.photos/300/200",
            review: "Dolores sed duo clita tempor justo dolor et stet lorem...",
          },
          {
            id: 2,
            name: "أحمد محمد",
            profession: "مهندس",
            image: "https://picsum.photos/300/201",
            review: "خدمة ممتازة جداً وتجربة رائعة...",
          },
          {
            id: 1,
            name: "Patient Name",
            profession: "Profession",
            image: "https://picsum.photos/300/200",
            review: "Dolores sed duo clita tempor justo dolor et stet lorem...",
          },
          {
            id: 2,
            name: "أحمد محمد",
            profession: "مهندس",
            image: "https://picsum.photos/300/201",
            review: "خدمة ممتازة جداً وتجربة رائعة...",
          },
          {
            id: 1,
            name: "Patient Name",
            profession: "Profession",
            image: "https://picsum.photos/300/200",
            review: "Dolores sed duo clita tempor justo dolor et stet lorem...",
          },
          {
            id: 2,
            name: "أحمد محمد",
            profession: "مهندس",
            image: "https://picsum.photos/300/201",
            review: "خدمة ممتازة جداً وتجربة رائعة...",
          },
        ]}
      />
      {/* <BookingForm title="احجز معادك">
        <Input name="name" placeholder="الاسم" label="الاسم" type="text" required={true} />
      </BookingForm> */}
      {/* <BlogCard
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
        
      /> */}
    </>
  );
}
export default App;
