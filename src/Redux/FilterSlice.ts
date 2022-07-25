import {createSlice, PayloadAction} from "@reduxjs/toolkit";



const initialState ={
    range:[0,500]
}

const FilterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        addRange(state,action:PayloadAction<[]>){
            state.range=[...action.payload]
        }
    }
})

export const {addRange} = FilterSlice.actions

export default FilterSlice.reducer