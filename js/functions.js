let BaseRegistrarImplementationABI;
// Initialize a contract instance with the provided address and ABI.
let BaseRegistrarImplementation;

let web3;

let RuffleL1ABI = [{ "inputs": [{ "internalType": "address", "name": "_l2Target", "type": "address" }, { "internalType": "address", "name": "_inbox", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "ticketId", "type": "uint256" }], "name": "RetryableTicketCreated", "type": "event" }, { "inputs": [], "name": "count", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }, { "internalType": "address", "name": "_winner", "type": "address" }], "name": "getPrize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "getWinner", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "inbox", "outputs": [{ "internalType": "contract IInbox", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "l2Target", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "onERC721Received", "outputs": [{ "internalType": "bytes4", "name": "", "type": "bytes4" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "prova", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "prova2", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "domainName", "type": "string" }, { "internalType": "uint256", "name": "minimumAmount", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256", "name": "prize", "type": "uint256" }, { "internalType": "uint256", "name": "totalTickets", "type": "uint256" }, { "internalType": "address", "name": "domainOwner", "type": "address" }, { "internalType": "uint256", "name": "maxSubmissionCost", "type": "uint256" }, { "internalType": "uint256", "name": "maxGas", "type": "uint256" }, { "internalType": "uint256", "name": "gasPriceBid", "type": "uint256" }], "name": "setRaffleInL2", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_l2Target", "type": "address" }], "name": "updateL2Target", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "winners", "outputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "address", "name": "winner", "type": "address" }], "stateMutability": "view", "type": "function" }];
let L2ABI = [{ "inputs": [{ "internalType": "uint64", "name": "subscriptionId", "type": "uint64" }, { "internalType": "address", "name": "_l1Target", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "address", "name": "have", "type": "address" }, { "internalType": "address", "name": "want", "type": "address" }], "name": "OnlyCoordinatorCanFulfill", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "msgValue", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "numberOfTickets", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "ticketsBought", "type": "uint256" }], "name": "Debug", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bool", "name": "value", "type": "bool" }], "name": "Fulfilled", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "OwnershipTransferRequested", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "raffleId", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "winner", "type": "address" }], "name": "RaffleCompleted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "raffleId", "type": "uint256" }, { "indexed": false, "internalType": "string", "name": "domainName", "type": "string" }, { "indexed": false, "internalType": "uint256", "name": "minimumAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "prize", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalTickets", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "ticketPrice", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "domainOwner", "type": "address" }], "name": "RaffleCreated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "randomNumber", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "randomIndex", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "numberOfParticipants", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "winner", "type": "address" }], "name": "RandomWinnerSelected", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "requestId", "type": "uint256" }, { "indexed": false, "internalType": "uint256[]", "name": "randomWords", "type": "uint256[]" }], "name": "RequestFulfilled", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "requestId", "type": "uint256" }, { "indexed": false, "internalType": "uint32", "name": "numWords", "type": "uint32" }], "name": "RequestSent", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "raffleId", "type": "uint256" }, { "indexed": false, "internalType": "bool", "name": "fulfilled", "type": "bool" }, { "indexed": false, "internalType": "uint256", "name": "requestId", "type": "uint256" }], "name": "RequestStatusChecked", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "raffleId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "requestId", "type": "uint256" }], "name": "RequestedRandomWords", "type": "event" }, { "inputs": [], "name": "acceptOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "raffleId", "type": "uint256" }], "name": "claimPrizeInL1", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "raffleId", "type": "uint256" }], "name": "completeRaffle", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "domainName", "type": "string" }, { "internalType": "uint256", "name": "minimumAmount", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256", "name": "prize", "type": "uint256" }, { "internalType": "uint256", "name": "totalTickets", "type": "uint256" }, { "internalType": "address", "name": "domainOwner", "type": "address" }], "name": "createRaffle", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getAllRaffles", "outputs": [{ "components": [{ "internalType": "string", "name": "domainName", "type": "string" }, { "internalType": "uint256", "name": "minimumAmount", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256", "name": "prize", "type": "uint256" }, { "internalType": "uint256", "name": "totalTickets", "type": "uint256" }, { "internalType": "uint256", "name": "ticketPrice", "type": "uint256" }, { "internalType": "uint256", "name": "requestId", "type": "uint256" }, { "internalType": "bool", "name": "completed", "type": "bool" }, { "internalType": "bool", "name": "isParticipant", "type": "bool" }, { "internalType": "uint256", "name": "numberOfTickets", "type": "uint256" }, { "internalType": "address", "name": "domainOwner", "type": "address" }, { "internalType": "address", "name": "winner", "type": "address" }, { "internalType": "bool", "name": "taken", "type": "bool" }], "internalType": "struct RaffleL2.RaffleData[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "raffleId", "type": "uint256" }], "name": "getRaffleData", "outputs": [{ "internalType": "string", "name": "", "type": "string" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address[]", "name": "", "type": "address[]" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }, { "internalType": "bool", "name": "", "type": "bool" }, { "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "l1Target", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lastRequestId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "raffleId", "type": "uint256" }], "name": "participate", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "prova", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "raffleCounter", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "raffles", "outputs": [{ "internalType": "string", "name": "domainName", "type": "string" }, { "internalType": "uint256", "name": "minimumAmount", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint256", "name": "prize", "type": "uint256" }, { "internalType": "uint256", "name": "totalTickets", "type": "uint256" }, { "internalType": "uint256", "name": "ticketPrice", "type": "uint256" }, { "internalType": "uint256", "name": "requestId", "type": "uint256" }, { "internalType": "address", "name": "winner", "type": "address" }, { "internalType": "bool", "name": "completed", "type": "bool" }, { "internalType": "address", "name": "domainOwner", "type": "address" }, { "internalType": "bool", "name": "taken", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "requestId", "type": "uint256" }, { "internalType": "uint256[]", "name": "randomWords", "type": "uint256[]" }], "name": "rawFulfillRandomWords", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "raffleId", "type": "uint256" }], "name": "refundToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "requestIds", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "s_requests", "outputs": [{ "internalType": "bool", "name": "fulfilled", "type": "bool" }, { "internalType": "bool", "name": "exists", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "raffleId", "type": "uint256" }], "name": "setWinner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "name": "ticketsBought", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "treasury", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_l1Target", "type": "address" }], "name": "updateL1Target", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
let RuffleL1Address = 'addressL1EthContract';
let RuffleL2Address = 'addressL2ArbContract';
let RuffleL1Contract;
let accounts;
let ownerDomain;
let hash;
let RafflesObj = [];
let providerEth;
let l1Provider;
let l2Provider;
let loader = `<div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>`;



async function init() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            // Request the user to connect to Metamask
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            l1Provider = new window._ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/infurakey');
            l2Provider = new window._ethers.providers.JsonRpcProvider('https://goerli-rollup.arbitrum.io/rpc');
            providerEth = new window._ethers.providers.Web3Provider(window.ethereum);
            BaseRegistrarImplementationABI = [{ "inputs": [{ "internalType": "contract ENS", "name": "_ens", "type": "address" }, { "internalType": "bytes32", "name": "_baseNode", "type": "bytes32" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "controller", "type": "address" }], "name": "ControllerAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "controller", "type": "address" }], "name": "ControllerRemoved", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "expires", "type": "uint256" }], "name": "NameMigrated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "expires", "type": "uint256" }], "name": "NameRegistered", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "expires", "type": "uint256" }], "name": "NameRenewed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [], "name": "GRACE_PERIOD", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "controller", "type": "address" }], "name": "addController", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "available", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "baseNode", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "controllers", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "ens", "outputs": [{ "internalType": "contract ENS", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "isOwner", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "nameExpires", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "owner", "type": "address" }], "name": "reclaim", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "duration", "type": "uint256" }], "name": "register", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "duration", "type": "uint256" }], "name": "registerOnly", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "controller", "type": "address" }], "name": "removeController", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "duration", "type": "uint256" }], "name": "renew", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "resolver", "type": "address" }], "name": "setResolver", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "bytes4", "name": "interfaceID", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }];
            // Initialize a contract instance with the provided address and ABI.
            BaseRegistrarImplementation = new web3.eth.Contract(BaseRegistrarImplementationABI, '0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85');
            const l2Network = await window.getL2Network(l2Provider)
            const ethBridger = new window.EthBridger(l2Network)
            const inboxAddress = ethBridger.l2Network.ethBridge.inbox
            RuffleL1Contract = new web3.eth.Contract(RuffleL1ABI, RuffleL1Address);
            accounts = await web3.eth.getAccounts();
            const address = accounts[0];
            let addressTroncato = address.slice(0, 7);
            let walletDiv = $('#wallet');
            walletDiv.html(addressTroncato + '...')
            walletDiv.prop('disabled', true);

            /*      let html = `<div class="dropdown-content2">
                                  <a href="#" onClick="disconnectMetamask()"> disconnect metamask</a>
                              </div>`;
                  walletDiv.append(html)*/
            return true;
        } catch (error) {
            console.error("User denied account access", error);
        }
    } else {
        console.log('Ethereum provider is not available');
    }
}

async function getData() {
    let address = accounts[0].toLowerCase();
    let select = $('<select id="domainNameInput"></select>');
    $.ajax({
        url: 'https://api.thegraph.com/subgraphs/name/ensdomains/ensgoerli',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            operationName: "getNames",
            query: `
                    query getNames($id: ID!, $expiryDate: Int) {
                        account(id: $id) {
                            registrations(first: 1000, where: {expiryDate_gt: $expiryDate}) {
                                registrationDate
                                expiryDate
                                domain {
                                    id
                                    labelName
                                    labelhash
                                    name
                                    isMigrated
                                    parent {
                                        name
                                        id
                                    }
                                    createdAt
                                }
                            }
                            domains(first: 1000) {
                                id
                                labelName
                                labelhash
                                name
                                isMigrated
                                parent {
                                    name
                                    id
                                }
                                createdAt
                                registration {
                                    registrationDate
                                    expiryDate
                                }
                            }
                            wrappedDomains(first: 1000) {
                                expiryDate
                                fuses
                                domain {
                                    id
                                    labelName
                                    labelhash
                                    name
                                    isMigrated
                                    parent {
                                        name
                                        id
                                    }
                                    createdAt
                                    registration {
                                        registrationDate
                                        expiryDate
                                    }
                                }
                            }
                        }
                    }
                `,
            variables: {
                id: address, // Replace with your actual id
                expiryDate: 1680685909
            }
        }),
        success: function (data) {
            console.log(data);

            let dropdown = $('.dropdown');
            let dropdownContent = $('<div class="dropdown-content"></div>');

            $.each(data.data.account.domains, function (i, domain) {
                // Skip if labelName is null
                if (domain.labelName === null) return;

                // Crea un nuovo elemento "a" per ogni labelName
                let option = $('<a href="#"></a>').text(domain.labelName);

                // Aggiungi l'option al dropdownContent
                dropdownContent.append(option);
            });

            // Aggiungi il button e dropdownContent al dropdown

            dropdown.append(dropdownContent);

            // Aggiungi il dropdown al DOM
            $('.domainName').append(dropdown);

            // Ora che gli elementi <a> sono nel DOM, assegna loro l'ascoltatore di eventi
            $('.dropbtn').click(function (e) {
                e.stopPropagation();

                var dropdownContent = $('.dropdown-content');

                if (dropdownContent.hasClass('open')) {
                    // Se il dropdown è già aperto, chiudi
                    gsap.to('.arrowDrop', { rotation: '-=180', duration: 0.3 });
                    gsap.to(dropdownContent, {
                        height: 0, opacity: 0, duration: 0.2, onComplete: function () {
                            dropdownContent.removeClass('open');
                        }
                    });
                } else {
                    // Se il dropdown è chiuso, apri
                    gsap.to('.arrowDrop', { rotation: '+=180', duration: 0.3 });
                    dropdownContent.addClass('open');
                    gsap.set(dropdownContent, { height: 'auto', opacity: 1 });
                    gsap.from(dropdownContent, { height: 0, duration: 0.2 });
                }
            });

            // Chiudi il dropdown quando si fa clic altrove nella pagina
            $(document).click(function () {
                $('.dropdown-content').removeClass('open');
            });

            $('.dropdown-content a').click(function (e) {
                e.preventDefault();

                // Ottieni il testo dell'opzione selezionata
                var selectedOption = $(this).text();

                // Imposta il testo del pulsante come l'opzione selezionata
                $('.dropText').text(selectedOption);

                // Chiudi il dropdown
                $('.dropdown-content').removeClass('open');;
                gsap.to('.arrowDrop', { rotation: '-=180', duration: 0.3 });
                gsap.to(dropdownContent, {
                    height: 0, opacity: 0, duration: 0.2, onComplete: function () {
                        dropdownContent.removeClass('open');
                    }
                });
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Error:', textStatus, errorThrown);
        }
    });
}

async function switchNetwork() {
    let ethereum = window.ethereum;

    // Se MetaMask non è installato, avvisa l'utente
    if (!ethereum || !ethereum.isMetaMask) {
        alert('Please install MetaMask.');
        return;
    }

    // Imposta il codice della rete Goerli
    let NETWORK_ID;
    let debug = true;
    if (debug == true) {
        //goerli
        NETWORK_ID = '0x5';
    } else {
        //ethereum
        NETWORK_ID = '0x1';
    }

    try {
        // Richiedi a MetaMask di cambiare la rete corrente
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: NETWORK_ID }],
        });
    } catch (switchError) {
        // Se l'utente rifiuta il cambio di rete
        if (switchError.code === 4001) {
            // Gestisci l'errore, per esempio mostrando un messaggio all'utente
            if (NETWORK_ID == '0x5') {
                console.log('Please connect to Goerli');
            } else {
                console.log('Please connect to Ethereum');
            }

        } else {
            console.error(switchError);
        }
    }
}

async function isApproved() {
    let from = accounts[0];
    // Call the contract function.
    result = await BaseRegistrarImplementation.methods.isApprovedForAll(accounts[0], RuffleL1Address).call({ from: from });
    return result;
}

async function setApproval() {
    let from = accounts[0];
    // Call the contract function.
    await BaseRegistrarImplementation.methods.setApprovalForAll(RuffleL1Address, true).send({ from: from });
}

async function getLabelHash(LabelName) {
    const labelHash = _ethers.utils.keccak256(_ethers.utils.toUtf8Bytes(LabelName));
    const tokenId = _ethers.BigNumber.from(labelHash).toString();
    return tokenId;
}

async function getNodeHash(domainName) {

    hash = namehash.hash(domainName);
    return hash;
}

async function transferDomainOwnership() {
    setApproval().then(async function () {
        let domainName = document.getElementById('domainNameInput').value;
        let node = await executeEscrow(domainName);
        await RuffleL1Contract.methods.acceptDomainProva(domainName).send({ from: accounts[0] });
    })

}

async function getGasFeeRaffle(domainName, minimumAmountInWei, deadline, tokenId, totalTickets, domainOwner) {

    const l1ToL2MessageGasEstimate = new L1ToL2MessageGasEstimator(l2Provider)

    const iface = new window._ethers.utils.Interface(L2ABI)
    const calldata = iface.encodeFunctionData('createRaffle', [domainName, minimumAmountInWei, deadline, tokenId, totalTickets, domainOwner])

    const L1ToL2MessageGasParams = await l1ToL2MessageGasEstimate.estimateAll(
        {
            from: RuffleL1Address,
            to: RuffleL2Address,
            l2CallValue: 0,
            excessFeeRefundAddress: accounts[0],
            callValueRefundAddress: accounts[0],
            data: calldata,
        },
        await getBaseFee(l1Provider),
        l1Provider
    )
    const gasPriceBid = await l2Provider.getGasPrice();
    return {
        maxSubmissionCost: L1ToL2MessageGasParams.maxSubmissionCost,
        gasLimit: L1ToL2MessageGasParams.gasLimit,
        gasPriceBid: gasPriceBid,
        deposit: L1ToL2MessageGasParams.deposit
    }
}

async function setRaffleInL2() {
    await switchNetwork();
    let approved = await isApproved();
    if (!approved) {
        await setApproval();
    }
    let LabelName = document.querySelector('.dropText').textContent;
    let domainName = LabelName + '.eth';
    let domainOwner = accounts[0];
    let minimumAmount = document.getElementById('minimumAmount').value;
    let minimumAmountInWei = web3.utils.toWei(minimumAmount, 'ether');
    let deadline = document.getElementById('deadline').value;
    var dateObject = new Date(deadline);
    deadline = dateObject.getTime() / 1000;

    let currentTime = Math.floor(Date.now() / 1000);
    if (deadline - currentTime < 1800) {
        alert("Deadline must be at least 30 minutes in the future");
        return;
    }
    let totalTickets = document.getElementById('totalTickets').value;
    let tokenId = await getLabelHash(LabelName);
    let getGasFee = await getGasFeeRaffle(domainName, minimumAmountInWei, deadline, tokenId, totalTickets, domainOwner);
    let setRaffleTx = await RuffleL1Contract.methods.setRaffleInL2(
        domainName,
        minimumAmountInWei,
        deadline,
        tokenId,
        totalTickets,
        domainOwner,
        getGasFee.maxSubmissionCost,
        getGasFee.gasLimit,
        getGasFee.gasPriceBid,
        //  {
        //  value: getGasFee.deposit,
        //  }
    )

    setRaffleTx.send({ from: accounts[0], value: getGasFee.deposit })
        .on('transactionHash', function (hash) {
            console.log(`Ruffle txn confirmed on L1! 🙌 ${hash}`);
        })
        .on('receipt', async function (receipt) {
            if (receipt.status === true) {
                console.log("Transaction was successful");
                $('#beginRuffleBtn .btn-text').html('');
                checkSvg = $('#checkSvg');
                checkSvg.removeClass('d-none');
                gsap.fromTo('.fillbtn', { width: '0%', duration: 2 }, {
                    width: '300%', onComplete: function () {
                        setTimeout(function () {
                            checkSvg.addClass('d-none');
                            gsap.fromTo('.fillbtn', { width: '300%', duration: 2 }, {
                                width: '0%', onComplete: function () {

                                    $('#beginRuffleBtn .btn-text').html('Begin Raffle');
                                }
                            });
                        }, 1000)

                    }
                })

            } else {
                console.log("Transaction failed");
                errorSvg = $('#errorSvg');
                errorSvg.removeClass('d-none');
                gsap.fromTo('.fillbtn-err', { width: '0%', duration: 2 }, {
                    width: '300%', onComplete: function () {
                        setTimeout(function () {
                            errorSvg.addClass('d-none');
                            gsap.fromTo('.fillbtn-err', { width: '300%', duration: 2 }, {
                                width: '0%', onComplete: function () {

                                    $('#beginRuffleBtn .btn-text').html('Begin Raffle');
                                }
                            });
                        }, 1000)

                    }
                })
            }
            console.log(`Transaction has been confirmed on block ${receipt.blockNumber}`);

            let setRaffleRec = await web3.eth.getTransactionReceipt(receipt.transactionHash);
            const l1TxReceipt = new L1TransactionReceipt(setRaffleRec);


            /**
             * In principle, a single L1 txn can trigger any number of L1-to-L2 messages (each with its own sequencer number).
             * In this case, we know our txn triggered only one
             * Here, We check if our L1 to L2 message is redeemed on L2
             */
            const messages = await l1TxReceipt.getL1ToL2Messages(accounts[0]);
            const message = messages[0];
            console.log('Waiting for L2 side. It may take 10-15 minutes ⏰⏰');
            const messageResult = await message.waitForStatus();
            const status = messageResult.status;
            if (status === L1ToL2MessageStatus.REDEEMED) {
                console.log(
                    `L2 retryable txn executed 🥳 ${messageResult.l2TxReceipt.transactionHash}`
                );
            } else {
                console.log(
                    `L2 retryable txn failed with status ${L1ToL2MessageStatus[status]}`
                );
            }
        })
        .on('error', function (error) {
            $('#beginRuffleBtn .btn-text').html('');
            console.log(error);
            errorSvg = $('#errorSvg');
            errorSvg.removeClass('d-none');
            gsap.fromTo('.fillbtn-err', { width: '0%', duration: 2 }, {
                width: '300%', onComplete: function () {
                    setTimeout(function () {
                        errorSvg.addClass('d-none');
                        gsap.fromTo('.fillbtn-err', { width: '300%', duration: 2 }, {
                            width: '0%', onComplete: function () {

                                $('#beginRuffleBtn .btn-text').html('Begin Raffle');
                            }
                        });
                    }, 1000)

                }
            })
        }); // Handle any errors
}


async function getAllRaffle() {


    await connectToArbitrum();
    RuffleL2Contract = new web3.eth.Contract(L2ABI, RuffleL2Address);
    let accounts = await web3.eth.getAccounts();
    const result = await RuffleL2Contract.methods.getAllRaffles().call({ from: accounts[0] });
    let Raffle = [];
    // Log or display the returned values
    console.log(result);
    let data = {};
    let total = {};
    let ticketsBoughtFromUser = {}
    if (result.length < 1) {
        $('.contenitore').addClass('d-none');
        $('#container').append('<h2 class="center-absolute position-absolute">There is no Raffles</h2>');
        return false;
    }
    for (let i = 0; i < result.length; i++) {
        try {
            let raffleData = await RuffleL2Contract.methods.getRaffleData(i).call({ from: accounts[0] });
            ticketsBoughtFromUser[i] = await RuffleL2Contract.methods.ticketsBought(i, accounts[0]).call({ from: accounts[0] });
            if (Array.isArray(raffleData[6])) {
                let counts = raffleData[6].reduce((acc, val) => {
                    acc[val] = (acc[val] || 0) + 1;
                    return acc;
                }, {});
                data[i] = counts;
                total[i] = Object.values(counts).reduce((a, b) => a + b, 0);
            }
        } catch (error) {
            console.error(`Failed to get data for raffle id ${i}:`, error);

        }
    }

    let count = 0;
    let rafflesOpened = JSON.parse(localStorage.getItem('rafflesObj') || '[]');
    let raffleId = $('.raffle.open .checkWin').attr('rel');
    $('.contenitore').hide();
    result.forEach((element) => {

        let amountInEther = web3.utils.fromWei(element.minimumAmount, 'ether');
        let price = web3.utils.fromWei(element.ticketPrice, 'ether');
        let date = new Date(element.deadline * 1000);
        let formattedDate = date.getFullYear() + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + ('0' + date.getDate()).slice(-2);
        let completed = element.completed;
        let winner = element.winner;
        let isWinner = element.winner == '0x0000000000000000000000000000000000000000';
        let isOpen = rafflesOpened[count] != undefined && rafflesOpened[count].open == true;
        let isParticipant = element.isParticipant == true;
        let raffleHasEnded = element.deadline * 1000 < Date.now();
        let html = `<div class="contenitore${count} raffle py-4` +(isOpen && isParticipant || !isParticipant && raffleHasEnded && element.completed == true && accounts[0] != element.domainOwner
             || element.domainOwner == element.winner && element.winner == accounts[0] && element.taken == true? ` d-none closed` : ``) +` col-sm-12  col-lg-3 ">
                        <div class="card h-100 container${count}">
                            <div class="card-image d-flex align-items-center flex-column relative" style="background-image: linear-gradient(130deg,#513eff 0%,#52e5ff 100%);">
                                <img src="img/ens-logo-white.png" class="card-img-top">`
            +
            (ticketsBoughtFromUser[count] > 0
                ? `
                                    <span class="badge-position position-absolute badge rounded-pill bg-light">
                                        <div class="d-flex py-1 align-items-center">
                                            <div class="ticket counter"  aria-label="${ticketsBoughtFromUser[count]}" style="color:rgb(53, 56, 64)">${ticketsBoughtFromUser[count]}</div>
                                            <img class="imgTickets " src="img/tickets.png">
                                        </div>
                                        <span class="visually-hidden">unread messages</span>
                                    </span>
                                `
                : `  <span class="badge-position position-absolute badge rounded-pill bg-light d-none">
                                <div class="d-flex py-1 align-items-center">
                                    <div class="ticket counter"  aria-label="${ticketsBoughtFromUser[count]}"  style="color:rgb(53, 56, 64)">${ticketsBoughtFromUser[count]}</div>
                                    <img class="imgTickets " src="img/tickets.png">
                                </div>
                                <span class="visually-hidden">unread messages</span>
                            </span>`)
            +
            `<h5 class="card-title"> ${element.domainName}</h5>
                            </div>
                            <div class="card-body">`+
            (element.deadline * 1000 > Date.now() ? `
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <label>Ticket Price</label>
                                        <strong>
                                            <div style="color:rgb(53, 56, 64)"> ${price.slice(0, 8)} 
                                                <svg style="vertical-align:text-top" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/></svg>
                                            </div>
                                        </strong>
                                    </div>
                                    <div>
                                        <label>Raffle end</label>
                                        <strong>
                                            <div style="color:rgb(53, 56, 64)">${formattedDate}</div>
                                        </strong>	
                                    </div>
                                </div>
                            </div>`: (element.winner == '0x0000000000000000000000000000000000000000' ? `
                            <div class="d-flex justify-content-center align-items-center h-100">
                            <div>
                                <strong>
                                    <div ">Awaiting the winner's draw</div>
                                </strong>	
                            </div>
                        </div>        
                            ` : (rafflesOpened[count]!= undefined && rafflesOpened[count].open== true?`
                            <div class="d-flex justify-content-center align-items-center h-100">
                            <div class="checkWin" rel="${count}">
                                <strong>
                                    <div">`+
                                    (element.winner == accounts[0] ? `You won`:`You lost`)+ `</div>
                                </strong>	
                            </div>
                        </div>
                    </div>
                            ` :
                            (element.isParticipant == true ? `
                            <div class="d-flex justify-content-center align-items-center h-100">
                                <div class="checkWin" rel="${count}">
                                    <strong>
                                        <div">Check if you've won</div>
                                    </strong>	
                                </div>
                            </div>
                        </div>
                            `:  (element.domainOwner == element.winner && element.winner == accounts[0] && element.taken == false? `
                            <div class="d-flex justify-content-center align-items-center h-100">
                            <div class="checkWin" rel="${count}">
                            <button class="button button-winner" onClick="claimPrize(event,${count})">Claim prize</button>
                            </div>
                        </div>
                    </div>
                             `:
                `<div class="d-flex justify-content-center align-items-center h-100">
                                <div  rel="${count}">
                                <strong>
                                    <div ">Raffle closed</div>
                                </strong>	
                            </div>`) + `
                                
                            </div>
                        </div>`) + ``)+ ``)+ ``)
            + `</div>
                        <div class="container2${count} description d-none">
                        </div>
                    </div>
                `;
        let adminHtmlCard = `<div class="contenitore${count}  raffle py-4 col-lg-3 col-sm-12">
                <div class="card h-100 container${count} ">
                    <div class="card-image d-flex align-items-center flex-column relative" style="background-image: linear-gradient(130deg,#513eff 0%,#52e5ff 100%);">
                        <img src="img/ens-logo-white.png" class="card-img-top">`
            +
            (ticketsBoughtFromUser[count] > 0
                ? `
                            <span class="badge-position position-absolute badge rounded-pill bg-light">
                                <div class="d-flex py-1 align-items-center">
                                    <div class="ticket counter"  aria-label="${ticketsBoughtFromUser[count]}" style="color:rgb(53, 56, 64)">${ticketsBoughtFromUser[count]}</div>
                                    <img class="imgTickets " src="img/tickets.png">
                                </div>
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        `
                : `  <span class="badge-position position-absolute badge rounded-pill bg-light d-none">
                        <div class="d-flex py-1 align-items-center">
                            <div class="ticket counter"  aria-label="${ticketsBoughtFromUser[count]}"  style="color:rgb(53, 56, 64)">${ticketsBoughtFromUser[count]}</div>
                            <img class="imgTickets " src="img/tickets.png">
                        </div>
                        <span class="visually-hidden">unread messages</span>
                    </span>`)
            +
            `<h5 class="card-title"> ${element.domainName}</h5>
                    </div>
                        <div class="card-body">
                        <div class="container2${count} description2 ">
                        </div>
                        </div>
                    </div>
            </div>
        `;

        let percentage;
        if (total[count] == 0) {
            percentage = '0';
        } else {
            percentage = (total[count] / parseInt(element.totalTickets)) * 100;
        }

        let SogliaRaggiunta = `<div class="d-flex pt-4">
                                    <div>Sold:  ${total[count]} / ${element.totalTickets}</div>
                                <img class="imgTickets" src="img/tickets.png">
                                </div>
                                <div >
                                    <div class="progress">
                                        <div id="progress-bar${count}" class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="0" aria-valuemin="100" aria-valuemax="100">100%</div>
                                    </div>
                                </div>`;
        let SogliaNonRaggiunta = `<div class="d-flex pt-4">
                                    <div>Sold:  ${total[count]} / ${element.totalTickets}</div>
                                <img class="imgTickets" src="img/tickets.png">
                                 </div>
                                 <div >
                                    <div class="progress">
                                    <div id="progress-bar${count}" class="progress-bar" role="progressbar"  aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                `;
        let html2 = `
                    <div class="pt-4 d-flex justify-content-between">
                        <div class="col-6 d-flex align-items-center">
                        <button class="button2" onClick="event.stopPropagation(); decreaseValue(${count})">-</button>
                        <input onClick="event.stopPropagation();" id="tickets${count}" value="1" min="1" name="Tickets" class="ethereum-style" style="text-align: center;">
                        <button class="button2" onClick="event.stopPropagation(); increaseValue(${count})">+</button>
                        
                        </div>
                        <button class="button col-5 offset-1" id="participate${count}" onClick="event.stopPropagation(); participateRaffle(${count},${price})">
                            <div class="button-color-complete">
                                <svg class="check d-none" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                            </div>
                            <div class="button-color-error">
                            <svg class="check error d-none" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                            </div>
                            <span class="button-text">Buy ticket</span>
                        </button>
                    </div>
                `;
        let htmlComplete = `
                <div class="d-flex justify-content-center">
                    <button  class="completeRaffle${count} button" onClick="completeRaffle(${count})">Close The raffle</button>
                </div>
                `;

        let htmlGetWinner = `
                <div class="d-flex justify-content-center">
                    <button class="getWinner${count} button" onClick="getWinner(${count})">Find out who won</button>
                </div>
                `;

        let refund = `
                <div class="refund${count}" style="display:flex;">
                    <button id="refund${count}" onClick="getRefund(${count})">No winner, reclaim your tokens</button>
                </div>
                `;
        let noWinner = `
                <div>
                    No winner
                </div>`;


        if (element.isParticipant == true) {
            $(html).appendTo('#container-partecipant');
        }
        $(html).appendTo('#container');

        if (element.deadline * 1000 > Date.now()) {
            if (parseInt(element.totalTickets) <= total[count]) {
                $(SogliaRaggiunta).appendTo('.container2' + count);
            } else {
                $(SogliaNonRaggiunta).appendTo('.container2' + count);
            }

            if (accounts[0] != element.domainOwner) {
                if (element.isParticipant == false) {
                    $(html2).appendTo('.container2' + count);

                } else {
                    $(html2).appendTo('.container2' + count);

                }
            }

        }



        if (element.isParticipant == true) {
            $(html).appendTo('#container-partecipant');
        }
        if (!element.completed) {
            $(adminHtmlCard).appendTo('#container-admin');
        }
        if (element.completed && winner == '0x0000000000000000000000000000000000000000') {
            $(adminHtmlCard).appendTo('#container-admin');
        }

        if (element.completed) {

            if (winner == element.domainOwner) {
                if (element.isParticipant == true) {
                    $(refund).appendTo('.container2' + count);
                } else {
                    $(noWinner).appendTo('.container2' + count);
                }
            }
            if (winner == '0x0000000000000000000000000000000000000000') {
                $(htmlGetWinner).appendTo('#container-admin .container2' + count);

            }
        } else {
            $(htmlComplete).appendTo('#container-admin .container2' + count);

        }

        let card = $('.container' + count);
        const hoverAnimation = gsap.to(card, {
            scale: 1.02,
            duration: 0.4,
            paused: true
        });

        // Aggiunta dell'evento mouseenter all'elemento
        card.on('mouseenter', function () {
            hoverAnimation.play();
        });

        // Aggiunta dell'evento mouseleave all'elemento
        card.on('mouseleave', function () {
            hoverAnimation.reverse();
        });


        let card2 = document.querySelector('.contenitore' + count);
        let card2Clone;
        let nextSibling;
        let description;
        card2.addEventListener('click', () => {
            let rect = card2.getBoundingClientRect();
            let originalParent = card2.parentElement;
            description = $(card2).find('.description');
            nextSibling = card2.nextElementSibling;
            if (card2.style.position !== 'fixed') {



                card2Clone = $(card2).clone();
                $(card2Clone).css("visibility", "hidden");


                // Get the center position
                let x = window.innerWidth / 2 - rect.left - rect.width / 2;
                let y = window.innerHeight / 2 - rect.top - rect.height / 1.4;

                // Animate the card to the center of the screen

                $(card2).addClass('open');
                $(card2).attr('style', 'width:' + $(card2).outerWidth() + 'px !important');
                gsap.to('#title', { opacity: 0 });
                gsap.fromTo('.raffle', {
                    opacity: 1,
                    duration: 2
                },
                    {
                        opacity: 0,
                        onComplete: function () {
                            $('.raffle').addClass('d-none');
                            $('.raffle.open').removeClass('d-none');
                            $(card2).after(card2Clone);
                            gsap.fromTo(card2, {
                                duration: 0.5,
                                left: rect.left,
                                top: rect.top,
                                position: 'fixed',
                                zIndex: 1000,
                                opacity: 1,
                                scale: 1
                            }, {
                                duration: 0.5,
                                position: 'fixed',
                                zIndex: 1000,
                                x: x,
                                y: y,
                                scale: 1.4,
                                opacity: 1,
                                onComplete: function () {
                                    if (element.deadline * 1000 > Date.now()) {
                                        $(description).removeClass('d-none');
                                        gsap.fromTo(description, {
                                            duration: 0.2,
                                            opacity: 0
                                        }, {
                                            duration: 0.2,

                                            opacity: 1
                                        })
                                        // You can use 'description' directly here
                                        let el = $(description).find('.progress-bar');
                                        gsap.fromTo(el, { width: '0%', duration: 0.2 }, {
                                            width: percentage + '%', duration: 0.2
                                        });
                                    } else {
                                        let rafflesOpen = JSON.parse(localStorage.getItem('rafflesObj') || '[]');
                                        let raffleId = $('.raffle.open .checkWin').attr('rel');

                                        if (element.winner !== '0x0000000000000000000000000000000000000000') {
                                            if (rafflesOpen[raffleId] != undefined && rafflesOpen[raffleId].open == true) {
                                                if (element.taken == true && element.winner == accounts[0]) {

                                                    $('.raffle.open .checkWin').html('prize already claimed');
                                                    gsap.fromTo('.checkWin div', { opacity: 0 }, { opacity: 1 })
                                                }
                                            }
                                            else {
                                                if (element.isParticipant == true) {

                                                    checkWin(raffleId, element.winner)
                                                } else {
                                                    $('.raffle.open .checkWin').html('Raffle Closed');
                                                    gsap.fromTo('.checkWin div', { opacity: 0 }, { opacity: 1 })
                                                }
                                            }


                                        }
                                        ;
                                    }

                                }
                            })
                        }
                    });


            } else {

                gsap.fromTo(description, {
                    duration: 0.2,
                    opacity: 1
                }, {
                    duration: 0.2,

                    opacity: 0,
                    onComplete: function () {
                        $(description).addClass('d-none');
                        $(card2).removeClass('open');
                        // Return the card to its original position
                        gsap.to(card2, {
                            duration: 0.5,
                            x: 0,
                            y: 0,
                            scale: 1,
                            opacity: 1,
                            onComplete: function () {
                                // Insert the card back into its original container
                                if (nextSibling) {
                                    originalParent.insertBefore(card2, nextSibling);
                                } else {
                                    originalParent.appendChild(card2);
                                }
                                card2.style.position = "";
                                card2.style.zIndex = "";

                                card2Clone.remove();
                                gsap.to('#title', { opacity: 1 });
                                $('.raffle').removeClass('d-none');
                                $('.raffle.closed').addClass('d-none');

                                gsap.fromTo('.raffle', {
                                    duration: 2
                                },
                                    {
                                        opacity: 1

                                    });

                            }
                        });

                    }
                })

            }
        });

        count++
    });


}
function checkWin(raffleId, winner) {
    RafflesObj.push({ raffleId: raffleId, open: true });
    localStorage.setItem('rafflesObj', JSON.stringify(RafflesObj));

    let card = $('.raffle.open');
    if (winner == accounts[0]) {

        let buttonClaimPrizeHtml = `<button class="button button-winner" onClick="claimPrize(event,${raffleId})">Claim prize</button>`;
        let winnerTextHtml = `<strong>
                            <div class="won" style="color:rgb(53, 56, 64);color:green;">YOU WON</div>
                        </strong>`;


        gsap.fromTo(card,
            { rotationY: 0 },
            {
                rotationY: 4320, duration: 4, ease: "power1.inOut", onComplete: function () {
                    //   if (winner == accounts[0]) {
                    $('.raffle.open .checkWin').html(winnerTextHtml);
                    gsap.to('.won',
                        { opacity: 1, duration: 2 })
                    // $('body').append(winnerTextHtml);
                    $('body').append('<div class="lottie position-absolute"></div>')
                    let animation = lottie.loadAnimation({
                        container: $('.lottie').get(0),
                        renderer: 'svg',
                        loop: false,
                        autoplay: true,
                        path: '../json/66421-confetti.json'
                    });
                    setTimeout(function () {
                        gsap.fromTo('.won',
                            { opacity: 1, duration: 2 },
                            {
                                opacity: 0, onComplete: function () {
                                    $('body .lottie').remove();
                                    $('.raffle.open .checkWin').html(buttonClaimPrizeHtml);
                                    gsap.fromTo('.button-winner',
                                        { scale: 0 },
                                        { scale: 1 })
                                }
                            })

                    }, 3000)


                    gsap.to('.winner-text', { opacity: 1, scale: 4, duration: 1 })

                    //    }

                }
            }
        );
    } else {
        let loserTextHtml = `<strong>
                                    <div class="loose" style="color:rgb(53, 56, 64);color:red">You Lost</div>
                                </strong>`;
        gsap.fromTo(card,
            { rotationY: 0 },
            {
                rotationY: 4320, duration: 4, ease: "power1.inOut", onComplete: function () {
                    //   if (winner == accounts[0]) {
                    $('.raffle.open .checkWin').html(loserTextHtml);
                    gsap.to('.loose',
                        { opacity: 1, duration: 2 })
                    // $('body').append(winnerTextHtml);
                    $('body').append('<div class="lottie position-absolute"></div>')
                    let animation = lottie.loadAnimation({
                        container: $('.lottie').get(0),
                        renderer: 'svg',
                        loop: false,
                        autoplay: true,
                        path: '../json/94617-confetti.json'
                    });
                    setTimeout(function () {
                        $('body .lottie').remove();

                    }, 3000)

                }
            }
        );

    }
}
function increaseValue(count) {

    const input = document.getElementById('tickets' + count);
    input.value = parseInt(input.value, 10) + 1;
}

function decreaseValue(count) {
    const input = document.getElementById('tickets' + count);
    if (parseInt(input.value, 10) > 1) {
        input.value = parseInt(input.value, 10) - 1;
    }
}
async function connectToArbitrum() {
    // Make sure MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        // Initialize web3
        let web3 = new Web3(ethereum);


        try {
            // Richiedi a MetaMask di cambiare la rete corrente
            await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x66eed' }],
            });
        } catch (switchError) {
            // Se l'utente rifiuta il cambio di rete
            if (switchError.code === 4001) {
                // Gestisci l'errore, per esempio mostrando un messaggio all'utente
                if (NETWORK_ID == '0x5') {
                    console.log('Please connect to Goerli arbitrum');
                } else {
                    console.log('Please connect to Ethereum');
                }

            } else {
                await addArbitrumNetwork();
                await connectToArbitrum();
            }
        }

    } else {
        // Warn the user that they need to install MetaMask
        alert('Please install MetaMask!');
    }
}

async function addArbitrumNetwork() {
    const params = {
        chainId: '421613', // Your chainId here
        chainName: 'Arbitrum Testnet',
        nativeCurrency: {
            name: 'AGOR',
            symbol: 'AGOR',
            decimals: 18,
        },
        rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc'], // The RPC URL for the chain
        blockExplorerUrls: ['https://goerli.arbiscan.io/'], // The URL for the block explorer of this chain
    };

    await ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [params, ethereum.selectedAddress],
    });
}

async function participateRaffle(raffleId, ticketPrice) {
    let tickets = $('#tickets' + raffleId).val();
    let button = $('#participate' + raffleId + ' .button-text');
    let total = ticketPrice * tickets;

    button.html(loader)
    await connectToArbitrum();
    RuffleL2Contract = new web3.eth.Contract(L2ABI, RuffleL2Address);
    let accounts = await web3.eth.getAccounts();
    let completePurchase;
    let check;
    let errorPurchase;
    let error;
    await RuffleL2Contract.methods.participate(raffleId).send({
        from: accounts[0],
        value: web3.utils.toWei(Number(total).toFixed(18), 'ether')
    }).on('transactionHash', function (hash) {
        console.log(`txn confirmed ! 🙌 ${hash}`);
        button.html('<div class="loading">wait</div>')
    })
        .on('receipt', async function (receipt) {
            let card = $('.raffle.open');

            let badge = card.find('.badge');

            button.html('Buy ticket')
            if (receipt.status === true) {
                console.log("Transaction was successful");
                completePurchase = $('.raffle.open .description .button .button-color-complete');
                check = $('.raffle.open .description .button .button-color-complete .check');
                check.removeClass('d-none');
                gsap.fromTo(completePurchase, { width: '0%', duration: 2 },
                    {
                        width: '300%',
                        onComplete: function () {


                            setTimeout(function () {
                                gsap.fromTo(badge,
                                    { scale: 1, duration: 0.5 },
                                    {
                                        scale: 0, duration: 0.5,
                                        onComplete: function () {
                                            let ticket2 = $(badge).find('.ticket');
                                            ticket2.html(parseInt(tickets) + parseInt(ticket2.html()));
                                            setTimeout(function () {
                                                badge.removeClass('d-none');
                                                gsap.fromTo(badge,
                                                    { scale: 0, duration: 0.5 },
                                                    {
                                                        scale: 1, duration: 0.5,
                                                        onComplete: function () {
                                                            card.click();
                                                            gsap.to(completePurchase, { width: '0%' })
                                                            check.addClass('d-none');
                                                        }
                                                    })
                                            }, 100)
                                        }
                                    })
                            }, 1000)
                        }
                    })

            } else {
                button.attr('disabled');
                errorPurchase = $('.raffle.open .description .button .button-color-error');
                errorSvg = $('.raffle.open .description .button .button-color-error .error');
                console.log(error);
                button.html('<div class="invisible">Buy ticket</div>')
                errorSvg.removeClass('d-none');
                gsap.fromTo(errorPurchase,
                    { width: '0%', duration: 2 },
                    {
                        width: '300%', onComplete: function () {
                            setTimeout(function () {
                                errorSvg.addClass('d-none');
                                gsap.to(errorPurchase, { width: '0%' })
                                errorSvg.addClass('d-none');
                                button.removeAttr('disabled');
                                button.html('Buy ticket');
                            }, 1000)
                        }
                    });
            }

        })
        .on('error', function (error) {

            errorPurchase = $('.raffle.open .description .button .button-color-error');
            errorSvg = $('.raffle.open .description .button .button-color-error .error');
            console.log(error);
            button.html('<div class="invisible">Buy ticket</div>')
            errorSvg.removeClass('d-none');
            button.attr('disabled');
            gsap.fromTo(errorPurchase,
                { width: '0%', duration: 2 },
                {
                    width: '300%', onComplete: function () {
                        setTimeout(function () {
                            errorSvg.addClass('d-none');
                            gsap.to(errorPurchase, { width: '0%' })
                            errorSvg.addClass('d-none');
                            button.removeAttr('disabled');
                            button.html('Buy ticket');
                        }, 1000)
                    }
                });
        }); // Handle any errors;
}
function prova() {
    let badge = $('.raffle.open .badge');

}

async function completeRaffle(raffleId) {
    RuffleL2Contract = new web3.eth.Contract(L2ABI, RuffleL2Address);
    let accounts = await web3.eth.getAccounts();
    let complete = await RuffleL2Contract.methods.completeRaffle(raffleId).send({
        from: accounts[0]
    });

}

async function getWinner(raffleId) {
    RuffleL2Contract = new web3.eth.Contract(L2ABI, RuffleL2Address);
    let accounts = await web3.eth.getAccounts();
    let setWinner = await RuffleL2Contract.methods.setWinner(raffleId).send({
        from: accounts[0]
    });
}

async function claimPrize(event, raffleId) {
    event.stopPropagation();
    await switchNetwork();
    let approved = await isApproved();
    if (!approved) {
        await setApproval();
    }
    await connectToArbitrum();
    RuffleL2Contract = new web3.eth.Contract(L2ABI, RuffleL2Address);
    let accounts = await web3.eth.getAccounts();
    let setRaffleTx = await RuffleL2Contract.methods.claimPrizeInL1(raffleId).send({
        from: accounts[0]
    })
}

async function ticketsBought(raffleId) {
    RuffleL2Contract = new web3.eth.Contract(L2ABI, RuffleL2Address);
    let accounts = await web3.eth.getAccounts();
    let ticketsBought = await RuffleL2Contract.methods.ticketsBought(raffleId, accounts[0]).call({ from: accounts[0] });
    let htmlticket = `
                <div style="display:flex;">
                    ${ticketsBought}
                </div>
                `;
    $(htmlticket).appendTo('.tickets' + raffleId);
}

async function getRefund(raffleId) {
    RuffleL2Contract = new web3.eth.Contract(L2ABI, RuffleL2Address);
    let accounts = await web3.eth.getAccounts();
    let result = await RuffleL2Contract.methods.refundToken(raffleId).send({ from: accounts[0] });

}

async function connect() {

    init().then(function () {
        $('.contenitore').removeClass('d-none')
        $('#message').hide();
        getData();
        getAllRaffle();
        let message = `<h2>Choose an ENS domain and buy a ticket<h2>`;
        $('#title').append(message);
    });

    $('[data-bs-toggle="tooltip"]').tooltip();

    $(function () {
        document.getElementById('beginRuffleBtn').addEventListener('click', function () {
            setRaffleInL2();
        });
    })

}
window.addEventListener('load', function () {

    if (typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask && window.ethereum._state.accounts[0] !== undefined) {

        console.log('MetaMask è collegato al sito.');
        $('.contenitore').removeClass('d-none')
        init().then(function () {
            getData();
        });

        getAllRaffle();
        $('[data-bs-toggle="tooltip"]').tooltip();
        let message = `<h2>Choose an ENS domain and buy a ticket<h2>`;
        $('#title').html(message);
        $(function () {
            document.getElementById('beginRuffleBtn').addEventListener('click', async function () {
                try {
                    // Insert 'loader' to a specific location in the DOM. 
                    $('#beginRuffleBtn .btn-text').html(loader);

                    await setRaffleInL2();
                } catch (error) {
                    // Log the error for debugging purposes
                    console.error(error);
                    setTimeout(function () {
                        $('#beginRuffleBtn .btn-text').html('Begin Ruffle');
                    }, 500)

                }
            });
        })


    } else {
        console.log('MetaMask non è collegato al sito.');
        let message = `<div id="message" class=" message position-absolute"><h3>Please connect your metamask wallet!<h3></div>`;
        $('body').append(message);
    }

});
async function disconnectMetamask() {
    window.ethereum._handleDisconnect

}
