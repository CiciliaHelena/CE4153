// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

import "./Arbitration.sol";

contract Bet {

    struct Option {
        uint option_id;
        string description;
        uint option_balance;
        address[] addresses;

        mapping(address => uint) private individual_bets;
        uint public individualCount;
    }

    struct Question{
        uint question_id;
        address owner;
        string description;
        uint resolution_time;
        bool open;
        address arbitrator;
        uint question_balance;

        Option[] options;
        
    }

    mapping(uint => Question) public questions;
    uint public questionsCount;

    function addQuestion() private{
        require(msg.value >= 1);

        questionsCount++;
        //declare & define options struct
        questions[questionsCount] = Question(questionsCount, msg.sender, msg.data, uint expiryTime, true, address arbitrator, Option[] options);




    }

    function updateQuestionStatus(){
        for(uint i=1; i<=questionsCount; i++){
            if(questions[i].open == true){
                // check expiry
                // if expired call closeQuestion

            }
        }
    }

    function getAllQuestions() private{
        updateQuestionStatus();

        return questions;
    }

    function getFilteredQuestions(bool isOpen) private{
        updateQuestionStatus();
        mapping(uint => Question) public filteredQuestions;

        for(uint i=1; i<=questionsCount; i++){
            if(questions[i].open == isOpen){
                filteredQuestions.append(questions[i]);
            }
        }

        return filteredQuestions;
    }

    function getQuestionById(uint qid) private{
        updateQuestionStatus();
        require(qid <= questionsCount);

        for(uint i=1; i<=questionsCount; i++){
            if(questions[i].question_id == qid){
                return questions[i];
            }
        }
    }

    function closeQuestion(uint question_id) private{
        require(question_id <= questionsCount);
        require(questions[question_id].open == true);

        uint qtn = questions[question_id];

        arb = Arbitration(qtn.description, qtn.options, qtn.arbitrator);

        correct_prediction = arb.selectWinner();

        correct_option = qtn.options[correct_prediction];

        total_reward = qtn.question_balance;

        for(uint i=1; i<=correct_option.addresses.length; i++){
            reward_address = correct_option.addresses[i];
            reward_amount = correct_option.individual_bets[reward_address] / correct_option.option_balance * total_reward;

            require(reward_amount <= qtn.question_balance);
            qtn.question_balance -= reward_amount;
            reward_address.transfer(reward_amount);
        }

        qtn.open = false;

        return question_id;
    }

    function makeBet() private{

    }
    
}