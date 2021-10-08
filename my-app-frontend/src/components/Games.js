import React from 'react'


function Games({ games }) {

console.log(games)
 

    return (

        <div>hi 
          {games.map(game => <h2>{game.game_title}</h2> )}
        </div>
    )
}

export default Games;