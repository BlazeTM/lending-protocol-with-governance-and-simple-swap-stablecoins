import React from "react";

import { ethers } from "ethers";
import '../App.css';





function navBar({ isSwaps, setIsSwaps, accounts, setAccounts}) {
  
    const isConnected = Boolean(accounts[0]);

    async function connectWallet() {
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        const { chainId } = await provider.getNetwork();
        console.log(chainId); // 941
        if(chainId == 941){
        accounts = await provider.send('eth_requestAccounts',[])
        setAccounts(accounts);
        } else {
            alert("Change network to Pulsechain v2b");
        }
    
    }
    
    function swaps() {
        console.log(1);
        isSwaps = Boolean(true);
        setIsSwaps(isSwaps);
    }
    function lends() {
        console.log(2);
        isSwaps = Boolean(false);
        setIsSwaps(isSwaps);
    }
    
return(
    <div className=" items-stretch h-15 overflow-hidden p-3 justify-between  flex" >
        <div className=" ml-auto p-2 inline-block"><a onClick={lends}>Lending</a></div>
        <div className=" inline-block p-2 "><a>Governance</a></div>
        <div className="inline-block p-2 "><a onClick={swaps}>Swaps</a></div>
        {isConnected ? (
        <div className="inline-block p-2 "> Connected {accounts}</div>
        ) : (
            <button onClick={connectWallet} className="text-white/90 h-11 w-40 rounded-full bg-red-500/75 text-lg p-2 text-center shadow hover:shadow-lg"><p className=" mb-12 ">Connect Wallet</p></button>
        )  }
    </div>
)
}
export default navBar;