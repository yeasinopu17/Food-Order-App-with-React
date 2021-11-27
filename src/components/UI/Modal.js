import classes from './Modal.module.css';
import ReactDom from 'react-dom';

const protalElement = document.getElementById('overlays');

const Backdrop = (props) => {
    return <div className={classes.backdrop} />;
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
            {ReactDom.createPortal(<Backdrop />, protalElement)}
            
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, protalElement)}
        </>
    );
};
export default Modal;
