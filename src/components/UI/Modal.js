import classes from './Modal.module.css';
import ReactDom from 'react-dom';

const protalElement = document.getElementById('overlays');

const Backdrop = (props) => {

    // props.onClose = modal.js > cart.js > app.js
    return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const Modal = (props) => {
    return (
        <>
            {/* props.onClose = props.onClose = cart.js > app.js */}
            {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, protalElement)}
            
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, protalElement)}
        </>
    );
};
export default Modal;
