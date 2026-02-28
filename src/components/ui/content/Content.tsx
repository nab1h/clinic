import "./Content.scss";
interface IContent extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    content: string;
    description?: string;
    className?: string;
    colorTitle?: "white" | "cyan";
}
 const Content = ({ name, content, className = "", description, colorTitle, ...rest }: IContent) => {
    const colorTi = colorTitle === "white" ? "text-white" : "text-[var(--color-primary)]";
  
    return (
      <div className="content-wrapper">
        <h4 className={colorTi}>{name}</h4>
        <h1 className={`font-bold ${className} mt-4`} {...rest}>{content}</h1>
        <p className="mt-4 text-gray-500">{description}</p>
    </div>
)};
  export default Content;
  