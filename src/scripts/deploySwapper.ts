import { ethers } from 'hardhat';

// token address at sepolia = 0x3674651AF1b1c3615621D0279Cca7f510DFeAF51
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
