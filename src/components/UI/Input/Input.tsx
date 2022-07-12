import React,{FC} from 'react';

interface IInput{
    type:string;
    placeholder:string;
    value?:string|any;
    onChange?:React.ChangeEventHandler | undefined;
}

const Input:FC<IInput> = ({type,placeholder,value,onChange}) => {
    return (
        <input value={value} type={type} placeholder={placeholder} onChange={onChange}/>
    );
};

export default Input;