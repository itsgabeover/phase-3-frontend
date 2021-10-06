import React from 'react'
import { useHistory } from 'react-router'

function NavBar() {
    let history = useHistory()
    
    return (
        <div className="navbar">
          <div>
            <h1>GAMER GANG</h1>
          </div>
            <h3 className="navbarh3" onClick={() => history.push("/")}>Home</h3>
            <h3 className="navbarh3" onClick={() => history.push("/addevent")}>Add Event</h3>
            <h3 className="navbarh3" onClick={() => history.push("/calendar")}>Calendar View</h3>
        </div>
      )
}

export default NavBar;