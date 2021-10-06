import React from 'react'

function Login({ users }) {

    console.log(users)
    return (
        <div class="row">
        <div class="column1">
            <form className="login-form">
                <label></label>
                <label>Gamertag/E-mail: </label>
                <input type="text" name="name" className="login-form-input" placeholder="Gamertag/E-mail..." />
                <label>Password: </label>
                <input type="text" name="description" className="login-form-input" placeholder="Password..." />
                <button className="login-button">Login</button>
            </form>
        </div>
        <div class="column2">
            <form className="login-form">
                <label>E-mail: </label>
                <input type="text" name="name" className="login-form-input" placeholder="Enter your e-mail address..." />
                <label>Gamertag: </label>
                <input type="text" name="name" className="login-form-input" placeholder="Enter new gamertag..." />
                <label>Password: </label>
                <input type="text" name="description" className="login-form-input" placeholder="Enter new password..." />
                <label>Confirm Password: </label>
                <input type="text" name="description" className="login-form-input" placeholder="Confirm new password..." />
                <button className="create-user-button">Create New User</button>
            </form>
        </div>
      </div>
    )

}

export default Login;