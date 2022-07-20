import {configureStore} from '@reduxjs/toolkit'
import Categories from '../CateggriesSlice'
const store = configureStore({
    reducer:{
        categories:Categories
    }
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch