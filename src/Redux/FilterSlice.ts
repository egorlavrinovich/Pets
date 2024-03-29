import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState ={
    range:[0,500],
    filterCategories:[],
    foodCategories:[]
} as any

const FilterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        addRange(state,action:PayloadAction<[]>){
            state.range=[...action.payload]
        },
        addfilterCategories(state,action:PayloadAction<any[]>){ // Логика сортировки критериев для поиска по группам
            if(!state.filterCategories.find((item:any)=>item.typeFilter===action.payload[0])){
                state.filterCategories=[...state.filterCategories,{typeFilter:action.payload[0],choosedCategory:[action.payload[1]]}]
            }
            else{
               state.filterCategories = [...state.filterCategories.map((item:any)=>{
                if(item.typeFilter===action.payload[0]){
                    if(item.choosedCategory.includes(action.payload[1])){
                        return {...item,choosedCategory:item.choosedCategory.filter((item:any)=>item!==action.payload[1])}
                    }
                    else{
                        return {...item,choosedCategory:[...item.choosedCategory,action.payload[1]]}
                    }
                }
                return item
               })] 
            }
        },
        addFoodCategories(state,action:PayloadAction<any[]>){
            if (state.foodCategories.length>1) state.foodCategories = action.payload
            else state.foodCategories = [...action.payload]
        }
    }
})

export const {addRange,addfilterCategories,addFoodCategories} = FilterSlice.actions

export default FilterSlice.reducer

