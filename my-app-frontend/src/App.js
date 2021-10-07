import './App.css';
// import UsersContainer from './components/UsersContainer';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import  NavBar  from "./components/NavBar"
import  HomePage  from "./components/HomePage"
import Login from './components/Login';
import Friends from './components/Friends';
import Games from './components/Games';
import User from './components/User';

function App() {
  const [ users, setUsers] = useState([])

    const getUsers = () => {
        fetch("http://localhost:9292/users")
        .then(resp => resp.json())
        .then(usersData => setUsers(usersData))
      }

      useEffect(() => {
        fetch("http://localhost:9292/users")
          .then((res) => res.json())
          .then(setUsers)  
      }, [])

    
    // const renderNewUsers = (newUser) => {
    //   console.log(usersData)
    //   setUsers([...users, newUser])
    // }

    const getUser = (id) => {
      fetch(`http://localhost:9292/users/${id}`)
      .then(resp => resp.json())
      .then(userData => setUsers(userData))
    }

  return (
    <div className="App">
    <Router> 
    <NavBar />
        <Route path="/user/:id">
            <User users={users}/>
        </Route >

        <Route path="/friends">
            <Friends />
        </Route>

        <Route path="/games">
            <Games />
        </Route>

        <Route exact path="/">
            <Login users={users}/>  
        </Route >
    </Router>
    </div>
  );
}

export default App;
