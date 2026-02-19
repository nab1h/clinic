import "./App.css";
// import AddressPage from "./components/ui/AddressPage";
// import CircleIcon from "./components/ui/CircleIcon";
import CardService from "./components/ui/CardService";
import Content from "./components/ui/content/Content";
import { FaUserDoctor } from "react-icons/fa6";

function App() {
  return (
    <>
      <Content
        name="العشماوي"
        content="بسم الله الرحمن الرحيم مالك يوم الدين"
      />
      <CardService icon={FaUserDoctor} address="الطوارئ" desc="بسم الله الرحمن الرحيم الحمدلله رب العالمين " colorIcon="white" sizeIcone={56}/>
    </>
  );
}
export default App;
