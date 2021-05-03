import React from 'react';
import NewFighterForm from './NewFighterForm';
import FighterCard from './FighterCard';
// import {useParams} from 'react-router-dom'

const FighterContainer = ({fighters, addFighter, deleteFighter, updateFighter={updateFighter},props},) => {

    const fightStyle = props.location.state.fightStyleId
    const fightGame = props.location.state.gameId

    console.log(fightStyle,fightGame)

    const fightersToShow = fighters.filter(fighter => fighter.fight_style_id == fightStyle && fighter.fighting_game_id == fightGame)

    const allFighters = fightersToShow.map(fighter => {
        return <FighterCard
            addFighter={addFighter}
            deleteFighter={deleteFighter}
            updateFighter={updateFighter}
            key={fighter.id}
            id={fighter.id}
            name={fighter.name}
            image={fighter.image}
            supermove={fighter.supermove}
        />
    })

    



    return (
    <div>
   
     <NewFighterForm addFighter={addFighter}/>
     
    {allFighters}
    </div>
    );

}







export default FighterContainer;