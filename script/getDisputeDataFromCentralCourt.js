import Kleros from '../src/Kleros'
import Web3 from 'web3'
import contract from 'truffle-contract'
import {LOCALHOST_PROVIDER} from '../constants'
import config from '../config'

let arbitrableTransaction

let getDisputeFromCentralCourt = async (contractAddress, disputeId) => {
  // use testRPC
  const provider = await new Web3.providers.HttpProvider(LOCALHOST_PROVIDER)

  let KlerosInstance = await new Kleros(provider)

  const centralCourt = KlerosInstance.centralCourt
  console.log("loading contract...")
  let data = await centralCourt.getDisputeById(contractAddress, disputeId)
  console.log(data)
}

if (process.argv.length <= 3) {
    console.log("Usage: createArbitrableTransactionDispute CONTRACT_ADDRESS DISPUTE_ID");
    process.exit(-1);
}

const contractAddress = process.argv[2];
const disputeId = process.argv[3];

getDisputeFromCentralCourt(contractAddress, disputeId)