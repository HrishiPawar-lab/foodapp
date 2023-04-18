import React, { Fragment, useContext,useEffect,useState } from 'react'
import classes from "./HeaderButton.module.css"
import CartIcon from '../CART/CartIcon'
import CartContext from '../STORE/cart-context'
function HeaderButton(props) {
    const CartCtx = useContext(CartContext)
    const [bump,setBump] = useState(false);
    console.log(CartCtx)
    const cartArray = CartCtx.items
    var NumberOfCartItems = cartArray.length;
    const btnClass = `${classes.button} ${bump? classes.bump : " " }`
    useEffect(()=>{
        if(CartCtx.items.length <= 0){
            return ; 
        }
        setBump(true)
        const timer =  setTimeout(()=>{
            setBump(false)
        },300)
        return ()=>{
            clearTimeout(timer)
        }
    },[CartCtx.items])
    return (
        <Fragment>
            <button className={btnClass} onClick={props.showCartHandler}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>
                    Your Cart
                </span>
                <span className={classes.badge}>
                    {NumberOfCartItems}
                </span>
            </button>
        </Fragment>
    )
}

export default HeaderButton
