WSC Prediction Market
This is a development project of course CX4153: Blockchain Technology to build a platform for users to create and participate in prediction markets. Users are allowed to view the list of open & closed markets, current bets and outcome probability, resolution date and all relevant info on the page. Users are also allowed to create new markets by specifying the question, options, arbitrator and resolution date. 

The following are the steps involved to run the dapp locally:  

Step 0: Prerequisite & Installation
Make sure the following are installed:

node v8.9.4 or later
npm or yarn (you can test by running npm -v or yarn -v)
MetaMask Extension and created at least 1 account
Next, install truffle:

npm install truffle -g # or if you're using yarn: yarn global add truffle
truffle version # ensure successful installation

Then, install ganache. 

Step 1: Compile Contracts:

truffle compile

Step 2: Migrate/Deploy Smart Contracts Locally: 
Step 2.1: Start Your Local Blockchain
Start your Ganache by double clicking the downloaded app image during installation.

Click on "New Workspace (Ethereum)", which will create a running instance of Ethereum node locally -- together with 10 accounts created, each with 100 ETH balance for you to play with during tests

Next, we need to link our truffle project with our local ganache blockchain, by specifying a customized workspace name and the path to our truffle-config.js.

Step 2.2: Deploy contracts

truffle migrate

Step 2.3: Update contract address used 
Check the contract address of Bet in our local ganache blockchain and copy the address to /frontend/bet_home.js, /frontend/bet_new_question.js and /frontend/bet_question.js. 

Step 3: Run the dapp locally:

npm start 