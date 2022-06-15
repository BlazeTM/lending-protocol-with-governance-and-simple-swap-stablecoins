import React from "react";
import { ethers } from "ethers";
import '../App.css';
import Dai from "./DAI.webp";
import { Grid, Card } from "@mui/material";
import { ClassNames } from "@emotion/react";

const proposals = [
    {id: 1, title: 'Change rates', text: 'Change rates to 8%' },
    {id: 2, title: 'Change rates to 10%', text: 'Change rates to 12%' },
    {id: 3, title: 'Change rates', text: 'Change rates to 8%' },
    {id: 4, title: 'Change rates to 10%', text: 'Change rates to 12%' }
];
function voteButton(id) {
    console.log(id);
}

function Governance() {
    const sidebar = (
      <ul>
        {proposals.map((proposal) =>
          <li key={proposal.id}>
            {proposal.title}
          </li>
        )}
      </ul>
    );
    const content = proposals.map((proposal) =>
      <tr key={proposal.id} >
        <td>{proposal.id}</td>
        <td>{proposal.title}</td>
        <td>{proposal.text}</td>
        <td><button className="text-white/90 h-8 w-20 rounded-full bg-button2 ml-2 text-lg shadow hover:shadow-lg" onClick={voteButton(proposal.id)}>Vote</button></td>
      </tr>
    );
    return (
      <div className="mx-auto">
        <table className="text-white/90 border-4 border-spacing-10  border-blackmy ml-725px mt-20 table-auto">
          <thead>
            <tr>
              <th className="border-4 border-blackmy border-spacing-10 ">ID</th>
              <th className="border-4 border-blackmy border-spacing-10">Title of Proposal</th>
              <th className="border-4 border-blackmy border-spacing-10 ">Description of Proposal</th>
              <th className="border-4 border-blackmy border-spacing-10 ">Operations</th>
            </tr>
          </thead>
          <tbody>
            
            {content}
           
          </tbody>
        </table>
        
      </div>
    );
  }
export default Governance;