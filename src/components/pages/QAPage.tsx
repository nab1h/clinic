
import { faqs } from "../../data";
import FAQAccordion from "../ui/FAQAccordion";

interface IProps {}
const QAPage: React.FC<IProps> = () => {
  return (
    <div className="" id="qa">
      <div className="row mt-10">
            <div className="col-1">
                <FAQAccordion faqs={faqs} />
            </div>
      </div>
    </div>
    );
};
export default QAPage;