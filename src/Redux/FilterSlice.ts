import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState ={
    range:[0,500],
    filterCategories:[]
} as any

const FilterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        addRange(state,action:PayloadAction<[]>){
            state.range=[...action.payload]
        },
        addfilterCategories(state,action:PayloadAction<any[]>){
           state.filterCategories.map((item:any)=>{
            if (item.typeFilter === action.payload[0]){
                item={...item,choosedCategory:action.payload[1]}
            } 
           })
           state.filterCategories=[...state.filterCategories,{
                    typeFilter:action.payload[0],
                    choosedCategory:action.payload[1]
                }]
        }
    }
})

export const {addRange,addfilterCategories} = FilterSlice.actions

export default FilterSlice.reducer