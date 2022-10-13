import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState ={
    range:[0,500],
    filterCategories:[]
}

const FilterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        addRange(state,action:PayloadAction<[]>){
            state.range=[...action.payload]
        },
        addfilterCategories(state,action:PayloadAction<[]>){
            state.filterCategories=[...action.payload]
        }
    }
})

export const {addRange,addfilterCategories} = FilterSlice.actions

export default FilterSlice.reducer