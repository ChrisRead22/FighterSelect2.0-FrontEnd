import React, { useState } from "react";

const EditFighterCard = ({updateFighter, id}) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [supermove, setSupermove] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        fetch(`http://localhost:3000/fighters/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
        body: JSON.stringify({
            name: name,
            image: image,
            supermove: supermove
        }),
         })
         .then((r) => r.json())
         .then((updatedFighter) =>{
            updateFighter(updatedFighter)
         });


    }



    return(
        <div className="edit">
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};



export default EditFighterCard;