import {useState} from "react";
import { Route } from "react-router";
import './App.css';
import WalletConnect from './components/walletconnect.js'; //navbar
import React from 'react';
import Lending from './components/Lending.js';


function App() {
  const [accounts, setAccounts] = useState([]);
  const content = "main";
  return (
    <div className="App">
      <WalletConnect accounts={accounts} setAccounts={setAccounts}/>
      <div className="Content">
        
        <div className="DAI">
          <div>Dai</div>
          <div>Supply Balance : </div>
          <div><button>Supply</button></div>
        </div>
      </div>
    </div>
  );
}

export default App;
