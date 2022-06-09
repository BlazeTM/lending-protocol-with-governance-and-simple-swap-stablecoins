import {useState} from "react";
import './App.css';
import WalletConnect from './components/walletconnect.js'; //navbar
import React from 'react';
import ButtonsSupplyAndWithdraw from "./components/Supply.js";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { Redirect, Route, Switch, Router, Routes } from "react-router";
import SWAPS from './components/swaps.js';





function App() {
  const [alertChainID, setAlertChainID] = useState("false");
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
  const [isDai, setIsDai] = useState(true);

  return (
    
    <div className="App">
      
      <WalletConnect isSwaps={isSwaps} setIsSwaps={setIsSwaps} setAlertChainID={setAlertChainID} alertChainID={alertChainID} isAllowed={isAllowed} accounts={accounts} setAccounts={setAccounts} balanceOfDai={balanceOfDai} setBalanceOfDai={setBalanceOfDai} balanceOfStakedDai={balanceOfStakedDai} setBalanceOfStakedDai={setBalanceOfStakedDai} />
      <div className="Content">
      {isSwaps ? (
        <div className="">
          <SWAPS firstStable={firstStable} setFirstStable={setFirstStable} secondStable={secondStable} setSecondStable={setSecondStable} stable={stable} setStable={setStable} accounts={accounts} setAccounts={setAccounts} value1={value1} setValue1={setValue1} value={value} setValue={setValue} ></SWAPS>
        </div>
      
      ) : (
        <div className="DAI">
        <div className="daicontent">Dai</div>
        <div className="daicontent">Balance : {balanceOfDai} DAI </div>
        <div className="daicontent">Supplied Balance : {balanceOfStakedDai} DAI </div>
        <div className="daicontent">

        </div>
        <div className="">
        <ButtonsSupplyAndWithdraw isAllowed={isAllowed} accounts={accounts} setAccounts={setAccounts} inputs={inputs}  />
        </div>
        </div> 
      )}
      </div>
      
    </div>

  );
}

export default App;
