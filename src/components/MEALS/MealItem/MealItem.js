import React, { Fragment, useContext } from 'react'
import styles from "./MealItem.module.css";
import MealItemForm from './MealItemForm';
import CartContext from '../../STORE/cart-context';
function MealItem(props) {
    const price = props.meal.price.toFixed(2)
    const CartCtx = useContext(CartContext)
    const addToCartHandler = amount => {
        CartCtx.addToCart({
            id:props.meal.id,
            name:props.meal.name,
            description:props.meal.description,
            price:props.meal.price,
            amount:amount
        })
    }
    return (
        <Fragment>
            <li className={styles.meal}>
                <div>
                    <h3>{props.meal.name}</h3>
                    <div className={styles.description}>{props.meal.description}</div>
                    <div className={styles.price}>{price}</div>
                </div>
                <div>
                    <MealItemForm meals={props.meal}  addToCartHandler={addToCartHandler} />
                </div>
            </li>
        </Fragment>
    )
}

export default MealItem
