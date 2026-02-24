import "./Address.scss";
interface IProps{
    address: string;
    title: string;
    color?: "white" | "cyan";
}
const AddressPage = ({address, title, color = "cyan"}:IProps) =>{
    return(

<div className="text-center mb-10">
<h2 className={`text-3xl font-bold text-[var(--black)] ${color === "white" ? "text-white" : "text-cyan"}`}>
 {address}
</h2>
<p className="text-[var(--primary-gray-dark)] mt-2 text-sm">
{title}
</p>
<div className="w-16 h-1 bg-[var(--primary-cyan)] rounded-full mx-auto mt-4" />
</div>
    )
}
export default AddressPage;