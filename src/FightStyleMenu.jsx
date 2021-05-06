import React, {useState,useEffect } from "react";
import { Link,useParams } from "react-router-dom"
import styled from 'styled-components';
import Fight from "./Video/Fight.mp4";

const FightStyleMenu = (props) => {
    const [fightingStyles, setFightingStyles] = useState([])

  

    useEffect(() => {
      fetch("http://localhost:3000/fight_styles")
      .then(r => r.json())
      .then((fighterArray) => {
          setFightingStyles(fighterArray);
      })
      
    }, []);
   
    const gameId = props.location.state.gameId

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
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        <h2>SELECT YOUR FIGHTSTYLE</h2>

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
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
        {fightingStyles.map(style => {
            return (<Link to={{pathname:"/FighterContainer", state:{gameId:gameId,fightStyleId:style.id}}}><Button key={style.id} >{style.name}</Button></Link>)
        })}

        </div>
    );
};







export default FightStyleMenu;