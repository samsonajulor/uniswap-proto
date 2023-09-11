// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;

import {ITOK} from "./interfaces/ITOK.sol";

contract Swapper {
    address public USDCTok;
    address public ETHTok;

    struct LiquidityProvider {
        uint USDCTokReserve;
        uint ETHTokReserve;
    }

    mapping(address => LiquidityProvider) public liquidityProviders;

    function addLiquidity(uint _USDCTokAmount, uint _ETHTokAmount) public {
        // Add liquidity to the pool
        ITOK(USDCTok).mint(address(this), _USDCTokAmount);
        ITOK(ETHTok).mint(address(this), _ETHTokAmount);

        // Update the reserves for the liquidity provider
        liquidityProviders[msg.sender].USDCTokReserve += _USDCTokAmount;
        liquidityProviders[msg.sender].ETHTokReserve += _ETHTokAmount;
    }

    function removeLiquidity(uint _USDCTokAmount, uint _ETHTokAmount) public {
        // Ensure that the sender has enough liquidity
        require(
            liquidityProviders[msg.sender].USDCTokReserve >= _USDCTokAmount &&
            liquidityProviders[msg.sender].ETHTokReserve >= _ETHTokAmount,
            "Insufficient liquidity"
        );

        // Remove the liquidity
        liquidityProviders[msg.sender].USDCTokReserve -= _USDCTokAmount;
        liquidityProviders[msg.sender].ETHTokReserve -= _ETHTokAmount;

        // Transfer tokens back to the sender
        ITOK(USDCTok).transfer(msg.sender, _USDCTokAmount);
        ITOK(ETHTok).transfer(msg.sender, _ETHTokAmount);
    }

    // Function to swap USDCTok for ETHTok
    function swapUSDCTokForETHTok(uint256 _USDCTokAmount) public {
        require(_USDCTokAmount > 0, "Amount must be greater than zero");

        // Calculate the amount of ETHTok to receive using the CPMM formula
        uint256 totalUSDCTokReserve = ITOK(USDCTok).balanceOf(address(this));
        uint256 totalETHTokReserve = ITOK(ETHTok).balanceOf(address(this));

        // Ensure that there's enough liquidity in the reserves
        require(totalUSDCTokReserve > 0 && totalETHTokReserve > 0, "Insufficient liquidity");

        // Calculate the amount of ETHTok to send to the sender
        uint256 amountETHTokOut = (totalETHTokReserve * _USDCTokAmount) / totalUSDCTokReserve;

        // Transfer USDCTok from the sender to the contract
        ITOK(USDCTok).transferFrom(msg.sender, address(this), _USDCTokAmount);

        // Transfer ETHTok to the sender
        ITOK(ETHTok).transfer(msg.sender, amountETHTokOut);
    }

    // Function to swap ETHTok for USDCTok
    function swapETHTokForUSDCTok(uint256 _ETHTokAmount) public {
        require(_ETHTokAmount > 0, "Amount must be greater than zero");

        // Calculate the amount of USDCTok to receive using the CPMM formula
        uint256 totalUSDCTokReserve = ITOK(USDCTok).balanceOf(address(this));
        uint256 totalETHTokReserve = ITOK(ETHTok).balanceOf(address(this));

        // Ensure that there's enough liquidity in the reserves
        require(totalUSDCTokReserve > 0 && totalETHTokReserve > 0, "Insufficient liquidity");

        // Calculate the amount of USDCTok to send to the sender
        uint256 amountUSDCTokOut = (totalUSDCTokReserve * _ETHTokAmount) / totalETHTokReserve;

        // Transfer ETHTok from the sender to the contract
        ITOK(ETHTok).transferFrom(msg.sender, address(this), _ETHTokAmount);

        // Transfer USDCTok to the sender
        ITOK(USDCTok).transfer(msg.sender, amountUSDCTokOut);
    }

    function getETHTokReserves() public view returns (uint) {
        return ITOK(ETHTok).balanceOf(address(this));
    }

    function getUSDCTokReserves() public view returns (uint) {
        return ITOK(USDCTok).balanceOf(address(this));
    }

    constructor() {
        USDCTok = 0x57Df052B630Dd1a713C91CB87FAE9fC03AA3182a;
        ETHTok = 0x18aBf89D5932B62Ee68101D9F689c4200FA55096;
    }
}