const hre = require("hardhat");

async function main() {
  const MTest = await hre.ethers.getContractFactory("MTest");
  const mTest = await MTest.deploy();

  await mTest.deployed();

  console.log(
    `deployed to ${mTest.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
