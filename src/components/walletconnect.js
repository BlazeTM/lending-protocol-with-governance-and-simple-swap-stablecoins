import React from "react";

const WalletConnect = ({ accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectWallet() {
        if(window.ethereum) {
            const accounts = await window.ethereum.request( {
                method: "eth_requestAccounts",
            })
            setAccounts(accounts);
        }
    }
    


    
return(
    <div className="navbar">
        <div className="nav"><a>Lending</a></div>
        <div className="nav"><a>Governance</a></div>
        <div className="nav"><a>Swaps</a></div>
        <div className="nav"><a>Token</a></div>
        {isConnected ? (
        <div className="nav"> Connected {accounts}</div>
        ) : (
        <button className="nav" onClick={connectWallet}>Connect Wallet</button>
        )  }
    </div>
)
}
export default WalletConnect;