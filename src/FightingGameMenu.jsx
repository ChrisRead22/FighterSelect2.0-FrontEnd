import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom"
import './FightingGameMenu.css';
import styled from 'styled-components';
import Fight from "./Video/Fight.mp4";

const FightingGameMenu = () => {
    const [fightingGames, setFightingGames] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/fighting_games")
    .then(r => r.json())
    .then((fighterArray) => {
        setFightingGames(fighterArray);
    })
  }, []);

  const Button = styled.button`
    font-family: sans-serif;
    font-size: 1.3rem;
    border-radius: 5px;
    margin-left: 40px;
    padding: 20px 30px;
    cursor: pointer;
    background: royalblue;
    color: #fff;
    &:hover {
        background: red;
    }
  `;
  
    return (
        <div className="landingPage">
            <video autoPlay loop muted
            style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1"
            }}
            >
                <source src={Fight} type="Video/mp4"/>
            </video>

            <h1>FIGHTER SELECT 2.0</h1>
            <br></br>
            <br></br>
            <br></br>
            <h2> SELECT FIGHTING GAME </h2>  
            <br></br>
            <br></br>
            <br></br>
            {fightingGames.map(game => {
                return (<Link to={{pathname:"/FightStyleMenu/", state:{gameId:game.id}}} key={game.id}>
                <Button className="button">{game.name}</Button> 
                </Link>)
            })}
        </div>
    );
};




// + {game.id} 

export default FightingGameMenu;