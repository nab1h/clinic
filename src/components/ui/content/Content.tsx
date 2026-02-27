import "./Content.scss";
interface IContent extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    content: string;
    description?: string;
    className?: string;
}
 const Content = ({name,content,className ="" ,...rest}: IContent) => {
    return(
    <div className={`content-wrapper ${className}`} {...rest}>
        <h4>مرحبا بك في {name}</h4>
        <h1 className="font-bold">{content}</h1>
        <p className="text-gray-500 font-thin mt-5">بسم الله الرحمن الرحيم الحمدلله رب العاليمن الرحمن الرحيم مالك يوم الدين اياك نعبد واياك نعين</p>
    </div>
)};
  export default Content;
  