import React from 'react'
import { useHistory } from 'react-router';

function Login( {users} ) {
    let history = useHistory()

    function handleLogin(e) {
        e.preventDefault()

        const foundUser = users.find( user => user.gamer_tag === e.target.gamer_tag.value );
        if (foundUser) {
            if (foundUser.password === e.target.password.value ) {
                window.alert("Login successful!")
                e.target.reset()
                history.push(`/user/${foundUser.id}`)
            } else { 
                window.alert("Login unsuccessful, please try again")
                e.target.reset()
            }
        }
    } 

        // if (foundUser) {
        //     window.alert("You are logged in")
        //     //SOME FUNCTION TO LINK TO MY PROFILE PAGE
        // } else {
        //     window.alert("Incorrect username or password. Please try again.")
        //     e.target.reset()
        // 


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
                <label>Gamertag: </label>
                <input type="text" name="gamer_tag" className="login-form-input" placeholder="Gamertag/E-mail..." />
                <label>Password: </label>
                <input type="text" name="password" className="login-form-input" placeholder="Password..." />
                <button className="login-button">Login</button>
            </form>
            <form onSubmit={handleNewUser} className="create-user-form">
                <label>Full Name: </label>
                <input type="text" name="name" className="login-form-input" placeholder="Enter your full name..." />
                <label>E-mail: </label>
                <input type="text" name="email" className="login-form-input" placeholder="Enter your e-mail address..." />
                <label>Gamertag: </label>
                <input type="text" name="gamer_tag" className="login-form-input" placeholder="Enter new gamertag..." />
                <label>Password: </label>
                <input type="text" name="password" className="login-form-input" placeholder="Enter new password..." />
                <label>Confirm Password: </label>
                <input type="text" name="password_confirm" className="login-form-input" placeholder="Confirm new password..." />
                <button className="create-user-button">Create New User</button>
            </form>
        </>
    )

}

export default Login;