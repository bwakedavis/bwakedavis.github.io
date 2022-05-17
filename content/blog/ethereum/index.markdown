---
title: understand ethereum and it's wide ecosystem
date: "2020-05-02T22:12:03.284Z"
description: "Ethereum is the second most popular blockchain after the one that runs on Bitcoin. It's value token is called Ether"
---


**Ethereum** is an open source, public, blockchain based distributed computing platform featuring smart contract functionality that allow building of decentralized applications on the platform.

## Features of Ethereum

+ Supports smart contracts
+ Has a cryptocurrency called *ether*
+ Has Smart Property
+ Supports  DEcentralized Autonomous Organizations (DAO)

## Pillars of Ethereum

+ **Ethereum Virtual Machine** - serves as the heart of ethereum, architecture and provides computer power.
  
+ **Inter-Planetary-File-System** - *IPFS* serves as a distributed storage unit  for large files being stored on the ethereum network.
  
+ **Wallets/Browsers** - serves as a wallet for storing ether. used to deploy contracts

**Ether** is the value token of ethereum(ETH).
It's used to pay for transaction fees and computational services on ethereum network.
Every time a contract is executed, Ethereum consumes token which is termed as 'gas' to run the computations.

### Gas

**Gas** is the unit for the amount of computational work done by the computer for one cycle of the contract.
A transaction fee is charged as some amount of ether and is taken from the account balance where the transaction originate.
The more the fee, the higher the chances that the transaction will be picked up faster by the miners for inclusion in the block.
Providing too little gas leads to failed transactions.
Miners who add blocks to the blockchain are paid the transaction fees.
Gas prevents bogus transactions which can spam the network transaction fee is variable
**Gas price**
```gasCost = gasPrice * gasCost(gas)```

**Gas limit** is the maximum amount of gas the contract can use for it's computation.

#### Gas optimization tis

1. Put part of your code in a centralized server
2. Use a library with pre-tested contracts
3. Use ERC1167 if you want to deploy same contract several times
4. Use events because they consume less gas than state variables
5. Use literal values rather than computed ones
6. Avoid copying arrays in memory
7. Avoid using loops over dynamic ranges
8. Optimize the order of variables declaration i.e uint, byte, strings
9. Turn on the optimizer in solidity compiler inside ```truffle.config.js```.Though not always reliable.
10. Use ```eth-gas-reporter``` npm package to show your gas consumption every time you run tests

### Smart Contracts

A **Smart Contract** is a software program on the distributed ledger, allowing an immutable, verifiable and secure record all contract and transactions.

They're digital representation of real world contracts.

#### Properties of Smart Contracts

+ *Autonomous* - the creator doesn't have to participate in the process after deploying the contract.
+ *Auto-sufficient* - contracts are able to collect money, realize transactions, distribute resources, issue and spend funds to allow a large capacity of storage.

#### Advantages of Smart Contracts

+ Faster, simpler and hassle free processes.
+ Secure - data in decentralized registry cannot be easily lost or cyber attacked
+ Precision - Mistakes are not easily made due to absence of physical forms
+ Reduces settlement time.
+ Low operational overheads and costs.
+ Reduced administration and services cost owing .to automation and ease of compliance and reports.

#### Disadvantages of Smart Contracts

+ Hard to maintain - contracts deployed are immutable so changes in business logic and general bug fixes  become tough.
+ Small community because it's a new field.
  
**Decentralized Autonomous Organization(DAO)** are organizations that exist entirely on the blockchain and are governed by the protocols.
They're designed to hold onto assets and use a kind of voting to manage their distribution(use peer decision making).
DAO's comprise of a global network of nodes and members that all work together and create a unison to manage the distribution.

#### Types of Ethereum Accounts

+ *External Owned Accounts* - These are owned by people or organizations and controlled by private Keys.
+ *Contract Accounts* - These are autonomous accounts controlled by code.

## Ethereum Virtual Machine

**EVM** is a blockchain-based software platform. It allows developers to create decentralized applications (Dapps).

Contracts written in a smart contract specific language are compiled into *byte code* which the **evm** can read and execute.

## Decentralized Applications(DApps)

**DApps** are digital applications or programs that exist and run on a blockchain or peer to peer network of computers instead of a single computer, and are not controlled by a single authority.

#### Features of DApps

+ Open Sourced.The code is made open source and operates autonomously without any person or group controlling the majority of the tokens
+ Decentralized
+ Use Consensus Mechanism
+ Generates tokens to provide value to their contributing nodes.

#### Advantages of DApps

+ *Autonomy* - you make the agreement yourself.
+ *Trust* - your records are encrypted on a shared ledger.
+ Backup - your document are duplicated many times over.
+ *Accuracy* - they're sometime kinda slower and expensive but avoid errors that arise from tedious computational work.

#### Best practices for DApps design

1. You should not take control of your user private keys
2. First define your data model.Decide what to put and what not to put on the blockchain.
3. You should not sign transactions on behalf of your users from a central server
4. You should not put all the critical data and code on the blockchain
5. You should always run security tools on your smart contract
6. You should deploy your app on a public testnet before deploying on the test net
7. You should use ethereum addresses to identify users using ```msg.sender```
8. You should explain the update mechanism of your smart contract
9. You should explain how the external data is collected
10. You should verify you smart contract on etherscan
11. You should show feedback to users while transactions are underway
12. Have read-only UI mode for users who don't have wallets
13. Have a fallback web3 provider that connects to infura without connecting to any wallet
14. Support multiple wallets
15. Don't trigger the metamask dapp popup too early
16. Describe the effect of the transaction clearly and what it's for
17. Show feedback after the transaction is sent and is being processed
18. Keep the UI updated with the smart contract by using events

### Decentralized Finance (DeFi)

Applications on the blockchain decentralizing finance, lending and interest earnings

**Yield Farming** - Earning money on deposit to be given to other people as loans and they payback with interest

**Liquidity mining** - distributing tokens to users of a protocol for doing some tasks

#### Advantages of DeFi

+ Transparency
+ Decentralized
+ Flexibility
+ Free for all
  
#### Disadvantages of DeFi

+ Still in infancy stage
+ Sometime partially centralized

## Tokens

A token is an ethereum smart contract that represents an assert or a service in real world or in the blockchain. eg.cryptokitties.
Governed by **Ethereum Request for Comments(ERC)** token standard.

### ERC20 tokens

Represents fungible tokens

### ERC 165

Allow smart contract to tell other contract what function to implement

### ERC 223

Prevents token from being lost in the smart contract

### ERC 721 - Non-Fungible Tokens

*NFTs*  are digital assets that represent a wide range of unique tangible and intangible items. eg songs, tweets

Non-fungible tokens are indivisible  and can't be swapped with the other one.

Fungible tokens can be swapped with others of the same kind

#### characteristics of NFTs

+ Indivisible
+ Verifiable
+ Indestructible
+ Unique
+ Provably scarce
+ Transferable easily
+ Guarantee ownership

### ERC 1410

Token partition

### ERC 1155

Fungible and non-fungible tokens

### ERC 1594

Core standard

### ERC 1643

Attack documents

### ERC 1644

Forced token transfer

### ERC 1820

Simplify contract interaction
A contract can delegate execution of a function to another contract.

#### Initial Coin Offering(ICO)

**Advantages** - allows retaining of control, globalization, no regulation

**Initial Public Offering(IPO)** .
