import "./Address.scss";
interface IProps{
    address: string;
    title: string;
    color?: "white" | "cyan";
}
const AddressPage = ({address, title, color = "cyan"}:IProps) =>{
    return(
        <div className="address-wropper">
            <h5 className={color === "white" ? "text-white" : "text-cyan"}>{address}</h5>
            <h1 className="font-bold">{title}</h1>
        </div>
    )
}
export default AddressPage;