import React, {useEffect, useState} from 'react';
import {TelephoneFill, Clock, CartFill, CartX, Cart2} from "react-bootstrap-icons";
import {Card} from "react-bootstrap";

const WorkTime = () => {
    const [CopyNumber,SetCopyNumber] = useState(false)
    if(CopyNumber){
        setTimeout(()=>{SetCopyNumber(false)},600)
    }
    return (
        <div className='adversting-wrapper'>
            <div className='worktime'><Clock/> Время работы: 9.00-19.00</div>
            <div className='contacts' onClick={() => {navigator.clipboard.writeText('+375292284213');SetCopyNumber(!CopyNumber)}}><div className='phone'><TelephoneFill/>Тел.: +375(29) 228-42-13 </div> {
                CopyNumber&&<span className='copy'>Скопировано</span>}</div>
            <div className='delivery'><Cart2/> Доставка: от 35руб.</div>
        </div>
    );
};

export default WorkTime;