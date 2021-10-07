import React from 'react'
import { useParams } from 'react-router'

function User( {users} ) {

    let currentURL = window.location.pathname
    console.log(currentURL)
    let splitURL = currentURL.split("/")
    let currentUser = users.find(({ id }) => id === parseInt(splitURL[2]))



    return (
        <div>
        {currentUser.gamer_tag}
        {currentUser.email}
        </div>
    )

}

export default User
  