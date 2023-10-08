import namehash from 'eth-ens-namehash';
import { ENS } from '@ensdomains/ensjs';
import { L1ToL2MessageGasEstimator } from '@arbitrum/sdk/dist/lib/message/L1ToL2MessageGasEstimator';
import { BigNumber } from '@ethersproject/bignumber';
import { providers, Wallet } from 'ethers';
import { ethers, utils } from 'ethers';
import { getBaseFee } from '@arbitrum/sdk/dist/lib/utils/lib';
import { Buffer } from 'buffer';
import { encodeContenthash } from '@ensdomains/ensjs/utils/contentHash';
const {
    L1TransactionReceipt,
    L1ToL2MessageStatus,
    L2TransactionReceipt,
    L2ToL1MessageStatus,
    EthBridger,
    getL2Network,
    addDefaultLocalNetwork,
  } = require('@arbitrum/sdk');
global.Buffer = global.Buffer || Buffer;

window.namehash = namehash;
window.L1ToL2MessageGasEstimator = L1ToL2MessageGasEstimator;
window.BigNumber = BigNumber;
window.providers = providers;
window.Wallet = Wallet;
window.ethers = ethers;
window.getBaseFee = getBaseFee;
window.ENS = ENS;
window.utils = utils;
window.encodeContenthash = encodeContenthash;
window.L1TransactionReceipt = L1TransactionReceipt;
window.L1ToL2MessageStatus = L1ToL2MessageStatus;
window.L2TransactionReceipt = L2TransactionReceipt;
window.L2ToL1MessageStatus = L2ToL1MessageStatus;
window.EthBridger = EthBridger;
window.getL2Network = getL2Network;
window.addDefaultLocalNetwork = addDefaultLocalNetwork;

