import React from "React";
import { Link } from "react-router-dom"



const FightingGameMenu = () => {
    return (
        <div className="landingPage">
            <h2> SELECT FIGHTING GAME </h2>  
            <Link to="FightStyleMenu">
            <button>Tekken 7</button> <button>Street Fighter V</button>
            <button>Mortal Kombat 11</button> <button>Injustice 2</button>
            </Link>



        </div>
    );
};






export default FightingGameMenu;