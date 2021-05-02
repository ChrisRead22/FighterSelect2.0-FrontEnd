import React from 'react';
import NewFighterForm from './NewFighterForm';
import FighterCard from './FighterCard';
import {useParams} from 'react-router-dom'

const FighterContainer = ({fighters, addFighter, deleteFighter, updateFighter={updateFighter}}) => {

    let {id}= useParams();

    const allFighters = fighters.map(fighter => {
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
    {id}
     <NewFighterForm addFighter={addFighter}/>
    {allFighters}
    </div>
    );

}







export default FighterContainer;