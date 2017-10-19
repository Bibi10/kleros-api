import Kleros from '../src/Kleros'
import Web3 from 'web3'
import contract from 'truffle-contract'
import {LOCALHOST_PROVIDER} from '../constants'
import config from '../config'

let centralCourt

let deployCentralCourt = async () => {
  // use testRPC
  const provider = await new Web3.providers.HttpProvider(LOCALHOST_PROVIDER)

  let KlerosInstance = await new Kleros(provider)

  centralCourt = await KlerosInstance.centralCourt

  let centralCourtDeployedAddress = await centralCourt.deploy()

  console.log('addressCentralCourtDeployed: ', centralCourtDeployedAddress)
}

deployCentralCourt()
