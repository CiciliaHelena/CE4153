const Bet = artifacts.require("Bet");

contract("Bet", async (accounts) => {
    // accounts are the list of account created by the Truffle (i.e. 10 key pair)
    // by default, the first account will deploy the contract
    it("should make deployer the owner", async () => {
      let bet = await Bet.deployed(); 
      let owner = await bet.owner(); 
      assert.equal(owner, accounts[0]); // compare the expected owner with the actual owner
    });
  
    it("can close question", async () => {
      let bet = await Bet.deployed();

      let result = await bank.closeQuestion({
        from: accounts[4],
        data: , // all amount are expressed in wei, this is 3 Ether in wei
      });
  
      // get deposited balance
      let deposited = await bank.balance({ from: accounts[4] });
      assert.equal(deposited.toString(), web3.utils.toWei("3"));
    });
  
    it("can withdraw less than despoited", async () => {
      let bank = await Bank.deployed();
      await bank.deposit({
        from: accounts[0],
        value: web3.utils.toWei("3"),
      });
      await bank.withdraw(web3.utils.toWei("2.9"), { from: accounts[0] });
  
      let deposited = await bank.balance({ from: accounts[0] });
      assert.equal(deposited.toString(), web3.utils.toWei("0.1"));
    });
  });
  