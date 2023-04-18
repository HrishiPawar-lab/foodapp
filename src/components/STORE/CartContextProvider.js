import React, { useReducer, useState } from 'react'
import CartContext from './cart-context';

const cartReducer = (state, actions) => {
    if (actions.type === 'ADD') {
        const newTotalAmount = state.totalAmount + (actions.item.price * actions.item.amount)
        const existingCartItemIndex = state.items.findIndex((x) => x.id === actions.item.id)
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: +(actions.item.amount) + +(existingCartItem.amount)
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat(actions.item);
        }
        return {
            items: updatedItems,
            totalAmount: newTotalAmount,
        }
    }
    if (actions.type === "REMOVE") {
        const existingCartItemIndex = state.items.findIndex((x) => x.id === actions.id)
        const existingCartItem = state.items[existingCartItemIndex];
        var updatedTotal = state.totalAmount - existingCartItem.price;
        let updatedItems;
        let updatedItem;

        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== actions.id);
        }
        if (existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                amount: +(existingCartItem.amount) - 1
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }
        if(existingCartItem.amount <= 0 ){
            updatedTotal = 0;
            var updatedTotal = 0;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotal,
        }
    }
}
const initialCartState = {
    items: [],
    totalAmount: 0,
}
function CartContextProvider(props) {
    const [cartState, dispatchCart] = useReducer(cartReducer, initialCartState)

    const addToCartHandler = (item) => {
        dispatchCart({ type: "ADD", item: item })
    }
    const removeFromCartHandler = (id) => {
        dispatchCart({ type: "REMOVE", id: id })
    }
    return (
        <CartContext.Provider value={{
            items: cartState.items,
            totalAmount: cartState.totalAmount,
            addToCart: addToCartHandler,
            removeFromCart: removeFromCartHandler,

        }}>
            {
                props.children
            }
        </CartContext.Provider>
    )
}

export default CartContextProvider
