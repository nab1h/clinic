
import { faqs } from "../../data";
import FAQAccordion from "../ui/FAQAccordion";

interface IProps {}
const QAPage: React.FC<IProps> = () => {
  return (
    <div className="mt-20">
      <div className="row">
            <div className="col-1">
                <FAQAccordion faqs={faqs} />
            </div>
      </div>
    </div>
    );
};
export default QAPage;