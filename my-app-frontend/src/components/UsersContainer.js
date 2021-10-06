import React from 'react'

function UsersContainer() {

    const getUsers = () => {
        fetch("http://localhost:9292/users")
        .then(resp => resp.json())
        .then(usersArray=> console.log(usersArray))
      }

    const renderUsers = (usersArray) => {
        return (
            <div>hi</div>
        )
    }

    debugger;

    return (
      <div>
        LOOK AT ALL THESE USERS
        
      </div>
    );
  }
  
  export default UsersContainer;
  