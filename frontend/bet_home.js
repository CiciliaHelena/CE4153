//import { useState, useRef, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
// NOTE: be aware of this: https://flaviocopes.com/parcel-regeneratorruntime-not-defined/
import Web3 from "web3";

// importing a compiled contract artifact which contains function signature etc. to interact
import artifact from "../build/contracts/Bet.json";

const myAddress = ""; // PLEASE CHANGE IT TO YOURS
const infuraWSS = ``; // PLEASE CHANGE IT TO YOURS

export const BetContractAddress = ""; // PLEASE CHANGE IT TO YOURS
export const Testnet = "ropsten"; // PLEASE CHANGE IT TO YOURS

const web3 = new Web3(
  Web3.currentProvider || new Web3.providers.WebsocketProvider(infuraWSS)
);
// doc here: https://web3js.readthedocs.io/en/v1.2.11/web3.html#providers
const contract = new web3.eth.Contract(artifact.abi, BetContractAddress);

export const showQuestionList = async (i) => {
  // doc here: https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html#methods-mymethod-call
  let qid, qdesc, qexp;
  if (!i){
      qid, qdesc, qexp = await contract.methods.getAllQuestions().call();
  }
  else if(i==1){
      // open questions
      qid, qdesc, qexp = await contract.methods.getFilteredQuestions(true).call();
  }
  else {
      // closed questions
      qid, qdesc, qexp = await contract.methods.getFilteredQuestions(false).call();
  }

  return qid, qdesc, qexp; 
  
};