import "./Content.scss";
interface IContent {
    name: string;
    content: string;
    description?: string;
}
 const Content = ({name,content}: IContent) => {
    return(
    <div>
        <h4>مرحبا بك في {name}</h4>
        <h1 className="font-bold text-white">{content}</h1>
        <p className="text-gray-500 font-thin">بسم الله الرحمن الرحيم الحمدلله رب العاليمن الرحمن الرحيم مالك يوم الدين اياك نعبد واياك نعين</p>
    </div>
)
  };
  
  export default Content;
  