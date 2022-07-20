import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import {ICategories} from "../types/types";

type CategoryType = {
    categories:ICategories[];
    choosedcategory:string;
}

const initialState:CategoryType = {
    categories:[],
    choosedcategory:''
}

const CateggriesSlice = createSlice({
    name:'category',
    initialState,
    reducers:{
        addCategories(state,action:PayloadAction<ICategories[]>){
            state.categories=[...state.categories,...action.payload]
        },
        changeCategory(state,action:PayloadAction<string>){
            state.choosedcategory=action.payload
        }
    }
})
export const {addCategories,changeCategory} = CateggriesSlice.actions

export default CateggriesSlice.reducer