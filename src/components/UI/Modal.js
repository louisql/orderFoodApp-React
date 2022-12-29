import classes from './Modal.module.css'
import ReactDOM from 'react-dom'
import React from 'react'
/* 
    ReactDom used for portals - ! make sure to import from react-dom !
    Make sure to have import ReactDom and NOT { ReactDOM  } 
*/

const Backdrop = props =>{
    return(<div className={classes.backdrop} onClick={props.onClosePointer}/>)
}

const ModalOverlay = props =>{ 
    return (
    <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
    )

}

const portalElement = document.getElementById('overlays');
/*creating a helper/constant because it will be called twice  */

const Modal = props => {
    return(
        <>
            {ReactDOM.createPortal(<Backdrop onClosePointer={props.onClosePointer}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    )
}

export default Modal;