import React from 'react'
import { useParams } from 'react-router'

function User( {users} ) {

    let currentURL = window.location.pathname
    let splitURL = currentURL.split("/")
    let currentUser = users.find(({ id }) => id === parseInt(splitURL[2]))



    return (
        <div>
        {currentUser.gamer_tag}
        ICE CREAM!
        </div>
    )

}

export default User
  