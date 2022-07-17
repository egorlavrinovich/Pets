import React from 'react';
import Header from "../components/common/Header/header";
import '../SCSS/style.scss'
import Adversting from "../components/common/Adversting/Adversting";

const Main = () => {
    return (
        <div className='main-wrapper'>
            <div className="main-container">
                <div className="header"><Header/><div className="adversting"><Adversting/></div></div>
            </div>
        </div>
    );
};

export default Main;