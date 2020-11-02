const Bet = artifacts.require("Bet");

contract("Bet", async (accounts) => {
    // accounts are the list of account created by the Truffle (i.e. 10 key pair)
    // by default, the first account will deploy the contract
    it("should make deployer the owner", async () => {
      let bet = await Bet.deployed(); 
      let owner = await bet.owner(); 
      assert.equal(owner, accounts[0]); // compare the expected owner with the actual owner
    });

    it("can add question", async () =>{
        let bet = await Bet.deployed();

        let questionCount = await bet.addQuestion(
          desc = "desc",
          expiryTime = 1,
          arbitrator = "arb",
          options = ['a', 'b'],
          {
            from: accounts[1],
            //questionsCount, msg.sender, desc, expiryTime, true, arbitrator, options, msg.value
            value: web3.utils.toWei("1")   // deposit
          });

        let first_question = await bet.getQuestionById(1);

        assert.equal(questionCount, 1);
        assert.equal(bet.questions[1], first_question);
    }
    );
  
    // it("can close question", async () => {
    //   let bet = await Bet.deployed();

    //   await bet.addQuestion({
    //       from: accounts[],


    //   });

    //   let result = await bank.closeQuestion({
    //     from: accounts[4],
    //     data: , // all amount are expressed in wei, this is 3 Ether in wei
    //   });
  
    //   // get deposited balance
    //   let deposited = await bank.balance({ from: accounts[4] });
    //   assert.equal(deposited.toString(), web3.utils.toWei("3"));
    // });
  
    
  });
  