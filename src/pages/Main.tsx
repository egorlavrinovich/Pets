import React from 'react';
import Header from "../components/common/Header/header";
import '../SCSS/style.scss'

const Main = () => {
    return (
        <div className='main-wrapper'>
            <div className="main-container">
                <div className="header"><Header/></div>
            </div>
        </div>
    );
};

export default Main;