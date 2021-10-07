import React from 'react'
import { useParams } from 'react-router'

function User( {users, activeUser} ) {

    // let currentURL = window.location.pathname
    // console.log(currentURL)
    // let splitURL = currentURL.split("/")
    // let currentUser = users.find(({ id }) => id === parseInt(splitURL[2]))
    console.log(activeUser.gamer_tag)
    
    return (
        <>
        <div>
        {activeUser["gamer_tag"]}
        </div>
        <div>
        {activeUser["email"]}
        </div>
        <form className="aboutme">
        <label>About me: </label>
        <input type="text" name="aboutme" className="login-form-input" placeholder="Gamertag/E-mail..." />
        <button className="aboutme">Update About Me</button>
        </form>
        </>

    )

}

export default User
  