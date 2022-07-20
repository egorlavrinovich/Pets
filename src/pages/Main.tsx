import React from 'react';
import Header from "../components/common/Header/header";
import '../SCSS/style.scss'
import WorkTime from "../components/common/WorkTime/WorkTime";
import FilterBar from "../components/common/AnimalFilterBar/FilterBar";


const Main = () => {
    return (
        <div className='main-wrapper'>
            <div className="main-container">
                <header className="header"><Header/><div className="adversting"><WorkTime/></div>
                <div><FilterBar/></div>
                </header>
            </div>
        </div>
    );
};

export default Main;