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
  const [ activeUser, setActiveUser] = useState({})
  const [ games, setGames] = useState([])

    const getUsers = () => {
        fetch("http://localhost:9292/users")
        .then(resp => resp.json())
        .then(userData => setUsers(userData))
        // .then(usersData => setUsers(usersData))
      }
      //all the users   
      useEffect(() => {
        fetch("http://localhost:9292/users")
          .then((res) => res.json())
          .then(setUsers)  
      }, [])
      //All the games
      useEffect(() => {
        fetch("http://localhost:9292/games")
          .then((res) => res.json())
          .then(games => setGames(games))  
      }, [])
      //only games for the active user

    
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


  return (
    <div className="App">
    <Router> 
    <NavBar activeUser={activeUser}/>
        <Route path="/user">
            <User users={users} activeUser={activeUser}/>
        </Route >

        <Route path="/games">
            <Games activeUser={activeUser} games={games} setGames={setGames}/>
        </Route>

        <Route exact path="/">
            <Login activeUser={activeUser} setGames={setGames} users={users} setActiveUser={setActiveUser}/>  
        </Route >
    </Router>
    </div>
  );
}

export default App;
