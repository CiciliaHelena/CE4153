pragma solidity >= 0.5.16;

contract Arbitration {
    string public description;
    string public winningOpinion;
    address public arbiter;
    string[] public options;

    function setDescription(string memory _description) public {
        description = _description;
    }

    function selectWinner(uint proposalNumber) public {
        

        winningOpinion = options[proposalNumber];
    }

}