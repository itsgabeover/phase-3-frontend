import React from 'react'
import Login from './Login'

function HomePage({ users }) {

    const userData = users.map(user => {
        console.log(user)
        return <h1>{user.name}</h1>
    })

    return (
<<<<<<< HEAD
        <h1>Hi {userData}</h1>
        // <div id="homepage">{users.map(user => {
        //     <div className="profile">
        //         <h2>{user.name}</h2>
        //         <img
        //             src={user.image}
        //             alt={user.name}
        //             className="user-avatar"
        //         />
        //     </div>
        // })}</div>
      );

    // return (
    //     <div id="homepage">
    //         <h1>Welcome, {userData.gamer_tag}</h1>
    //         {/* <h2></h2>
    //         <img src="{user.image_url}" alt="{user.name}" /> */}
=======
        <>
        <div>HomePage!!!</div>
        <div>HomePage!!!</div>
        </>
    )
>>>>>>> dev

    //     </div>
    // )
}

export default HomePage;