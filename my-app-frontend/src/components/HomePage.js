import React from 'react'
import Login from './Login'

function HomePage({ users }) {

    const userData = users.map(user => {
        console.log(user)
        return <h1>{user.name}</h1>
    })

    return (
        <>
        <div>HomePage!!!</div>
        <div>HomePage!!!</div>
        </>
    )
}

export default HomePage;