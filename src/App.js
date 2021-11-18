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
  const [size, setSize] = useState(3);

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

  
    const sizevalue = document.querySelector('input[name="size"]:checked').value
    if (sizevalue) {
      setSize(sizevalue);
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
    setSize(3);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">BURRITO MAGE</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="App-body">
      <input type="text" placeholder="what do you want in your burrito?" className="input" id="custom"></input>
        <br/>
        <ul>
          <li>
            <span className="inline">
              <input type="radio" id="small" name="size" value="3"/>
              <label>Small</label>
            </span>  
            <span className="inline">
            <input type="radio" id="medium" name="size" value="5"/>
              <label>Medium</label>
            </span>  
            <span className="inline">
            <input type="radio" id="large" name="size" value="7"/>
              <label>Large</label>
            </span>
            <span className="inline">
            <input type="radio" id="super" name="size" value="11"/>
              <label>Sooper Size</label>
            </span>
          </li>
          <br/>
          <li>
            <div className="inline">
              <select name="sauce" id="sauce" className="input">
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
          {makeIngredients(size, "WRAP", "wrap")}
          {makeIngredients(extra, sauce, "sauce")}
          {makeIngredients(spice, "hot", "hot")}
          {makeIngredients(size, custom, "custom")}
          {makeIngredients(size, "WRAP", "wrap")}
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
