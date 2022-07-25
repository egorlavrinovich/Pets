import {configureStore} from '@reduxjs/toolkit'
import Categories from '../CateggriesSlice'
import Filter from '../FilterSlice'
const store = configureStore({
    reducer:{
        categories:Categories,
        filter:Filter
    }
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch