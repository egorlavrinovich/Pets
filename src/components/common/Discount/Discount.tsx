import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../hooks/Reduxhooks";
// @ts-ignore
import images from './Allimports'
import {ArrowLeft,ArrowRight} from 'react-bootstrap-icons'
import {UseAdv} from '../../../hooks/UseAdv'
const Discount = React.memo(() => {
    const [activeblock,setactiveblock] = useState(true)
    const Available = useAppSelector((state)=>state.categories.choosedcategory)
    useEffect(()=>{if(Available==='discount')setactiveblock(true)
    else setactiveblock(false)},[Available])
    const {activeimage,SpinBlock,Times} = UseAdv() // кастомный хук для рекламного баннера
    Times(images.length-1,4000,activeblock) // кастомный хук для рекламного баннера
    return (<>{activeblock&&
    <div className='discount-wrapper'>
        <div className='discount-block'>
            <div onClick={() => SpinBlock('left')} className='left-but'><ArrowLeft/></div>
            <div className='top-image'><img src={images[activeimage]}/></div>
            <div onClick={() => SpinBlock('right')} className='right-but'><ArrowRight/></div>
        </div>
        <div className='discount-goods'></div>
    </div>
}</>
    );
})

export default Discount;