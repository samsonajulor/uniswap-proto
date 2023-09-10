// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;

interface ITOK {
    function mint(address _account, uint256 _amount) external;
    function getBalance() external view returns (uint256);
    function transfer(address, uint) external;
    function balanceOf(address) external view returns (uint);
    function approve(address, uint) external;
    function transferFrom(address, address, uint) external;
    function allowance(address, address) external view returns (uint);
}
