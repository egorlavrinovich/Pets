import React, {useState} from 'react';
// @ts-ignore
import cats from '../../../assets/ico/cat.ico'
// @ts-ignore
import dogs from '../../../assets/ico/dog.ico'
// @ts-ignore
import fish from '../../../assets/ico/fish.ico'
// @ts-ignore
import bird from '../../../assets/ico/bird.ico'
// @ts-ignore
import rats from '../../../assets/ico/rat.ico'
import classNames from "classnames";
const FilterBar = () => {
    const [active,setactive] = useState('')
    const Categories = [{
        type:'cats',
        name:"Кошки",
        url:cats
    },
        {
            type:'dogs',
            name:"Собаки",
            url:dogs
        },{
            type:'rats',
            name:"Грызуны",
            url:rats
        },{
            type:'fish',
            name:"Рыбы",
            url:fish
        },{
            type:'bird',
            name:"Птицы",
            url:bird
        },

    ]
    return (
        <div className='wrapper-filter-bar'>
            <div className='filter-bar'>
                {Categories.map(item=><div onClick={()=>setactive(item.type)} className={classNames('cats',{'active':active==item.type})}><div className='name'>{item.name}</div><div className="svg"><img src={item.url}/></div></div>)}
            </div>
        </div>
    );
};

export default FilterBar;