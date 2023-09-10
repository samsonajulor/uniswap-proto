import { ethers } from 'hardhat';

// token address at sepolia = 0x0dF9E9f0FC5aDbd840e7332DDE021c6B3C1e5e7C
async function main() {
  const lock = await ethers.deployContract('Swapper', []);

  await lock.waitForDeployment();

  console.log(
    `ETHToken deployed to ${lock.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
