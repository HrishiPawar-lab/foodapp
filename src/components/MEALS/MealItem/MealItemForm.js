import React, { useContext, useRef } from 'react';
import styles from "./MealItemForm.module.css"
import Input from '../../UI/Input';
import CartContext from '../../STORE/cart-context';
function MealItemForm(props) {
    const myInputRef = useRef()
    const CartCtx = useContext(CartContext)
    const formSubmitHandler = (event) => {
        event.preventDefault();
        const inputValue = myInputRef.current.value
        const inputValueAsNumber = +inputValue
        if (inputValueAsNumber === 0 || inputValueAsNumber < 0 || inputValueAsNumber > 5) {
            return;
        }
        props.addToCartHandler(inputValue)
    }
    return (
        <form className={styles.form} onSubmit={formSubmitHandler}>
            <Input
                ref={myInputRef}
                label="Amount"
                input={{
                    type: "number",
                    id: "number",
                    min: "1",
                    max: "5",
                    step: "1"
                }}
            />
            <button type='submit' > +Add</button>
        </form>
    )
}

export default MealItemForm
