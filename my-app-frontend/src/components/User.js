import React from 'react'
import { useParams } from 'react-router'

function User( {users} ) {

    let currentURL = window.location.pathname
    console.log(currentURL)
    let splitURL = currentURL.split("/")
    let currentUser = users.find(({ id }) => id === parseInt(splitURL[2]))

    return (
        <>
        <div id="user-profile">
            <h1>{currentUser.gamer_tag}</h1>
            <p>{currentUser.name}</p>
            <p>{currentUser.bio}</p>
            <p>Member since {currentUser.creation_date}</p>
            <div id="user-image">
                <img src="{currentUser.image_url}" alt="{currentUser.gamer_tag} Avatar" />
            </div>
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
  