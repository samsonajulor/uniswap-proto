// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;

interface ISwapper {
    function swapUSDCTokForETHTok(uint256 _USDCTokAmount) external;
    function swapETHTokForUSDCTok(uint256 _ETHTokAmount) external;
    function getETHTokReserves() external view returns (uint _ETHTok);
    function getUSDCTokReserves() external view returns (uint _USDCTok);
    function AddLiquidity(uint _USDCTokAmount, uint _ETHTokAmount) external;
    function removeLiquidity(uint _USDCTokAmount, uint _ETHTokAmount) external;
}
