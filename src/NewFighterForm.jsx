import React, { useState } from 'react';

function NewFighterForm({ addFighter }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [supermove, setSupermove] = useState("");
    

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
                supermove: supermove
            }),
        })
        .then((r) => r.json())
        .then((newFighter) => console.log(newFighter));
    }


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
            <button type="submit">Add Fighter</button>
        </form>
        </div>
    );





}



export default NewFighterForm;