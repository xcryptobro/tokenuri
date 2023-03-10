import { ethers } from 'ethers'
import CryptoJS from 'crypto-js'
import axios from 'axios'
import { address, startingId, maxSupply, abi, encoded } from '../../../utils/aa'

const infuraId = process.env.NEXT_PUBLIC_INFURA_ID
const ipfsURI = process.env.NEXT_PUBLIC_IPFS_URI
const seed = process.env.TRIBAL_TRIBUTE_SEED

const handler = async (req, res) => {
  const { id } = req.query
  const tokenId = parseInt(id)
  if (
    !tokenId ||
    tokenId < startingId ||
    tokenId > maxSupply ||
    address === ''
  ) {
    return res.status(400).json({ message: 'Invalid Token ID' })
  }

  try {
    const provider = new ethers.providers.InfuraProvider('mainnet', infuraId)
    const contract = new ethers.Contract(address, abi, provider)
    const totalSupply = await contract.totalSupply()
    if (tokenId > parseInt(totalSupply)) {
      return res.status(400).json({ message: 'Invalid Token ID' })
    }
    const bytes = await CryptoJS.AES.decrypt(encoded[0], seed)
    const cid = await bytes.toString(CryptoJS.enc.Utf8)
    const uri = `${ipfsURI}${cid}`

    const result = await axios.get(uri)
    const data = result.data
    return res.status(200).json(data)
  } catch (err) {
    return res.status(400).json(err)
  }
}

export default handler
