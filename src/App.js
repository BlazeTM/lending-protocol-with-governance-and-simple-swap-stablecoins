import {useEffect, useState} from "react";
import './App.css';
import NavBar from "./components/navBar"; //navbar
import React from 'react';
import SWAPS from './components/swaps.js';
import Governance from "./components/governance.js";
import Lending from './components/lending.js'
import Dai from "./components/DAI.webp";
import Proposals from "./components/governance.js";



function App() {
  const [accounts, setAccounts] = useState([]);
  const [isLending, setIsLending] = useState(Boolean(true));
  const [isSwaps, setIsSwaps] = useState(Boolean(false));
  const [isGovernance, setIsGovernance] = useState(Boolean(false));
  const [value, setValue] = useState();
  const [value1, setValue1] = useState();
  const [stable, setStable] = useState("dai");
  const [firstStable, setFirstStable] = useState("DAI");
  const [secondStable, setSecondStable] = useState("USDC");
  const [isLiquidity, setIsLiquidity] = useState(Boolean(false));
  const [balanceOfDai, setBalanceOfDai] = useState(0);
  const [balanceOfStakedDai, setBalanceOfStakedDai] = useState(0);
  const trueis = Boolean(localStorage.getItem('account'));

  

  

  return (
    
    <div className="static bg-blackmy min-h-screen min-w-screen ">
      
      <NavBar className="" balanceOfDai={balanceOfDai} balanceOfStakedDai={balanceOfStakedDai} setBalanceOfDai={setBalanceOfDai} setBalanceOfStakedDai={setBalanceOfStakedDai} isLending={isLending} setIsLending={setIsLending} isSwaps={isSwaps} setIsSwaps={setIsSwaps} isGovernance={isGovernance} setIsGovernance={setIsGovernance} accounts={accounts} setAccounts={setAccounts}/>

      <div>
      {isLending ? (
        <div>     
        <Lending accounts={accounts} balanceOfDai={balanceOfDai} balanceOfStakedDai={balanceOfStakedDai} setBalanceOfDai={setBalanceOfDai} setBalanceOfStakedDai={setBalanceOfStakedDai} />
        <table className="text-white/90 border-4 border-spacing-10  border-blackmy ml-700px mt-20 table-auto">
  <thead>
    <tr>
      <th className="border-4 border-blackmy border-spacing-10 ">Asset</th>
      <th className="border-4 border-blackmy border-spacing-10">Balance Supplied</th>
      <th className="border-4 border-blackmy border-spacing-10 ">Balance Borrowed</th>
      <th className="border-4 border-blackmy border-spacing-10 ">Borrow APR</th>
      <th className="border-4 border-blackmy border-spacing-10">Supply APR</th>
      <th className="border-4 border-blackmy border-spacing-10 ">Wallet Balance</th>
      <th className="border-4 border-blackmy border-spacing-10 ">Operations</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border-4 border-blackmy border-spacing-10 flex"><img className="w-6 h-6 mr-2" src={Dai} /> DAI </td>
      <td className="border-4 border-blackmy border-spacing-10">{balanceOfStakedDai} DAI</td>
      <td className="border-4 border-blackmy border-spacing-10 ">-</td>
      <td className="border-4 border-blackmy border-spacing-10 ">- </td>
      <td className="border-4 border-blackmy border-spacing-10 ">-  </td>
      <td className="border-4 border-blackmy border-spacing-10 ">{balanceOfDai} DAI </td>
      <td className="border-4 border-blackmy border-spacing-10 "><button className="text-white/90 h-8 w-20 rounded-full bg-button2 text-lg shadow hover:shadow-lg " >Supply</button>
            
            <button className='text-white/90 h-8 w-20 rounded-full bg-button2 ml-2 text-lg shadow hover:shadow-lg'>Borrow</button></td>
    </tr>
  </tbody>
</table>
        </div>
      ) : (
        <div></div>
      )} 
      {isSwaps ? (
        <SWAPS isLiquidity={isLiquidity} setIsLiquidity={setIsLiquidity} accounts={accounts} setAccounts={setAccounts} firstStable={firstStable} setFirstStable={setFirstStable} secondStable={secondStable} setSecondStable={setSecondStable} stable={stable} setStable={setStable} value1={value1} setValue1={setValue1} value={value} setValue={setValue}/>
      ) : (
        <div></div>
      )}
      {isGovernance ? (
        <div className="mx-auto"><Governance/></div>
      ) : (
        <div></div>
      )}

      </div>
      </div>

  );
}

export default App;
