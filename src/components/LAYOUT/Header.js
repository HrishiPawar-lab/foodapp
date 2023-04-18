import React, { Fragment } from 'react'
import HeaderButton from './HeaderButton'
import styles from "./Header.module.css"
function Header( props) {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderButton showCartHandler={props.showCartHandler} hideCartHandler={props.hideCartHandler} />
            </header>
            <div className={styles['main-image']}>
                <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </Fragment>
    )
}

export default Header
