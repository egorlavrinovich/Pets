import React, {useState,ReactNode} from 'react';
import 'rc-slider/assets/index.css';
// @ts-ignore
import Slider from 'rc-slider'
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const InputRange = () => {
    const [state,setstate] = useState<[]>([])
    const [range,setrange] = useState([0,100]) // Разобраться с ф-цие onBlur чтобы не было много перерендеров в стейт из за инпутаРа
    const [active,setactiv] = useState<boolean>(false)
    function Blur(act:boolean){
        setactiv(act)
    }
    console.log(active)
    return (
        <div className='input-range-wrapper'>
            <Range
                marks={{
                    0: `0 руб`,
                    500: `500 руб`
                }}
                min={0}
                max={500}
                defaultValue={[0, 500]}
                // @ts-ignore
                tipFormatter={value => `${value} руб`}
                tipProps={{
                    placement: "top",
                    visible: true,
                }}
                onChange={(e:[])=>setstate(e)}
                onBlur={()=>setactiv(!active)}
            />
        </div>
    );
};

export default InputRange;