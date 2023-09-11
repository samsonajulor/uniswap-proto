# uniswap-proto

This Contract was deployed to sepolia testnet via the following commands

- RUN `cd src`
- RUN `npx hardhat compile`
- RUN `npx hardhat run scripts/deployEthTok.ts --network sepolia`
- copy the deployed contract address and save. Input into the ETHTok variable of swapper.sol constructor.
- RUN `npx hardhat run scripts/deployUSDCTok.ts --network sepolia`
- copy the deployed contract address and save the input into the USDCTok variable of the swapper.sol constructor.
- RUN `npx hardhat run scripts/deploySwapper.ts --network sepolia`
