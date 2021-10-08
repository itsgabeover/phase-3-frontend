import React from 'react'
import { useHistory } from 'react-router';

function Login( {users, setActiveUser} ) {
    let history = useHistory()

    function handleLogin(e) {
        e.preventDefault()

        const foundUser = users.find( user => user.gamer_tag === e.target.gamer_tag.value );
        if (foundUser) {
            if (foundUser.password === e.target.password.value ) {
                window.alert("Login successful!")
                e.target.reset()
                setActiveUser(foundUser)
                history.push(`/user/${foundUser.id}`)
            } else { 
                window.alert("Login unsuccessful, please try again")
                e.target.reset()
            }
        }
    } 


    function handleNewUser(e) {
        e.preventDefault()
        if (e.target.password.value !== e.target.password_confirm.value) {
            window.alert("Passwords do not match. Try again.")
            e.target.reset()
        } else {
        fetch("http://localhost:9292/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: e.target.name.value,
            email: e.target.email.value,
            gamer_tag: e.target.gamer_tag.value,
            password: e.target.password.value,
          })
        })
        .then(res => res.json())
        .then(data => window.alert("Welcome to the gamer gang!"))
        e.target.reset()
        }
      }

    return (
        <>
            <form onSubmit={handleLogin} className="login-form">
                <label>Gamertag:  </label>
                <input type="text" name="gamer_tag" className="login-form-input" placeholder="Gamertag/E-mail..." />
                <br></br>
                <label>Password:  </label>
                <input type="text" name="password" className="login-form-input" placeholder="Password..." />
                <br></br>
                <button className="login-button">Login</button>
            </form>
            <form onSubmit={handleNewUser} className="create-user-form">
                <label>Full Name:  </label>
                <input type="text" name="name" className="login-form-input" placeholder="Enter your full name..." />
                <br></br>
                <label>E-mail:  </label>
                <input type="text" name="email" className="login-form-input" placeholder="Enter your e-mail address..." />
                <br></br>
                <label>Gamertag:  </label>
                <input type="text" name="gamer_tag" className="login-form-input" placeholder="Enter new gamertag..." />
                <br></br>
                <label>Password:  </label>
                <input type="text" name="password" className="login-form-input" placeholder="Enter new password..." />
                <br></br>
                <label>Confirm Password:  </label>
                <input type="text" name="password_confirm" className="login-form-input" placeholder="Confirm new password..." />
                <br></br>
                <button className="create-user-button">Create New User</button>
            </form>
        </>
    )

}

export default Login;