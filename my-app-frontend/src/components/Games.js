import React from 'react'
import { useState, useEffect } from 'react';

function Games({ games }) {

console.log(games)
  // const [ games, setGames ] = useState([])


  // const getGames = () => {
  //   fetch("http://localhost:9292/games")
  //   .then(resp => resp.json())
  //   .then(setGames)
  // }

  // useEffect(() => {
  //   fetch("http://localhost:9292/games")
  //     .then((res) => res.json())
  //     .then(setGames)  
  // }, [])

  // const something = games.map(game => console.log(game))
  // const gameTitle = console.log(game.game_title)
  // console.log(gameTitle)
  let game7 = games[1]

    return (

        <div>hi {game7.game_title}</div>
    )
}

export default Games;