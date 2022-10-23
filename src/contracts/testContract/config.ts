import { Contract, utils } from 'ethers';
import abi from './abi';

export const contractInterface = new utils.Interface(abi);
export const contractAddress = '0x9ED2135850920BA65566D010B947b49E88651675';

export const contract = new Contract(contractAddress, contractInterface);
