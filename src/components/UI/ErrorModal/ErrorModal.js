import React,{Fragment} from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./ErrorModal.module.css"
import ReactDOM from "react-dom";

const Backdrop = (props)=>{
    return <div className={styles.backdrop} onClick={props.onConfirm}/>
}
const ModalOverlay = (props)=>{
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>Invalid Input</h2>
            </header>
            <div className={styles.content}>
                <p>{props.ErrorMessage}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    )
}
const ErrorState=(props)=>{
    return(
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm}/>,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal
                (<ModalOverlay 
                    onConfirm={props.onConfirm}
                    ErrorMessage={props.ErrorMessage}
                    />,
                document.getElementById("overlay-root")
            )}
        </Fragment>
    )
}
export default ErrorState