import { ethers } from 'hardhat';

// token address at sepolia = 0x0dF9E9f0FC5aDbd840e7332DDE021c6B3C1e5e7C
async function main() {
  const swapperAddress = '0x0dF9E9f0FC5aDbd840e7332DDE021c6B3C1e5e7C';

  const uniswapContract = await ethers.getContractAt('ISwapper', swapperAddress);

  // set signer's balance
  // await network.provider.send('hardhat_setBalance', [UNIHOLDER, '0x9DC0ED08D31E336800']);

  const ethBalanceBefore = await uniswapContract.getETHTokReserves();
  console.log('ethBalanceBefore', ethBalanceBefore.toString());
  const usdcBalanceBefore = await uniswapContract.getUSDCTokReserves();
  console.log('usdcBalanceBefore', usdcBalanceBefore.toString());

  // add liquidity
  await uniswapContract.AddLiquidity(200, 200);
  // log the reserves
  const ethBalanceAfter = await uniswapContract.getETHTokReserves();
  console.log('ethBalanceAfter', ethBalanceAfter.toString());
  const usdcBalanceAfter = await uniswapContract.getUSDCTokReserves();
  console.log('usdcBalanceAfter', usdcBalanceAfter.toString());

  // remove liquidity
  await uniswapContract.removeLiquidity(200, 200);
  // log the reserves
  const ethBalanceAfter2 = await uniswapContract.getETHTokReserves();
  console.log('ethBalanceAfterRemoval', ethBalanceAfter2.toString());
  const usdcBalanceAfter2 = await uniswapContract.getUSDCTokReserves();
  console.log('usdcBalanceAfterRemoval', usdcBalanceAfter2.toString());

  // swap eth for usdc
  await uniswapContract.swapETHTokForUSDCTok(100);
  // log the reserves
  const ethBalanceAfter3 = await uniswapContract.getETHTokReserves();
  console.log('ethBalanceAfterSwap', ethBalanceAfter3.toString());
  const usdcBalanceAfter3 = await uniswapContract.getUSDCTokReserves();
  console.log('usdcBalanceAfterSwap', usdcBalanceAfter3.toString());

  // swap usdc for eth
  await uniswapContract.swapUSDCTokForETHTok(100);
  // log the reserves
  const ethBalanceAfter4 = await uniswapContract.getETHTokReserves();
  console.log('ethBalanceAfterSwap', ethBalanceAfter4.toString());
  const usdcBalanceAfter4 = await uniswapContract.getUSDCTokReserves();
  console.log('usdcBalanceAfterSwap', usdcBalanceAfter4.toString());

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
