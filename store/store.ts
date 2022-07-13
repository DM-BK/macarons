import {configureStore, combineReducers} from "@reduxjs/toolkit";
import cart from './features/cart/CartSlice'

const rootReducer = combineReducers({
    cart
})

const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware()
    })
}

export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
