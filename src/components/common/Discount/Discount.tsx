import React, {useEffect, useMemo, useRef, useState} from 'react';
import {useAppSelector} from "../../../hooks/Reduxhooks";
// @ts-ignore
import images from './Allimports'
import {ArrowLeft,ArrowRight} from 'react-bootstrap-icons'
import {clearInterval} from "timers";
const Discount = React.memo(() => {
    const [activeblock,setactiveblock] = useState(false)
    const [activeimage,setactiveimage] = useState(0)
    const Timeout:any = useRef()
    const Available = useAppSelector((state)=>state.categories.choosedcategory)
    useEffect(()=>{if(Available==='discount')setactiveblock(true)
    else setactiveblock(false)},[Available])
    function SpinBlock(perem:string){
        switch (perem){
            case 'right':setactiveimage((x)=>x+1);clearTimeout(Timeout.current); break
            case 'left':setactiveimage((x)=>x-1);clearTimeout(Timeout.current);break
        }
    }
    // @ts-ignore
    useEffect(()=>{
        if(activeimage>6) setactiveimage(0)
        if(activeimage<0) setactiveimage(6)
        Timeout.current=setTimeout(()=>{setactiveimage((x)=>x+1)},2000)
        console.log(Timeout.current)
    },[activeimage])


    return (
        <div className='discount-wrapper'>
            <div className='discount-block'>
                <div onClick={()=>SpinBlock('left')} className='left-but'><ArrowLeft/></div>
                <div className='top-image'><img src={images[activeimage]}/></div>
                <div onClick={()=>SpinBlock('right')} className='right-but'><ArrowRight/></div>
            </div>
            <div className='discount-goods'></div>
        </div>
    );
})

export default Discount;