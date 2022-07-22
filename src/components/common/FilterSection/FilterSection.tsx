import React from 'react';
import InputRange from "../../UI/Input/InputRange/InputRange";

const FilterSection = () => {
    const categories = ['Котята','']
    return (
        <div className='filter-wrapper-brands'>
            <div>Фильтр</div>

            <InputRange />
        </div>
    );
};

export default FilterSection;