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

export const createQuestion = async (desc, expiryTime, arbitrator, options) => {

  const provider = await detectEthereumProvider();
    if (provider) {
        // From now on, this should always be true:
        // provider === window.ethereum
        ethereum.request({
            method: "eth_sendTransaction",
            params: [
            {
                from: ethereum.selectedAddress,
                to: BetContractAddress,
                value: web3.utils.toHex(web3.utils.toWei(amount)), // have to convert to hexdemical for big number
                data: web3.eth.abi.encodeFunctionCall(
                {
                  name: "addQuestion",
                  type: "function",
                  inputs: [{
                      type: 'string',
                      name: 'desc'
                  },{
                      type: 'uint256',
                      name: 'expiryTime'
                  },{
                      type: 'address',
                      name: 'arbitrator'
                  },{
                      type: 'string[]',
                      name: 'options'
                  }]
                },
                [desc, expiryTime, arbitrator, options]
            ), 
            chainId: 3, // ropsten
            },
            ],
        });
    } else {
        console.log("Please install MetaMask!");
    }

  );

};
