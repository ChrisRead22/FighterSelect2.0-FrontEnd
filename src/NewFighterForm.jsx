import React, { useState, useEffect } from 'react';

function NewFighterForm({ addFighter }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [supermove, setSupermove] = useState("");
    const [fightingGames, setFightingGames] = useState([]);
    const [fightingStyles, setFightingStyles] = useState([]);
    const [fightingGame, setFightingGame] = useState("");
    const [fightingStyle, setFightingStyle] = useState("");

    

    function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:3000/fighters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                image: image,
                supermove: supermove,
                fighting_game_id: fightingGame,
                fight_style_id: fightingStyle
            }),
        })
        .then((r) => r.json())
        .then((newFighter) => addFighter(newFighter));
    }

    useEffect(() => {
        fetch("http://localhost:3000/fighting_games")
        .then(r => r.json())
        .then((fighterArray) => {
            setFightingGames(fighterArray);
        })
      }, []);
      useEffect(() => {
        fetch("http://localhost:3000/fight_styles")
        .then(r => r.json())
        .then((stylesArray) => {
            setFightingStyles(stylesArray);
        })
      }, []);


    return (
        <div className="new-Fighter-form">
            <h3>Create New Fighter</h3>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Fighter name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={image}
                onChange={(event) => setImage(event.target.value)}
            />
            <input
                type="text"
                name="supermove"
                placeholder="SuperMove"
                value={supermove}
                onChange={(event) => setSupermove(event.target.value)}
            />
            <select onChange={(event) => setFightingGame(event.target.value)} >
                {fightingGames.map(game =>{
                return <option value={game.id} key={game.id} >{game.name}</option>
                })}

            </select>
            <select onChange={(event) => setFightingStyle(event.target.value)}>
                {fightingStyles.map(game =>{
                return <option value={game.id} key={game.id} ></option>
                })}

            </select>
            <button type="submit">Add Fighter</button>
        </form>
        </div>
    );


}



export default NewFighterForm;