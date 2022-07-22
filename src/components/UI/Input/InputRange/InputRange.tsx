import React, {useState} from 'react';
import Slider from "rc-slider";
import FormRange from "react-bootstrap/FormRange";

const InputRange = () => {
    const [value,setvalue] = useState('0')
    const onHandleChange = (e:React.ChangeEvent<HTMLInputElement>) => setvalue(e.target.value)
    return (
        <div className='input-range-wrapper'>
            <div>{value}</div>
            <input value={value} type='range' min={0} max={170} onChange={(e)=>onHandleChange(e)} />


        </div>
    );
};

export default InputRange;