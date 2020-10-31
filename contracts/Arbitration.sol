pragma solidity >= 0.5.16;

contract Arbitration {
    struct Option {
        uint option_id;
        string description;
        uint option_balance;

        mapping(address => uint) private individual_bets;
        uint public individualCount;
    }

    string public description;
    uint public winningOption;
    address public arbiter;
    Option[] public options;

    constructor(string _questionDescription, Option[] _options, address _arbiter){
        description = _questionDescription;
        options = _options;
        arbiter = _arbiter;
    }

    function selectWinner() public returns (uint) {
        winningOption = 1;

        return winningOption;
    }

}