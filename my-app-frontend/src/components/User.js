import React from 'react'
import { useParams } from 'react-router'

function User( {users, activeUser} ) {

    function handleUpdateUser(e) {
        e.preventDefault()
        const userUpdate = {
            email: e.target.email.value,
            image_url: e.target.image.value,
            bio: e.target.aboutme.value
        }

        fetch(`http://localhost:9292/users/${activeUser.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(userUpdate)
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }
    console.log(activeUser.image_url)
    
    return (
        <>
        <div id="user-profile">
            <h1>{activeUser.gamer_tag}</h1>
            <p>{activeUser.name}</p>
            <p>{activeUser.bio}</p>
            <p>Member since {activeUser.creation_date}</p>
            <div id="user-image">
                <img src={activeUser.image_url} alt={activeUser.gamer_tag}/>
            </div>
        </div>

        <form onSubmit={handleUpdateUser} className="user-preferences">
            <label>Update email: </label>
            <input type="text" name="email" className="aboutme" placeholder="Talk about yourself.." />
            <label>Update Image URL: </label>
            <input type="text" name="image" className="addimage" placeholder="Image URL..." />
            <label>Update About me: </label>
            <input type="text" name="aboutme" className="aboutme" placeholder="Talk about yourself.." />
            <button className="save">Save Preferences</button>
        </form>
        </>

    )

}

export default User
  