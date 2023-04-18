import React from 'react'
import ReactDOM from 'react-dom';
import styles from "./Modal.module.css"
const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.hideCartHandler}/>
}

const ModalOverlay = (props) => {

    return (<div className={styles.modal}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}
const overlay = document.getElementById('overlay')
function Modal(props) {
    return (
        <div >
            {ReactDOM.createPortal(<Backdrop className={styles.backdrop} hideCartHandler={props.hideCartHandler}/>, overlay)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlay)}
        </div>
    )
}

export default Modal
