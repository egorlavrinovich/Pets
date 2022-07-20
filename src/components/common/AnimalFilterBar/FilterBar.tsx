import React from 'react';
// @ts-ignore
import cat from '../../../Assets/ico/cat.ico'
// @ts-ignore
import dog from '../../../Assets/ico/dog.ico'
// @ts-ignore
import fish from '../../../Assets/ico/fish.ico'
// @ts-ignore
import bird from '../../../Assets/ico/bird.ico'
// @ts-ignore
import rat from '../../../Assets/ico/rat.ico'

const FilterBar = () => {
    return (
        <div className='wrapper-filter-bar'>
            <div className='filter-bar'>
                <div className='cats'><div className='name'>Кошки</div><div className="svg"><img src={cat}/></div></div>
                <div className='dogs'><div className='name'>Собаки</div><div className="svg"><img src={dog}/></div></div>
                <div className='rats'><div className='name'>Грызуны</div><div className="svg"><img src={rat}/></div></div>
                <div className='fish'><div className='name'>Рыбки</div><div className="svg"><img src={fish}/></div></div>
                <div className='ferrets'><div className='name'>Птицы</div><div className="svg"><img src={bird}/></div></div>
            </div>
        </div>
    );
};

export default FilterBar;