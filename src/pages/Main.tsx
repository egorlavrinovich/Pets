import React from 'react';
import Header from "../components/common/Header/header";
import '../SCSS/style.scss'
import Adversting from "../components/common/Adversting/Adversting";
import FilterBar from "../components/common/AnimalFilterBar/FilterBar";


const Main = () => {
    return (
        <div className='main-wrapper'>
            <div className="main-container">
                <div className="header"><Header/><div className="adversting"><Adversting/></div>
                <div><FilterBar/></div>
                </div>
            </div>
        </div>
    );
};

export default Main;