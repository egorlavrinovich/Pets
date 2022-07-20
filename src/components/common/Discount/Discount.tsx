import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../hooks/Reduxhooks";
// @ts-ignore
import images from './Allimports'
import {ArrowLeft,ArrowRight} from 'react-bootstrap-icons'
const Discount = React.memo(() => {
    const [activeblock,setactiveblock] = useState(false)
    const [activeimage,setactiveimage] = useState(1)
    const Available = useAppSelector((state)=>state.categories.choosedcategory)
    useEffect(()=>{if(Available==='discount')setactiveblock(true)
    else setactiveblock(false)},[Available])
    function SpinBlock(perem:string){
        switch (perem){
            case 'right':setactiveimage((x)=>x+1); break
            case 'left':setactiveimage((x)=>x-1);break
        }
    }
    setTimeout(()=>{
        setactiveimage((x)=>x+1)
    },6000)
    useEffect(()=>{
        if(activeimage>6) setactiveimage(0)
        if(activeimage<0) setactiveimage(6)

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