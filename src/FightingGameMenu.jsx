import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom"





const FightingGameMenu = () => {
    const [fightingGames, setFightingGames] = useState([])


  

  useEffect(() => {
    fetch("http://localhost:3000/fighting_games")
    .then(r => r.json())
    .then((fighterArray) => {
        setFightingGames(fighterArray);
    })
  }, []);
    return (
        <div className="landingPage">
            <h2> SELECT FIGHTING GAME </h2>  

            {fightingGames.map(game => {
                return (<Link to={`/FightStyleMenu/${game.id}`} params={{id: game.id}} key={game.id}>
                <button type="button">{game.name}</button> 
                </Link>)
            })}
        </div>
    );
};




// + {game.id} 

export default FightingGameMenu;