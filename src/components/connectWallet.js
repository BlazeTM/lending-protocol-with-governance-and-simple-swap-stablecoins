import React from "react";
import { ethers } from "ethers";
import { Button } from '@mui/material';
import '../App.css';

async function connectWallet(setAccounts, accounts) {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const { chainId } = await provider.getNetwork();
    console.log(chainId); // 941
    if(chainId == 941){
    accounts = await provider.send('eth_requestAccounts',[])
    setAccounts(accounts);
    } else {
        alert("Change network to Pulsechain v2b");
    }

    return(
        <button onClick={connectWallet} className="text-white/90 h-8 w-60 rounded-full bg-red-500/75 text-lg">Connect Wallet</button>
    )
}
export default connectWallet;