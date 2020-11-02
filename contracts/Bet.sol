// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

import "./Arbitration.sol";
import "./Datetime.sol"; 

contract Bet {

    struct Option {
        uint option_id;
        string description;
        uint option_balance;
        address[] addresses;

        mapping(address => uint) private individual_bets;
        uint public individualCount;

        constructor(uint _option_id, string _desc){
            option_id = _option_id;
            description = _desc;
        }
    }

    struct Question{
        uint question_id;
        address owner;
        string description;
        uint resolution_time;
        bool open = true;
        address arbitrator;
        uint question_balance;

        Option[] options;

        constructor(uint _questionsCount, address _owner, string _desc, uint _expiryTime, true, address _arbitrator, string[] _options){
            question_id = _questionsCount;
            owner = _owner;
            description = _desc;
            resolution_time = _expiryTime;
            arbitrator = _arbitrator;
            
            for (uint i=0; i< _options.length; i++){
                options[i] = Option(i, _options[i]);
            }

        }
        
    }

    mapping(uint => Question) public questions;
    uint public questionsCount;
    address public owner;

    constructor () public {
        owner = msg.sender;
    }

    function addQuestion() public {
        require(msg.value >= 1);

        questionsCount++;
        //declare & define options struct
        questions[questionsCount] = Question(questionsCount, msg.sender, string desc, uint expiryTime, true, address arbitrator, string[] options);

        return questionsCount;
    }

    function updateQuestionStatus() private {
        for(uint i=1; i<=questionsCount; i++){
            if(questions[i].open == true){
                // if(questions[i].resolution_time <= )
            }
        }
    }

    function getAllQuestions() public {
        updateQuestionStatus();

        return questions;
    }

    function getFilteredQuestions(bool isOpen) public {
        updateQuestionStatus();
        mapping(uint => Question) public filteredQuestions;

        for(uint i=1; i<=questionsCount; i++){
            if(questions[i].open == isOpen){
                filteredQuestions.append(questions[i]);
            }
        }

        return filteredQuestions;
    }

    function getQuestionById(uint qid) public {
        updateQuestionStatus();
        require(qid <= questionsCount);

        for(uint i=1; i<=questionsCount; i++){
            if(questions[i].question_id == qid){
                return questions[i];
            }
        }
    }

    function closeQuestion(uint question_id) private {
        require(question_id <= questionsCount);
        require(questions[question_id].open == true);

        Question qtn = questions[question_id];

        arb = Arbitration(qtn.description, qtn.options, qtn.arbitrator);

        correct_prediction = arb.selectWinner();

        correct_option = qtn.options[correct_prediction];

        total_reward = qtn.question_balance;

        for(uint i=1; i<=correct_option.individualCount; i++){
            reward_address = correct_option.addresses[i];
            reward_amount = correct_option.individual_bets[reward_address] / correct_option.option_balance * total_reward;

            require(reward_amount <= qtn.question_balance);
            qtn.question_balance -= reward_amount;
            reward_address.transfer(reward_amount);
        }

        qtn.open = false;

        return question_id;
    }

    function makeBet(uint question_id, uint option_id) public payable {
        require(questions[question_id].open == true);

        Question qtn = questions[question_id];
        Option opt = qtn.options[option_id];

        if (!opt.individual_bets[msg.sender]){
            opt.individualCount += 1;
            opt.addresses.append(msg.sender);
        }

        opt.individual_bets[msg.sender] += msg.value;
        opt.option_balance += msg.value;

        qtn.question_balance += msg.value;

        return question_id;
    }
    
}