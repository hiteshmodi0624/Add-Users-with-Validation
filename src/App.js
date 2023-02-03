import { Fragment, useState } from 'react';
import UserInputForm from "./components/users/UserInputForm"
import User from './components/users/User'

function App() {
  const [Users,AddUsers]=useState([]);
  function newEntry(user){
    AddUsers((prevUsers)=>[...prevUsers,user])
  }
  
  return (
    <Fragment>
      <UserInputForm newEntry={newEntry}/>
      <User users={Users}/>
    </Fragment>
  );
}

export default App;
