import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setTotalPrice: (state) => {
            state.totalPrice = state.items.reduce((acc, currentValue) => {
                return acc + currentValue.price * currentValue.count;
            }, 0);
        },
        addToCart: (state, action) => {
            const foundItem = state.items.find(
                (item) =>
                    item.id === action.payload.id &&
                    item.size === action.payload.size &&
                    item.type === action.payload.type
            );

            if (foundItem) {
                foundItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }

            // if (foundItem && foundItem.type === action.payload.type) {
            //     if (foundItem.size === action.payload.size) {
            //         foundItem.count++;
            //     } else {
            //         state.items.push({
            //             ...action.payload,
            //             count: 1,
            //         });
            //     }
            // } else {
            //     state.items.push({
            //         ...action.payload,
            //         count: 1,
            //     });
            // }
        },
        removeFromCart: (state, action) => {
            state.items.filter((item) => item.cartId !== action.payload);
        },

        incrementItem: (state, action) => {
            const foundItem = state.items.find((item) => item.cartId === action.payload);
            foundItem.count++;
        },

        decrementItem: (state, action) => {
            console.log("action.payload", action.payload);
            const foundItem = state.items.find((item) => item.cartId === action.payload);
            console.log("foundItem", foundItem);
            if (foundItem.count <= 1) {
                state.items.filter((item) => item.cartId !== action.payload);
            } else {
                foundItem.count--;
            }
        },

        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

export const { addToCart, removeFromCart, clearCart, setTotalPrice, decrementItem, incrementItem } =
    cartSlice.actions;

export default cartSlice.reducer;
