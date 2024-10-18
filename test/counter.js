const { require } = require("chai");
const { ethers } = require("hardhat");

describe("Counter Contract", () => {
  it("Should increment the counter", async () => {
    const Counter = await ethers.getCoontractFactory("Counter");
    const counter = await Counter.deploy(0);
    console.log("Counter:", counter);

    await counter.increment();
    const updatedCounter = counter.getCounter();

    expect(updatedCounter).to.equal(1);
  });
});
