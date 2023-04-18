import React, { useContext } from 'react'
import styles from "./Cart.module.css"
import Modal from '../UI/Modal'
import CartContext from '../STORE/cart-context';
import CartItem from './CartItem';
function Cart(props) {
    const CartCtx = useContext(CartContext)
    const hasItems = CartCtx.items.length
    const totalAmount = `$ ${CartCtx.totalAmount.toFixed(2)}`
    const cartAddHandler = (item) => { CartCtx.addToCart({...item,amount:1})}
    const cartRemoveHandler = (id) => { CartCtx.removeFromCart(id) }
    const cartItems = <ul className={styles['cart-items']}>
        {CartCtx.items.map(item =>
            <CartItem name={item.name} price={item.price} amount={item.amount} onRemove={cartRemoveHandler.bind(null, item.id)} onAdd={cartAddHandler.bind(null, item)} />
        )
        }
    </ul>
    return (
        <div>
            <Modal hideCartHandler={props.hideCartHandler}>
                {cartItems}
                <div className={styles.total}>
                    <span>TOTAL AMOUNT</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={styles.actions}>
                    <button className={styles['button-alt']} onClick={props.hideCartHandler}>Close</button>
                    {hasItems > 0 && <button className={styles.button}>Order</button>}
                </div>
            </Modal>
        </div>
    )
}

export default Cart
