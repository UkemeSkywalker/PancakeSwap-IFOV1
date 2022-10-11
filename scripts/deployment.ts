import { ethers } from "hardhat";

async function main (){

    const IFOContract = await ethers.getContractFactory("IFO");
    const deployIFO = await IFOContract.deploy();
    await deployIFO.deployed();

    console.log("IFO Contract deployed to:", deployIFO.address);

    

}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1;
})