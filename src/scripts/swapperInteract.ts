import { ethers } from 'hardhat';
import {ITOK} from '../typechain-types/contracts/interfaces/ITOK';

// token address at sepolia = 0x0dF9E9f0FC5aDbd840e7332DDE021c6B3C1e5e7C

async function main() {
  // get signers
  const [deployer] = await ethers.getSigners();
  const swapperAddress = '0x0dF9E9f0FC5aDbd840e7332DDE021c6B3C1e5e7C';
  const USDCToken = '0x57Df052B630Dd1a713C91CB87FAE9fC03AA3182a';
  const ETHToken = '0x57Df052B630Dd1a713C91CB87FAE9fC03AA3182a';
  const uniswapProtoContract = await ethers.getContractAt('ISwapper', swapperAddress);
  const usdcTokenContract = await ethers.getContractAt('ITOK', USDCToken);
  const ethTokenContract = await ethers.getContractAt('ITOK', ETHToken);

  const ethBalanceBefore = await uniswapProtoContract.getETHTokReserves();
  console.log('ethBalanceBefore', ethBalanceBefore.toString());
  const usdcBalanceBefore = await uniswapProtoContract.getUSDCTokReserves();
  console.log('usdcBalanceBefore', usdcBalanceBefore.toString());

  // add liquidity
  await uniswapProtoContract.AddLiquidity(200, 200);
  // log the reserves
  const ethBalanceAfter = await uniswapProtoContract.getETHTokReserves();
  console.log('ethBalanceAfter', ethBalanceAfter.toString());
  const usdcBalanceAfter = await uniswapProtoContract.getUSDCTokReserves();
  console.log('usdcBalanceAfter', usdcBalanceAfter.toString());

  // remove liquidity
  await uniswapProtoContract.removeLiquidity(200, 200);
  // log the reserves
  const ethBalanceAfter2 = await uniswapProtoContract.getETHTokReserves();
  console.log('ethBalanceAfterRemoval', ethBalanceAfter2.toString());
  const usdcBalanceAfter2 = await uniswapProtoContract.getUSDCTokReserves();
  console.log('usdcBalanceAfterRemoval', usdcBalanceAfter2.toString());

  // allow usdc to be spent by swapper
  await usdcTokenContract.allowance(deployer.address, swapperAddress);
  // approve usdc
  await usdcTokenContract.approve(swapperAddress, 1000000000000);
  // swap eth for usdc
  await uniswapProtoContract.swapETHTokForUSDCTok(100);
  // log the reserves
  const ethBalanceAfter3 = await uniswapProtoContract.getETHTokReserves();
  console.log('ethBalanceAfterSwap', ethBalanceAfter3.toString());
  const usdcBalanceAfter3 = await uniswapProtoContract.getUSDCTokReserves();
  console.log('usdcBalanceAfterSwap', usdcBalanceAfter3.toString());

  // allow eth to be spent by swapper
  await ethTokenContract.allowance(deployer.address, swapperAddress);
  // approve eth
  await ethTokenContract.approve(swapperAddress, 1000000000000);
  // swap usdc for eth
  await uniswapProtoContract.swapUSDCTokForETHTok(100);
  // log the reserves
  const ethBalanceAfter4 = await uniswapProtoContract.getETHTokReserves();
  console.log('ethBalanceAfterSwap', ethBalanceAfter4.toString());
  const usdcBalanceAfter4 = await uniswapProtoContract.getUSDCTokReserves();
  console.log('usdcBalanceAfterSwap', usdcBalanceAfter4.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
