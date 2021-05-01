import { useState } from 'react'
import React from 'react';
import EditFighterCard from './EditFighterCard';

function FighterCard ({id, name, image, supermove, deleteFighter, updateFighter}) {

    const [updatedFighter, setUpdatedFighter] = useState(false);

    const handleDeleteClick = () => {
        fetch(`http://localhost:3000/fighters/${id}`, {
            method: "DELETE",
        });
        deleteFighter(id);
    }

    const handleClick = () => {
        setUpdatedFighter(!updatedFighter)


    }


return (
<div>
<div className="Fighter_info">
<p>{name}</p>
<img className="Fighter_image" src={image} alt={name} />
<small>SUPER:</small>
<strong>{supermove}</strong>
<br></br>
<br></br>
<span>
    <button className="update_button" onClick={handleClick}>Update</button>
    <button className="delete_button" onClick={handleDeleteClick}>Delete</button>
</span>

{updatedFighter ? <EditFighterCard updateFighter={updateFighter} id={id}/> : null}
</div>
</div>
);

}

export default FighterCard;