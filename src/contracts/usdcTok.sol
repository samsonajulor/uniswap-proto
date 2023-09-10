// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;

// create a token contract that inherits from the ERC20 contract

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDCToken is ERC20 {
    constructor() ERC20("USDCToken", "USDCTok") {
        _mint(msg.sender, 1000000000000000000000000);
    }
    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
    receive() external payable {}
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}