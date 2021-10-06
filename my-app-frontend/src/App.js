import './App.css';
import UsersContainer from './components/UsersContainer';
import React, {useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom"
import  NavBar  from "./Components/NavBar"
import  HomePage  from "./Components/HomePage"

function App() {


 const [ users, setUsers] = useState([])

    const getUsers = () => {
        fetch("http://localhost:9292/users")
        .then(resp => resp.json())
        .then(usersData => setUsers(usersData))
      }


    const renderNewUsers = (newUser) => {
      console.log(usersData)
      setUsers([...users, newUser])
     
    }



  return (
    <div className="App">
    <NavBar onAddEvent={handleAddEvent}/>
      <Switch>

        <Route path="/">
             <Login />
        </Route >

        <Route path="/HomePage">
            <HomePage />
        </Route>

        <Route path="/Friends">
            <Friends />
        </Route>

        <Route path="/Games">
            <Games />
        </Route >
    
      </Switch>
    </div>
  );
}

export default App;
