import { ethers } from 'hardhat';

// token address at sepolia = 0x9F92Ffb1024Fd74B43836A8E95FA74E567971d56
async function main() {
  // const lock = await ethers.deployContract('ETHToken', []);

  // await lock.waitForDeployment();

  // console.log(
  //   `ETHToken deployed to ${lock.target}`
  // );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
