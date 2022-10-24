import { Contract, utils } from 'ethers';
import abi from './abi';

export const contractInterface = new utils.Interface(abi);
export const contractAddress = '0x655F2166b0709cd575202630952D71E2bB0d61Af';

export const contract = new Contract(contractAddress, contractInterface);
