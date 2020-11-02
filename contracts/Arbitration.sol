pragma solidity >= 0.5.16;

contract Arbitration {
    struct Option {
        uint option_id;
        string description;
        uint option_balance;

    }

    string public description;
    uint public winningOption;
    address public arbiter;
    Option[] public options;

    constructor(address _arbiter) public {
        arbiter = _arbiter;
    }

    function addDetails() public {

    }

    function selectWinner() public returns (uint) {
        winningOption = 1;

        return winningOption;
    }

}