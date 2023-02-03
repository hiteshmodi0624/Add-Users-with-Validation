import styles from "./User.module.css"
import Card from "../UI/Card/Card"
function User(props){
    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map((element)=>
                    (<li>{element.UserName} ({element.Age} years old)</li>)
                )}
            </ul>
        </Card>
    )
}
export default User