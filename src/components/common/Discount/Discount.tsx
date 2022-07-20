import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../hooks/Reduxhooks";
// @ts-ignore
import images from './Allimports'
import {ArrowLeft,ArrowRight} from 'react-bootstrap-icons'
const Discount = React.memo(() => {
    const [activeblock,setactiveblock] = useState(false)
    const [activeimage,setactiveimage] = useState(6)
    const Available = useAppSelector((state)=>state.categories.choosedcategory)
    useEffect(()=>{if(Available==='discount')setactiveblock(true)
    else setactiveblock(false)},[Available])
    return (
        <div className='discount-wrapper'>
            <div className='discount-block'>
                <div className='left-but'><ArrowLeft/></div>
                <div className='top-image'><img src={images[activeimage]}/></div>
                <div className='right-but'><ArrowRight/></div>
            </div>
            <div className='discount-goods'></div>
        </div>
    );
})

export default Discount;