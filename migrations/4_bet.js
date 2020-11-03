const Bet = artifacts.require("Bet"); // importing artifacts from Truffle compile

module.exports = function (deployer) {
  // deployer is an object provided by Truffle to handle migration
  deployer.deploy(Bet); // now, we ask deployer to deploy our Bank.sol contract
};