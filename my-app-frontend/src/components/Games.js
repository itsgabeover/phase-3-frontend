import React, { useEffect } from 'react'


function Games({ games, activeUser, setGames }) {


    return (

        <div>
          {games.map(game => 
            <>
            <h2>{game.game_title}</h2>
              <h3>{game.genre}</h3>
              <p>{game.game_developer}</p>
              <p>${game.price}</p>
            </>
          )}
        </div>
    )
}

export default Games;