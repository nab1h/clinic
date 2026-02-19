import "./App.css";
import CircleIcon from "./components/ui/CircleIcon";
import Content from "./components/ui/content/Content";
import { FaUserDoctor } from "react-icons/fa6";

function App() {
  return (
    <>
      <Content
        name="العشماوي"
        content="بسم الله الرحمن الرحيم مالك يوم الدين"
      />
      <CircleIcon icon={FaUserDoctor} colorIcon="#13C5CC" sizeIcon={48} address="الطوارئ" title="الخدمات"/>
    </>
  );
}

export default App;
