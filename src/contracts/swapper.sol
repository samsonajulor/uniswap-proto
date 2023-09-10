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

    function AddLiquidity(uint _USDCTokAmount, uint _ETHTokAmount) public {
        // add liquidity to the pool
        ITOK(USDCTok).mint(address(this), _USDCTokAmount);
        ITOK(ETHTok).mint(address(this), _ETHTokAmount);
        ITOK(USDCTok).transfer(address(this), _USDCTokAmount);
        ITOK(ETHTok).transfer(address(this), _ETHTokAmount);

        // update the reserves
        liquidityProviders[msg.sender].USDCTokReserve += _USDCTokAmount;
        liquidityProviders[msg.sender].ETHTokReserve += _ETHTokAmount;
    }

    function removeLiquidity(uint _USDCTokAmount, uint _ETHTokAmount) public {
        // ensure that the sender has enough liquidity
        require(
            liquidityProviders[msg.sender].USDCTokReserve >= _USDCTokAmount &&
            liquidityProviders[msg.sender].ETHTokReserve >= _ETHTokAmount,
            "Insufficient liquidity"
        );

        // remove the liquidity
        liquidityProviders[msg.sender].USDCTokReserve -= _USDCTokAmount;
        liquidityProviders[msg.sender].ETHTokReserve -= _ETHTokAmount;

        // transfer tokens back to the sender
        ITOK(USDCTok).transfer(msg.sender, _USDCTokAmount);
        ITOK(ETHTok).transfer(msg.sender, _ETHTokAmount);
    }
    
    function getETHTokReserves() public view returns (uint _ETHTok) {
        _ETHTok = ITOK(ETHTok).balanceOf(address(this));
    }
    
    function getUSDCTokReserves() public view returns (uint _USDCTok) {
        _USDCTok = ITOK(USDCTok).balanceOf(address(this));
    }

    // Function to swap USDCTok for ETHTok
    function swapUSDCTokForETHTok(uint256 _USDCTokAmount) public {
        require(_USDCTokAmount > 0, "Amount must be greater than zero");

        // Calculate the amount of ETHTok to receive using the CPMM formula
        uint256 totalUSDCTokReserve = ITOK(USDCTok).balanceOf(address(this));
        uint256 totalETHTokReserve = ITOK(ETHTok).balanceOf(address(this));


        // totalUSDCTokReserve * totalETHTokReserve = k
        // (totalUSDCTokReserve + _USDCTokAmount) * (totalETHTokReserve - _ETHTokAmount) = k
        // _ETHTokAmount = totalETHTokReserve - (k / (totalUSDCTokReserve + _USDCTokAmount)) 
        // Calculate the new reserves after the swap
        uint256 newTotalUSDCTokReserve = totalUSDCTokReserve + _USDCTokAmount;
        uint256 newTotalETHTokReserve = totalETHTokReserve - ((totalUSDCTokReserve * _USDCTokAmount) / newTotalUSDCTokReserve);

        // Calculate the amount of ETHTok to send to the sender
        uint256 amountETHTokOut = totalETHTokReserve - newTotalETHTokReserve;

        // Approve and Transfer USDCTok from the sender to the contract
        ITOK(USDCTok).allowance(msg.sender, address(this));
        ITOK(USDCTok).allowance(address(this), msg.sender);
        ITOK(ETHTok).approve(msg.sender, _USDCTokAmount);
        ITOK(ETHTok).approve(address(this), _USDCTokAmount);
        // ITOK(USDCTok).transferFrom(msg.sender, address(this), _USDCTokAmount);

        // Transfer ETHTok to the sender
        ITOK(ETHTok).transfer(msg.sender, amountETHTokOut);
    }

    // function to swap ETHTok for USDCTok
    function swapETHTokForUSDCTok(uint256 _ETHTokAmount) public {
        require(_ETHTokAmount > 0, "Amount must be greater than zero");

        // Calculate the amount of USDCTok to receive using the CPMM formula
        uint256 totalUSDCTokReserve = ITOK(USDCTok).balanceOf(address(this));
        uint256 totalETHTokReserve = ITOK(ETHTok).balanceOf(address(this));

        // totalUSDCTokReserve * totalETHTokReserve = k
        // (totalUSDCTokReserve - _USDCTokAmount) * (totalETHTokReserve + _ETHTokAmount) = k
        // _ETHTokAmount = totalUSDCTokReserve - (k / (totalETHTokReserve + _USDCTokAmount)) 
        // Calculate the new reserves after the swap
        uint256 newTotalETHTokReserve = totalETHTokReserve + _ETHTokAmount;
        uint256 newTotalUSDCTokReserve = totalUSDCTokReserve - ((totalETHTokReserve * _ETHTokAmount) / newTotalETHTokReserve);

        // Calculate the amount of USDCTok to send to the sender
        uint256 amountUSDCTokOut = totalUSDCTokReserve - newTotalUSDCTokReserve;

        // Approve and Transfer ETHTok from the sender to the contract
        ITOK(USDCTok).allowance(msg.sender, address(this));
        ITOK(USDCTok).allowance(address(this), msg.sender);
        ITOK(ETHTok).approve(msg.sender, _ETHTokAmount);
        ITOK(ETHTok).approve(address(this), _ETHTokAmount);
        // ITOK(ETHTok).transferFrom(msg.sender, address(this), _ETHTokAmount);

        // Transfer USDCTok to the sender
        ITOK(USDCTok).transfer(msg.sender, amountUSDCTokOut);
    }


    constructor() {
        USDCTok = 0x0925866e1e5B629416e8199003458de8697e43AE;
        ETHTok = 0x9F92Ffb1024Fd74B43836A8E95FA74E567971d56;
    }
}