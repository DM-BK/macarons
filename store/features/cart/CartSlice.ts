import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CartItemsType = {
    [key: string]: number
}

type CartType = {
    cartItems: CartItemsType
    totalQuantity: number
}

const initialState: CartType = {
    cartItems: {},
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addItem: (state, {payload}: PayloadAction<number>) => {
            state.totalQuantity += 1
            const checkItem = state.cartItems[payload]

            if (checkItem) {
                state.cartItems[payload] += 1
            } else {
                state.cartItems[payload] = 1
            }
        },
        removeItem: (state, {payload}: PayloadAction<number>) => {
            const checkItem = state.cartItems[payload]
            if (checkItem === 1) {
                delete state.cartItems[payload]
            } else {
                state.cartItems[payload] -= 1
            }
            state.totalQuantity -= 1
        },
        deleteItem: (state, {payload}: PayloadAction<number>) => {
            const checkItem = state.cartItems[payload]
            delete state.cartItems[payload]
            state.totalQuantity -= checkItem
        }
    }
})

export const {removeItem, addItem, deleteItem} = cartSlice.actions
export default cartSlice.reducer