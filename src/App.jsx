import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import './App.css'
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';

const App = () => {
    const [usersList,setUserList]=useState([]);
    const [userSelected,setUserSelected]=useState(null);

    useEffect(()=>{
      axios.get("https://users-crud1.herokuapp.com/users/")
        .then(res => setUserList(res.data))
    },[])

     const getUsers =()=>{
       axios.get("https://users-crud1.herokuapp.com/users/")
         .then(res => setUserList(res.data));
     }

     const selectUser =(user)=>{
        setUserSelected(user);
     }

     const deleteUser=(id)=>{
      axios.delete(`https://users-crud1.herokuapp.com/users/${id}`)
        .then(() => getUsers());
     }

     const deselectUser=()=>{
        setUserSelected(null);
     }

    return (
        <div className='App'>
            <UsersList 
            usersList={usersList}
            selectUser={selectUser}
            deleteUser={deleteUser}/>
            <UsersForm 
            getUsers={getUsers}
            userSelected={userSelected}
            deselectUser={deselectUser}
        />
        </div>
    );
};

export default App;