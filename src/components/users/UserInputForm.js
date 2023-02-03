import styles from "./UserInputForm.module.css"
import React, { Fragment, useState, useRef } from "react"
import Button from "../UI/Button/Button.js"
import Card from "../UI/Card/Card";
import ErrorState from "../UI/ErrorModal/ErrorModal";
function UserInputForm(props){
    const UserName=useRef();
    const Age=useRef();
    
    const [Error,ChangeState]=useState({state:false,message:""});

    function onSubmit(event){
        event.preventDefault();
        const name=UserName.current.value;
        const UserAge=Age.current.value;
        
        if(name===""||UserAge==="")
            ChangeState({state:true,message:"Enter a valid name and age (non empty-values)."});
        else if(UserAge<=0)
            ChangeState({state:true,message:"Please enter a valid age(>0)."});
        else{
            props.newEntry({UserName:name,Age:UserAge});
            UserName.current.value="";
            Age.current.value="";
        }
    }
    const onConfirm=()=>{
        ChangeState({state:false,message:""});
    }
    return (
        <Fragment>
            {(Error.state)&&<ErrorState onConfirm={onConfirm} ErrorMessage={Error.message} />}
            <Card className={styles.input}>
                <form onSubmit={onSubmit}>
                    <label htmlFor="username">UserName</label>
                    <input type="text" id="username" name="UserName" ref={UserName}/>
                    <label htmlFor="age">Age(Years)</label>
                    <input type="number" id="age" name="Age" ref={Age}/>
                    <Button>Add User</Button>
                </form>
            </Card>
        </Fragment>
    )
}
export default UserInputForm