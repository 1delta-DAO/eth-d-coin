export const mintableVaultAbi = [
  {
      "type": "constructor",
      "inputs": [
          {
              "name": "_evc",
              "type": "address",
              "internalType": "contract IEVC"
          },
          {
              "name": "_asset",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "_irm",
              "type": "address",
              "internalType": "contract IIRM"
          },
          {
              "name": "_oracle",
              "type": "address",
              "internalType": "contract IPriceOracle"
          },
          {
              "name": "_referenceAsset",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "_name",
              "type": "string",
              "internalType": "string"
          },
          {
              "name": "_symbol",
              "type": "string",
              "internalType": "string"
          }
      ],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "allowance",
      "inputs": [
          {
              "name": "owner",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "spender",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "approve",
      "inputs": [
          {
              "name": "spender",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "value",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "bool",
              "internalType": "bool"
          }
      ],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "asset",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
          {
              "name": "account",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "borrow",
      "inputs": [
          {
              "name": "assets",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "receiver",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "borrowCap",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "checkAccountStatus",
      "inputs": [
          {
              "name": "account",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "collaterals",
              "type": "address[]",
              "internalType": "address[]"
          }
      ],
      "outputs": [
          {
              "name": "magicValue",
              "type": "bytes4",
              "internalType": "bytes4"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "checkVaultStatus",
      "inputs": [],
      "outputs": [
          {
              "name": "magicValue",
              "type": "bytes4",
              "internalType": "bytes4"
          }
      ],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "convertToAssets",
      "inputs": [
          {
              "name": "shares",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "convertToShares",
      "inputs": [
          {
              "name": "assets",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "debtOf",
      "inputs": [
          {
              "name": "account",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "decimals",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint8",
              "internalType": "uint8"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "deposit",
      "inputs": [
          {
              "name": "assets",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "receiver",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [
          {
              "name": "shares",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "disableController",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "getAccountLiabilityStatus",
      "inputs": [
          {
              "name": "account",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [
          {
              "name": "liabilityValue",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "collateralValue",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "getCollateralFactor",
      "inputs": [
          {
              "name": "_asset",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "getInterestRate",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "irm",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "contract IIRM"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "liquidate",
      "inputs": [
          {
              "name": "violator",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "collateral",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "repayAssets",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "maxDeposit",
      "inputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "maxMint",
      "inputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "maxRedeem",
      "inputs": [
          {
              "name": "owner",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "maxWithdraw",
      "inputs": [
          {
              "name": "owner",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "mint",
      "inputs": [
          {
              "name": "shares",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "receiver",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [
          {
              "name": "assets",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "name",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "string",
              "internalType": "string"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "oracle",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "contract IPriceOracle"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "previewDeposit",
      "inputs": [
          {
              "name": "assets",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "previewMint",
      "inputs": [
          {
              "name": "shares",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "previewRedeem",
      "inputs": [
          {
              "name": "shares",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "previewWithdraw",
      "inputs": [
          {
              "name": "assets",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "pullDebt",
      "inputs": [
          {
              "name": "from",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "assets",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "bool",
              "internalType": "bool"
          }
      ],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "redeem",
      "inputs": [
          {
              "name": "shares",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "receiver",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "owner",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [
          {
              "name": "assets",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "referenceAsset",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "contract ERC20"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "renounceOwnership",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "repay",
      "inputs": [
          {
              "name": "assets",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "receiver",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "setBorrowCap",
      "inputs": [
          {
              "name": "newBorrowCap",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "setCollateralFactor",
      "inputs": [
          {
              "name": "_asset",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "_collateralFactor",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "setIRM",
      "inputs": [
          {
              "name": "_irm",
              "type": "address",
              "internalType": "contract IIRM"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "setOracle",
      "inputs": [
          {
              "name": "_oracle",
              "type": "address",
              "internalType": "contract IPriceOracle"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "setReferenceAsset",
      "inputs": [
          {
              "name": "_referenceAsset",
              "type": "address",
              "internalType": "contract ERC20"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "setSupplyCap",
      "inputs": [
          {
              "name": "newSupplyCap",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "supplyCap",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "symbol",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "string",
              "internalType": "string"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "totalAssets",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "totalBorrowed",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "totalSupply",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "transfer",
      "inputs": [
          {
              "name": "to",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "amount",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "bool",
              "internalType": "bool"
          }
      ],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "transferFrom",
      "inputs": [
          {
              "name": "from",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "to",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "amount",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "bool",
              "internalType": "bool"
          }
      ],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "transferOwnership",
      "inputs": [
          {
              "name": "newOwner",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "withdraw",
      "inputs": [
          {
              "name": "assets",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "receiver",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "owner",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [
          {
              "name": "shares",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "nonpayable"
  },
  {
      "type": "event",
      "name": "Approval",
      "inputs": [
          {
              "name": "owner",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "spender",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "value",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
          }
      ],
      "anonymous": false
  },
  {
      "type": "event",
      "name": "Borrow",
      "inputs": [
          {
              "name": "caller",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "owner",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "assets",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
          }
      ],
      "anonymous": false
  },
  {
      "type": "event",
      "name": "BorrowCapSet",
      "inputs": [
          {
              "name": "newBorrowCap",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
          }
      ],
      "anonymous": false
  },
  {
      "type": "event",
      "name": "Deposit",
      "inputs": [
          {
              "name": "sender",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "owner",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "assets",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
          },
          {
              "name": "shares",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
          }
      ],
      "anonymous": false
  },
  {
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
          {
              "name": "previousOwner",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "newOwner",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          }
      ],
      "anonymous": false
  },
  {
      "type": "event",
      "name": "Repay",
      "inputs": [
          {
              "name": "caller",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "receiver",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "assets",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
          }
      ],
      "anonymous": false
  },
  {
      "type": "event",
      "name": "SupplyCapSet",
      "inputs": [
          {
              "name": "newSupplyCap",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
          }
      ],
      "anonymous": false
  },
  {
      "type": "event",
      "name": "Transfer",
      "inputs": [
          {
              "name": "from",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "to",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "value",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
          }
      ],
      "anonymous": false
  },
  {
      "type": "event",
      "name": "Withdraw",
      "inputs": [
          {
              "name": "sender",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "receiver",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "owner",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "assets",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
          },
          {
              "name": "shares",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
          }
      ],
      "anonymous": false
  },
  {
      "type": "error",
      "name": "AccountUnhealthy",
      "inputs": []
  },
  {
      "type": "error",
      "name": "AddressEmptyCode",
      "inputs": [
          {
              "name": "target",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "type": "error",
      "name": "AddressInsufficientBalance",
      "inputs": [
          {
              "name": "account",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "type": "error",
      "name": "BorrowCapExceeded",
      "inputs": []
  },
  {
      "type": "error",
      "name": "CollateralDisabled",
      "inputs": []
  },
  {
      "type": "error",
      "name": "ControllerDisabled",
      "inputs": []
  },
  {
      "type": "error",
      "name": "ERC20InsufficientAllowance",
      "inputs": [
          {
              "name": "spender",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "allowance",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "needed",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "type": "error",
      "name": "ERC20InsufficientBalance",
      "inputs": [
          {
              "name": "sender",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "balance",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "needed",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "type": "error",
      "name": "ERC20InvalidApprover",
      "inputs": [
          {
              "name": "approver",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "type": "error",
      "name": "ERC20InvalidReceiver",
      "inputs": [
          {
              "name": "receiver",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "type": "error",
      "name": "ERC20InvalidSender",
      "inputs": [
          {
              "name": "sender",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "type": "error",
      "name": "ERC20InvalidSpender",
      "inputs": [
          {
              "name": "spender",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "type": "error",
      "name": "ERC4626ExceededMaxDeposit",
      "inputs": [
          {
              "name": "receiver",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "assets",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "max",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "type": "error",
      "name": "ERC4626ExceededMaxMint",
      "inputs": [
          {
              "name": "receiver",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "shares",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "max",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "type": "error",
      "name": "ERC4626ExceededMaxRedeem",
      "inputs": [
          {
              "name": "owner",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "shares",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "max",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "type": "error",
      "name": "ERC4626ExceededMaxWithdraw",
      "inputs": [
          {
              "name": "owner",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "assets",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "max",
              "type": "uint256",
              "internalType": "uint256"
          }
      ]
  },
  {
      "type": "error",
      "name": "FailedInnerCall",
      "inputs": []
  },
  {
      "type": "error",
      "name": "InvalidCollateralFactor",
      "inputs": []
  },
  {
      "type": "error",
      "name": "NoLiquidationOpportunity",
      "inputs": []
  },
  {
      "type": "error",
      "name": "NotAuthorized",
      "inputs": []
  },
  {
      "type": "error",
      "name": "OutstandingDebt",
      "inputs": []
  },
  {
      "type": "error",
      "name": "OwnableInvalidOwner",
      "inputs": [
          {
              "name": "owner",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "type": "error",
      "name": "OwnableUnauthorizedAccount",
      "inputs": [
          {
              "name": "account",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "type": "error",
      "name": "Reentrancy",
      "inputs": []
  },
  {
      "type": "error",
      "name": "RepayAssetsExceeded",
      "inputs": []
  },
  {
      "type": "error",
      "name": "RepayAssetsInsufficient",
      "inputs": []
  },
  {
      "type": "error",
      "name": "SafeERC20FailedOperation",
      "inputs": [
          {
              "name": "token",
              "type": "address",
              "internalType": "address"
          }
      ]
  },
  {
      "type": "error",
      "name": "SelfLiquidation",
      "inputs": []
  },
  {
      "type": "error",
      "name": "SharesSeizureFailed",
      "inputs": []
  },
  {
      "type": "error",
      "name": "SnapshotNotTaken",
      "inputs": []
  },
  {
      "type": "error",
      "name": "SupplyCapExceeded",
      "inputs": []
  },
  {
      "type": "error",
      "name": "VaultStatusCheckDeferred",
      "inputs": []
  },
  {
      "type": "error",
      "name": "ViolatorStatusCheckDeferred",
      "inputs": []
  }
]