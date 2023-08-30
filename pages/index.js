
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";

// Add some basic CSS for styling
const styles = {
  container: {
    margin: "auto",
    width: "50%",
    padding: "10px",
    textAlign: "center",
    border: "3px solid green",
    borderRadius: "10px",
  },
  button: {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
  },
};

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(undefined);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const atmABI = atm_abi.abi;

  // ... Rest of the code remains the same
  
  return (
    <div style={styles.container}>
      <h1>Welcome to the Ethereum Smart Contract Interaction Portal</h1>
      <p>Connect your Ethereum wallet to interact with the smart contract.</p>
      <button style={styles.button} onClick={/* Function to connect wallet */}>
        Connect Wallet
      </button>
    </div>
  );
}
