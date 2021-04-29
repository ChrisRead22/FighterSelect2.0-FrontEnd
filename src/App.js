import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from "React"
import FightingGameMenu from "./FightingGameMenu";
import FightStyleMenu from "./FightStyleMenu";
import FighterContainer from "./FighterContainer";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"

function App() {
  const [fighters, setFighters] = useState([])


  useEffect(() => {
    fetch("http://localhost:3000/fighters")
    .then(resp = resp.json())
    .then((fighterArray) => {
      setFighters(fighterArray);
    })
  }, []);

  return (
    <Router>
    <div className="App">

      <Switch>
        <Route path="/fighterContainer">
      <FighterContainer />
      </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
