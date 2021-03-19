import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";
import vendingMachineImg from "./VendingMachine.png";

function VendingMachine() {
  return(
    <div
      className="VendingMachine"
      style={{ backgroundImage: `url(${vendingMachineImg})` }}>
        <h1>hello i am a vending machine. what would you like to eat?</h1>
        <hr></hr>
        <div className="VendingMachine-nav">
        <h3><Link to="/candy">Candy</Link></h3>
        <h3><Link to="/cookie">Cookie</Link></h3>
        <h3><Link to="/chip">Chip</Link></h3>
        </div>
    </div>
  );
}

export default VendingMachine;
