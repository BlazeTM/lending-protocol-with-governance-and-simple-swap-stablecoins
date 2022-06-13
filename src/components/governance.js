import React from "react";
import { ethers } from "ethers";
import '../App.css';
import Dai from "./DAI.webp";

function Governance () {

    return(
        <div className="place-items-center min-h-screen min-w-screen ">
            <div className="ml-80">
            <div className="ml-60">
            <div className="ml-72 p-8">
            <h1 className="" >Governance</h1>
            </div>
            </div>
            <div className="flex space-x-5 ml-60 p-8">
            <p>Asset</p>
            <p>Total Supply</p>
            <p>Supply APY</p>
            <p>Total Debt</p>
            <p>Borrow APR</p>
            <p>Wallet Balance</p>
            <p>Operations</p>
            </div>
            <div className="flex ml-72 space-x-5 p-2">
                <p className="flex ml-4"><img className="w-6 h-6 mr-2" src={Dai} /> DAI</p>
                <p className=""> 100000 DAI</p>
                <p className=""> 10%</p> 
                <p> 10000 DAI</p>
            </div>
            </div>
        </div>
    )
}

export default Governance;