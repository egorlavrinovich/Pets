import React from 'react';
import Input from "../../UI/Input/Input";
import {UseChangeInput} from '../../../hooks/UseChangeInput'
const Header = () => {
    const search = UseChangeInput()
    return (
        <div className='header-container'>
            <div className="logo"><img src='https://www.zootovar-spb.ru/assets/img/logo.png'/></div>
            <div className="search"><Input value={search.str} onChange={search.ChangeState} type='text' placeholder='Я ищу...'/></div>
            <div className="entrance">
                <div className="Enter">Вход</div>
                <div className="favotite">Избранное</div>
                <div className="basket">Корзина</div>
            </div>
        </div>
    );
};

export default Header;