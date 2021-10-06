import './App.css';
// import UsersContainer from './components/UsersContainer';
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import  NavBar  from "./components/NavBar"
import  HomePage  from "./components/HomePage"
import Login from './components/Login';
import Friends from './components/Friends';
import Games from './components/Games';

function App() {


//  const [ users, setUsers] = useState([])

    const getUsers = () => {
        fetch("http://localhost:9292/users")
        .then(resp => resp.json())
        .then(usersData => console.log(usersData))
        // .then(usersData => setUsers(usersData))
      }

    
    // const renderNewUsers = (newUser) => {
    //   console.log(usersData)
    //   setUsers([...users, newUser])
     
    // }

    const getUser = (id) => {
      fetch(`http://localhost:9292/users/${id}`)
      .then(resp => resp.json())
      .then(userData => console.log(userData))
      // .then(userData => setUsers(userData))
    }

    debugger;

  return (
    <div className="App">
    <Router> 
    <NavBar />
        
        <Route path="/homepage">
            <HomePage />
        </Route>

        <Route path="/friends">
            <Friends />
        </Route>

        <Route path="/games">
            <Games />
        </Route >

        <Route exact path="/">
             <Login />  
        </Route >
    </Router>
    </div>
  );
}

export default App;
