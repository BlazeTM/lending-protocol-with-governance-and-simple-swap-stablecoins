import {useState} from "react";
import './App.css';
import WalletConnect from './components/walletconnect.js'; //navbar
import React from 'react';
import ButtonsSupplyAndWithdraw from "./components/Supply.js";






function App() {
  const [accounts, setAccounts] = useState([]);
  const [balanceOfDai, setBalanceOfDai] = useState(0);
  const [balanceOfStakedDai, setBalanceOfStakedDai] = useState(0);
  const isAllowed = Boolean(false);
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  return (
    <div className="App">
      <WalletConnect isAllowed={isAllowed} accounts={accounts} setAccounts={setAccounts} balanceOfDai={balanceOfDai} setBalanceOfDai={setBalanceOfDai} balanceOfStakedDai={balanceOfStakedDai} setBalanceOfStakedDai={setBalanceOfStakedDai} />
      <div className="Content">
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
        
          
        
      </div>
    </div>
  );
}

export default App;
