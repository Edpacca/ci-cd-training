import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [isMade, setIsMade] = useState(false);
  const [custom, setCustom] = useState("");
  const [sauce, setSauce] = useState("");
  const [isExtra, setIsExtra] = useState(false);
  const [extra, setExtra] = useState(1);
  const [spice, setSpice] = useState(0);

  function makeBurrito() {

    setCustom(document.getElementById("custom").value);

    if (document.getElementById("sauce").value !== "select") {
      setSauce(document.getElementById("sauce").value);
    }
    
    if (isExtra) {
      setExtra(3)
    } else {
      setExtra(1)
    }

    setSpice(document.getElementById("spice").value / 10);
    setIsMade(true);

    console.log("custom: " + custom)
    console.log("sauce: " + sauce)
    console.log("extra: " + extra)
    console.log("extraSauce: " + isExtra)
    console.log("spice: " + spice)
  }

  function reset() {
    setIsMade(false);
    setCustom("");
    setSauce("");
    setExtra(1);
    setSpice(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="App-body">
      <input type="text" placeholder="what do you want in your burrito?" className="input" id="custom"></input>
        <br/>
        <ul>
          <li>
            <div className="inline">
              <select name="sauce" id="sauce">
                <option value="select">Select sauce</option>
                <option value="Lemon 'n' lime">Lemon'n'Lime</option>
                <option value="Flaming hot">Flaming hot</option>
                <option value="Ketchup">Ketchup</option>
                <option value="HP sauce">HPsauce</option>
              </select>
            </div>
          </li>
          <li>
            <div className="inline">
              <input type="checkbox" id="extra" name="extrabox" onClick={() => setIsExtra(!isExtra)}/>
              <p>Extra sauce?</p>
            </div>
          </li>
          <li>
            <div className="inline">
              <p>how spicy?</p>
              <input type="range" id="spice"></input>
            </div>
          </li>
        </ul>
        <button onClick={() => makeBurrito()} className="button">MAKE MY BURRITO</button>

      </div>
      <div className="burrito-area">
      {
        isMade &&
        <div className="burrito">
          {makeIngredients(5, "WRAP", "wrap")}
          {makeIngredients(extra, sauce, "sauce")}
          {makeIngredients(spice, "hot", "hot")}
          {makeIngredients(5, custom, "custom")}
          {makeIngredients(5, "WRAP", "wrap")}
        </div>
      }
      </div>

      <button onClick={() => reset()}>start over</button>
    </div>
  );
}

function makeIngredients(number, text, cl) {
  
  let output = "";

  for (let i = 0; i < number; i ++) {
    output += (text);
  }

  return <p className={cl}>{output}</p>
}


export default App;
