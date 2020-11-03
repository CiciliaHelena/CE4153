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

        await bet.addQuestion(
          _desc = "desc1",
          _expiryTime = 5,
          _arbitrator = "0xfC159e8a4bC84154b622aCF94a8e93F4506118B9",
          _options = ['a', 'b', 'c'],
          
          {
            from: accounts[1],
            //questionsCount, msg.sender, desc, expiryTime, true, arbitrator, options, msg.value
            value: web3.utils.toWei("1")   // deposit
          }
        );

        await bet.addQuestion(
          _desc = "desc2",
          _expiryTime = 10,
          _arbitrator = "0xfC159e8a4bC84154b622aCF94a8e93F4506118B9",
          _options = ['a', 'b', 'c'],
          
          {
            from: accounts[1],
            //questionsCount, msg.sender, desc, expiryTime, true, arbitrator, options, msg.value
            value: web3.utils.toWei("2")   // deposit
          }
        );

        // let result_id, result_description, result_expiryTime, result_opt_desc, result_opt_count = await bet.getQuestionById.call(
        //   qid = 1
        // );

        //let expTime = await bet.questionExpiry.call(qid = 1);
        let desc = await bet.getDescription(2);

        assert.equal(desc, "desc2");
        //assert.equal(expTime, true);

        // assert.equal(bet.questions[1].description, result_description);
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
  