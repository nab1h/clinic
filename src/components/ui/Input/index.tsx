import type { ChangeEvent } from 'react';
import './Input.scss';

interface IProps{
name: string;
  type: string;
  placeholder: string;
  label: string;
  required?: boolean;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({name,type,placeholder,label,required,value,onChange} : IProps)=>{
    return(
        <div className="input-wrapper">
            <label htmlFor={name}>{label}</label>
            <input
                key={name}
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Input;
