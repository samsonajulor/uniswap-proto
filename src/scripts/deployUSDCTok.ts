import { ethers } from 'hardhat';

// token address at sepolia = 0x57Df052B630Dd1a713C91CB87FAE9fC03AA3182a
async function main() {
  const lock = await ethers.deployContract('USDCToken', []);

  await lock.waitForDeployment();

  console.log(
    `ETHToken deployed to ${lock.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
