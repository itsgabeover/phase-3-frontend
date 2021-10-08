import React from 'react'
import { useHistory } from 'react-router';

function NavBar(activeUser) {
    let history = useHistory()
    return (
        <div className="navbar">
          <div>
            <h1 onClick={() => history.push("/")}>
              <img id="logo" className="navbarlogo" src="gamer-gang-logo-blue.png" alt="Gamer Gang logo" />
            </h1>
          </div>
            <h3 className="navbarh3" onClick={() => history.push("/games")}>My Games</h3>
            <h3 className="navbarh3" onClick={() => history.push(`/user`)}>My Profile</h3>
        </div>
      )
}

export default NavBar;