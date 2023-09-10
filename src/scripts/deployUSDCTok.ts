import { ethers } from 'hardhat';

// token address at sepolia = 0x0925866e1e5B629416e8199003458de8697e43AE
async function main() {
  // const lock = await ethers.deployContract('USDCToken', []);

  // await lock.waitForDeployment();

  // console.log(
  //   `ETHToken deployed to ${lock.target}`
  // );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
