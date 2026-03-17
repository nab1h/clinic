import FAQAccordion from "../ui/FAQAccordion";
interface IProps {}
const QAPage: React.FC<IProps> = () => {
  return (
    <div className="" id="qa">
      <div className="row mt-10">
            <div className="col-1">
                <FAQAccordion />
            </div>
      </div>
    </div>
    );
};
export default QAPage;
