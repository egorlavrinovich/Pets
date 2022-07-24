import React, {useState,ReactNode} from 'react';
import 'rc-slider/assets/index.css';
// @ts-ignore
import Slider from 'rc-slider'
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const InputRange = () => {
    const [value,setvalue] = useState('170')
    const [state,setstate] = useState<string>('0')
    const [range,setrange] = useState([0,100])
    const onHandleChange = (e:React.ChangeEvent<HTMLInputElement>) => setvalue(e.target.value);
    const onChangeRange = (e:any)=> setrange(e)
    return (
        <div className='input-range-wrapper'>
            <Range
                marks={{
                    100: `$ 100`,
                    500: `$ 500`
                }}
                min={100}
                max={500}
                defaultValue={[200, 300]}
                // @ts-ignore

                tipFormatter={value => `$ ${value}`}
                tipProps={{
                    placement: "top",
                    visible: true
                }}
            />
            <div>{`Цена до: ${value} руб`}</div>
            <input value={value} type='range' min={0} max={170} onChange={(e)=>onHandleChange(e)} />
        </div>
    );
};

export default InputRange;