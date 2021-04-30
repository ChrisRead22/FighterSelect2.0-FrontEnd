import React, {useState,useEffect } from "react";
import { Link,useParams } from "react-router-dom"

const FightStyleMenu = (props) => {
    const [fightingStyles, setFightingStyles] = useState([])

  

    useEffect(() => {
      fetch("http://localhost:3000/fight_styles")
      .then(r => r.json())
      .then((fighterArray) => {
          setFightingStyles(fighterArray);
      })
    }, []);
    // id is the id of the games
    let {id}= useParams();
    
    return (
        <div>
             <h3>ID: {id}</h3>
        <h2>SELECT YOUR FIGHTSTYLE</h2>
            {/* <Link to="/FighterContainer"> */}
        {fightingStyles.map(style => {
            return (<Link to={`/FighterContainer/${id}/${style.id}`}><button key={style.id} >{style.name}</button></Link>)
        })}

        {/* <button>Brawler</button><br></br>
        <button>Grappler</button><br></br>
        <button>Zoner</button><br></br> */}

        {/* </Link> */}
        </div>
    );
};







export default FightStyleMenu;