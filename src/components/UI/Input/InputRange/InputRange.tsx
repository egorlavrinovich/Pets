import React, {useState, useEffect} from 'react';
import 'rc-slider/assets/index.css';
// @ts-ignore
import Slider from 'rc-slider'
import {useDispatch} from "react-redux";
import {addRange} from "../../../../Redux/FilterSlice";
import {UseChangeInput} from "../../../../hooks/UseChangeInput";
import Input from "../Input";
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const InputRange = React.memo(() => {
    const [state,setstate] = useState<any>([0,500]) // выбранная цена пользователем
    const [range,setrange] = useState([0,500]) // Диапазон цен
    const [active,setactiv] = useState<boolean>(false) // маркер наблюдение за ценой пользователя
    const dispatch=useDispatch()
    useEffect(()=>{
        // @ts-ignore
        dispatch(addRange(state)) // добавляем фильтр для цены
    },[active])
    const [example,setexample] = useState([0,100])
    console.log(example)
    return (
        <div className='input-range-wrapper'>
            {/*// @ts-ignore*/}
            <Input type='text' value={example[0]} onChange={(event)=>setexample([+event.target.value,...example.slice(1)])} placeholder=''/>
            {/*// @ts-ignore*/}
            <Input type='text' value={example[1]} onChange={(event)=>setexample([...example.splice(2,1),+event.target.value,])} placeholder=''/> //дописать функционал
            <Range
                value={state}
                marks={{
                    0: `0 руб`,
                    500: `500 руб`
                }}
                min={range[0]}
                max={range[1]}
                defaultValue={[0, 500]}
                onChange={(e:[])=>setstate(e)}
                onBlur={()=>setactiv(!active)}
            />
        </div>
    );
});

export default InputRange;