const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer Address:", deployer.address);

  const Counter = await ethers.getContractFactory("Counter");

  // Desplegar el contrato
  const counter = await Counter.deploy(0);

  // Imprimir el objeto del contrato
  console.log("Counter Object:", counter);

  // Imprimir la dirección del contrato desplegado
  console.log("Counter Contract Address:", counter.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//Counter Contract Address: 0x5FbDB2315678afecb367f032d93F642f64180aa3
