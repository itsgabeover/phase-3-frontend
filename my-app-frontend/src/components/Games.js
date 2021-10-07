import React from 'react'
import { useState } from 'react';

function Games() {

  const [ games, setGames ] = useState([])

  const getGames = () => {
    fetch("http://localhost:9292/games")
    .then(resp => resp.json())
    .then(gamesData => setGames(gamesData))

  }

  console.log(getGames)
  
    return (

        <div>games</div>
    )
}

export default Games;