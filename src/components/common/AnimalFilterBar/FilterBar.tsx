import React, {useState, FC, useEffect} from 'react';
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
// @ts-ignore
import discount from '../../../assets/ico/discont.ico'
import classNames from "classnames";
import {ICategories} from "../../../types/types";
import {useAppDispatch, useAppSelector} from "../../../hooks/Reduxhooks";
import {addCategories, changeCategory} from "../../../Redux/CateggriesSlice";
import {useDispatch} from "react-redux";
const FilterBar:FC = () => {
    const [active,setactive] = useState('discount')
    const Categories:ICategories[] = [{
        type:'discount',
        name:"Акции",
        url:discount
    },{
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
        }]
    const dispatch=useDispatch() // Добавляем по дефолту категории животных
    useEffect(()=>{
        dispatch(addCategories(Categories))
    },[])
    useEffect(()=>{dispatch(changeCategory(active))},[active]) // меняем категорию животных
    const categories = useAppSelector(state=>state.categories.categories)
    return (
        <div className='wrapper-filter-bar'>
            <div className='filter-bar'>
                {categories.map((item,index)=><div key={index} onClick={()=>setactive(item.type)} className={classNames(`${item.type}`,{'active':active===item.type})}><div className='name'>{item.name}</div><div className="svg"><img src={item.url} alt={item.name}/></div></div>)}
            </div>
        </div>
    );
};

export default FilterBar;