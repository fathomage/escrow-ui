export const CONTRACT_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
export const abi = [
    {"type": "constructor", "inputs": [], "stateMutability": "nonpayable"}, {
      "type": "fallback",
      "stateMutability": "payable"
    }, {"type": "receive", "stateMutability": "payable"}, {
      "type": "function",
      "name": "cancelPurchase",
      "inputs": [{"name": "txId", "type": "uint256", "internalType": "uint256"}],
      "outputs": [],
      "stateMutability": "nonpayable"
    }, {
      "type": "function",
      "name": "checkTransactionStatus",
      "inputs": [{"name": "txId", "type": "uint256", "internalType": "uint256"}],
      "outputs": [{"name": "", "type": "uint8", "internalType": "enum Escrow.Status"}],
      "stateMutability": "view"
    }, {
      "type": "function",
      "name": "itemReceived",
      "inputs": [{"name": "txId", "type": "uint256", "internalType": "uint256"}],
      "outputs": [],
      "stateMutability": "nonpayable"
    }, {
      "type": "function",
      "name": "lastTransaction",
      "inputs": [],
      "outputs": [{
        "name": "",
        "type": "tuple",
        "internalType": "struct Escrow.Transaction",
        "components": [{"name": "id", "type": "uint256", "internalType": "uint256"}, {
          "name": "buyer",
          "type": "address",
          "internalType": "address"
        }, {"name": "seller", "type": "address", "internalType": "address"}, {
          "name": "item",
          "type": "string",
          "internalType": "string"
        }, {"name": "price", "type": "uint256", "internalType": "uint256"}, {"name": "status", "type": "uint8", "internalType": "enum Escrow.Status"}]
      }],
      "stateMutability": "view"
    }, {
      "type": "function",
      "name": "numActiveTransactions",
      "inputs": [],
      "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
      "stateMutability": "view"
    }, {
      "type": "function",
      "name": "numCompletedTransactions",
      "inputs": [],
      "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
      "stateMutability": "view"
    }, {
      "type": "function",
      "name": "purchaseItem",
      "inputs": [{"name": "seller", "type": "address", "internalType": "address"}, {"name": "item", "type": "string", "internalType": "string"}],
      "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
      "stateMutability": "payable"
    }, {
      "type": "function",
      "name": "shipItem",
      "inputs": [{"name": "txId", "type": "uint256", "internalType": "uint256"}],
      "outputs": [],
      "stateMutability": "nonpayable"
    }, {
      "type": "function",
      "name": "totalInEscrow",
      "inputs": [],
      "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}],
      "stateMutability": "view"
    }, {
      "type": "event",
      "name": "ItemPurchased",
      "inputs": [{"name": "txId", "type": "uint256", "indexed": false, "internalType": "uint256"}, {
        "name": "buyer",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      }, {"name": "seller", "type": "address", "indexed": false, "internalType": "address"}, {
        "name": "item",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      }, {"name": "price", "type": "uint256", "indexed": false, "internalType": "uint256"}],
      "anonymous": false
    }, {
      "type": "event",
      "name": "PurchaseCanceled",
      "inputs": [{"name": "txId", "type": "uint256", "indexed": false, "internalType": "uint256"}, {
        "name": "buyer",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      }, {"name": "seller", "type": "address", "indexed": false, "internalType": "address"}, {
        "name": "item",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      }, {"name": "price", "type": "uint256", "indexed": false, "internalType": "uint256"}],
      "anonymous": false
    }, {
      "type": "event",
      "name": "SaleCompleted",
      "inputs": [{"name": "txId", "type": "uint256", "indexed": false, "internalType": "uint256"}, {
        "name": "buyer",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      }, {"name": "seller", "type": "address", "indexed": false, "internalType": "address"}, {
        "name": "item",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      }, {"name": "price", "type": "uint256", "indexed": false, "internalType": "uint256"}],
      "anonymous": false
    }
];
