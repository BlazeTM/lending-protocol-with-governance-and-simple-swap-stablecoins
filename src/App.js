import {useState} from "react";
import './App.css';
import NavBar from "./components/navBar"; //navbar
import React from 'react';
import ButtonsSupplyAndWithdraw from "./components/Supply.js";
import SWAPS from './components/swaps.js';





function App() {
  const [accounts, setAccounts] = useState([]);
  const [balanceOfDai, setBalanceOfDai] = useState(0);
  const [balanceOfStakedDai, setBalanceOfStakedDai] = useState(0);
  const isAllowed = Boolean(false);
  const [inputs, setInputs] = useState({});
  const [isSwaps, setIsSwaps] = useState(0);
  const [value, setValue] = useState();
  const [value1, setValue1] = useState();
  const [stable, setStable] = useState("dai");
  const [firstStable, setFirstStable] = useState("DAI");
  const [secondStable, setSecondStable] = useState("USDC");

  return (
    
    <div className="static bg-black/5   min-h-screen min-w-screen ">
      
      <NavBar className="" isSwaps={isSwaps} setIsSwaps={setIsSwaps} accounts={accounts} setAccounts={setAccounts}/>

      {isSwaps ? (
        
          <SWAPS accounts={accounts} setAccounts={setAccounts} firstStable={firstStable} setFirstStable={setFirstStable} secondStable={secondStable} setSecondStable={setSecondStable} stable={stable} setStable={setStable} value1={value1} setValue1={setValue1} value={value} setValue={setValue} ></SWAPS>

      
      ) : (
        <div></div>
      )}
    </div>
      

  );
}

export default App;
