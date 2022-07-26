require("@nomiclabs/hardhat-waffle");

const fs =require("fs")
const privateKey ="4cc88b0701325b0510b9514c1c38d12ee3d3f4677677b214320867804c19f65b"
const projectId="b4e762e0f2b6469eb406646e30c7cb4c"
module.exports = {
  
  networks: {
   

 mumbai: {
   url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
   accounts: [privateKey]
 },
//  mainnet:{
//    url:`https://polygon-mainnet.infura.io/v3/${projectId}`,
//    accounts: [privateKey]
//  }
  },
  solidity:  "0.8.4",
   
}
