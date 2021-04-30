// import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from "react"
import FightingGameMenu from "./FightingGameMenu";
import FightStyleMenu from "./FightStyleMenu";
import FighterContainer from "./FighterContainer";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"

function App() {
  const [fighters, setFighters] = useState([])


  

  useEffect(() => {
    fetch("http://localhost:3000/fighters")
    .then(r => r.json())
    .then((fighterArray) => {
      setFighters(fighterArray);
    })
  }, []);

  function addFighter(newFighter) {
    const updatedFighterArray = [...fighters, newFighter];
    setFighters(updatedFighterArray);
  }

  function deleteFighter(id) {
    const updatedFighterArray = fighters.filter((fighter) => fighter.id !== id);
  }

  function updateFighter(updatedFighter) {
    const updatedFighterArray = fighters.map((fighter) => {
      if (fighter.id == updatedFighter.id) {
        return updatedFighter;
      } else {
        return fighter;
      }
    });
    setFighters(updatedFighterArray);
  }



  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/FighterContainer">
            <FighterContainer fighters={fighters} deleteFighter={deleteFighter} addFighter={addFighter} updateFighter={updateFighter}/>
          </Route>
          
          <Route path="/FightStyleMenu/:id">
            <FightStyleMenu/>
          </Route>

          <Route path="/">
            <FightingGameMenu/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
