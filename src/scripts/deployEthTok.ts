import { ethers } from 'hardhat';

// token address at sepolia = 0x18aBf89D5932B62Ee68101D9F689c4200FA55096
async function main() {
  const lock = await ethers.deployContract('ETHToken', []);

  await lock.waitForDeployment();

  console.log(
    `ETHToken deployed to ${lock.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
