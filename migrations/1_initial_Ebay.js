const ebay = artifacts.require("Ebay");

module.exports = function(deployer) {
  deployer.deploy(ebay);
};
