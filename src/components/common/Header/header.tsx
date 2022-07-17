import React from 'react';
import Input from "../../UI/Input/Input";
import {UseChangeInput} from '../../../hooks/UseChangeInput'
import {HeartFill,Basket3Fill,PersonFill,Search} from 'react-bootstrap-icons'
import {Link} from 'react-router-dom'
const Header = () => {
    const search = UseChangeInput()
    return (
        <div className='header-container'>
            <div className="logo"><img src='https://www.zootovar-spb.ru/assets/img/logo.png'/></div>
            <div className="search">
                <div className='poisk'>
                <Input value={search.str} onChange={search.ChangeState} type='text' placeholder='Я ищу...'/>
                <div className='lupa'><Search/></div>
                </div>
            </div>
            <div className="entrance">
                <Link to='/login' className="Enter"><i><PersonFill size={24}/></i><div className='vhod'>Вход</div></Link>
                <div className="favotite"><i><HeartFill size={19}/></i><div className='fav'>Избранное</div></div>
                <div className="basket"><i><Basket3Fill size={22}/></i><div className='bask'>Корзина</div></div>
            </div>
        </div>
    );
};

export default Header;