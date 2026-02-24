import './Input.scss';

interface IProps{
    name: string;
    type: string;
    placeholder: string;
    label:string;
    required: boolean;
}

const Input = ({name,type,placeholder,label,required} : IProps)=>{
    return(
        <div className="input-wrapper">
            <label htmlFor={name}>{label}</label>
            <input
                key={name}
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
}

export default Input;
