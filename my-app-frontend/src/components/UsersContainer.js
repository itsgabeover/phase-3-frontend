import React from 'react'

function UsersContainer() {

    const getUsers = () => {
        fetch("http://localhost:9292/users")
        .then(resp => resp.json())
        .then(user=> console.log(user))
      }
      debugger;

    return (
      <div>
        LOOK AT ALL THESE USERS
      </div>
    );
  }
  
  export default UsersContainer;
  