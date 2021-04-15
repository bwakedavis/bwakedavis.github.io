---
title: Learn Solidity - Smart Contract Oriented Language
date: "2020-11-03T22:12:03.284Z"
description: "Solidity is an object-oriented, high-level language for implementing smart contracts.
It's designed to target the Ethereum Virtual Macine to implement Smart Contracts. It's influenced by C++, Python and JavaScript. So it will be easy to pick if you're familiar with any of the languages."
---

**Solidity** is a smart contract development language.
It is statically typed,supports inheritance, libraries etc.

Solidity code is written in files with **.sol** extension. You can use remix browser editor here [Remix](http://remix.ethereum.org) .It allows you to compile and deploy your contracts on the go.

**pragma** declares the version of solidity compiler to use.

```solidity
pragma solidity 0.5.3;
```

**contracts** are the building blocks of smart contracts.
lets write our first contract

```solidity
contract HelloWorld{

}
```

### Variables in solidity

**state variables**  are written in the blockchain.They're permanently stored in contract storage.

**local variables(memory)** − are variables whose values are present till function is executing.
**Calldata**

```solidity
contract HelloWorld{
    //state variable
    string public num1 = "1";

    function mynumber(string memory _num2) public {
        //local variable
        string memory num2 = _num2;
    }

}
```

#### Strings

```solidity
contract HelloWorld{
    string public greetings = "Hello World";
}
```

I'ts expensive to use the ethereum blockchain as a data storage hence using strings in your contracts is discouraged.
You can store large amount of data records on **IPFS**. It's cheaper and public.

#### Functions

Function are categorized according to **visibility** i.e *public, private, internal and external* and **behaviour** i.e *payable*,*view* and *pure*.
There are functions that:

+ *Create transactions on the blockchain*. They cost gas to call them.
  + Statements that change the state of the blockchain:
    + Writing to state variables.
    + Emitting events
    + Creating other contracts
    + Using selfdestruct
    + Sending Ether via calls
    + Calling any function bot marked as **view** or **pure**.
    + Using low-level calls
    + Using inline assembly that contains certain opcodes
+ *Functions that don't create transactions on the blockchain*.  This can be called for free.
  + **View** functions doesn't change the state of the blockchain
  + **Pure** functions does not change state nor read state variables in the blockchain.
    + Statement considered reading from the state.
      + Reading from state variables.
      + Accessing *address(this).balance* or *< address >.balance*.
      + Accessing any member of *block, tx, msg* except *msg.sig and msg.data*
      + Calling any function not marked pure.
      + Using inline assembly that contains certain opcodes

```solidity
contract HelloWorld {
         
  string public name;
  uint public x = 2;
  
  function setName(string memory _name) public {
      name = _name;
  }

  //View Functions
  
  function getName() public view returns(string memory){
      return name;
  }

  function add (uint y) public view returns (uint) {
      return x + y;
  }

  //Pure Functions
  function addNum (uint x, uint y) public pure returns(uint) {
      returns x + y;
  }

}
```

solidity functions can return multiple values

```solidity
    function returnMultipleValuesA() public pure returns (uint, bool, uint) {
        return (1, true, 21);
    }

    function returnMultipleValuesB() public pure returns (uint, bool, uint) {
    return (1, true, 21);
    }

    //Destructing Assignments
    function destructuredAssignments() public pure returns (uint, bool, uint, uint, uint) {
    (uint a, bool b, uint c) = returnMultipleValuesA();
    //lEaving values cout
    (uint x, uint y) = (5,6);
    
    return(a, b, c, x, y);
    }
```

In **public functions** you cannot input:

+ maps
+ multi-dimensional arrays(unfixed size).

#### Function Modifiers

Functions modifiers are reusable code that can be attached to a function either before or after the function is executed.
They can be used to restrict write access, validate input and prevent reentrancy hack

```solidity
pragma solidity ^0.5.3;

contract HelloWorld{
 address public owner;
 
 constructor() public {
     owner = msg.sender;
 }
 
 modifier onlyOwner() {
     require(msg.sender == owner, "Not Owner");
     _;
 }
 
modifier validAddress(address _addr) {
     require(_addr != address(0), "Not valid address");
     _;
 }
 
 function changeOwner(address _newOwner) public onlyOwner validAddress(_newOwner) {
     
     owner = _newOwner;
 }

 //No reentrency
 uint public x = 10;
 bool locked;
 
 modifier noReentrancy() {
     require(!locked, "Locked");
     
     locked = true;
     _;
     locked = false;
 }
 
 function decrement(uint i) public noReentrancy {
     x -= i;
     
     if(i > 1){
         decrement(i -1);
     }
 }
    
}
```

### Inheritance

You can inherit contracts in solidity.

```solidity
pragma solidity ^0.5.3;

contract HelloWorld{
function greet() public pure returns (string memory) {
    return "hello";
}
    
}

contract HelloWorld2 is HelloWorld{
    
}
```

You can override a function from the parrent function.

```solidity
pragma solidity ^0.5.3;

contract HelloWorld{
function greet() public pure returns (string memory) {
    return "hello";
}
    
}

contract HelloWorld2 is HelloWorld{
    function greet() public pure returns (string memory) {
    return "hello world";
}
}
```

When you deploy contract ```Helloworld2``` you'll see it has the ```greet()``` method

You can inherit constructor paramaters

```solidity
pragma solidity ^0.5.3;

contract HelloWorld{
string public origin;
constructor(string memory _origin) public {
    origin = _origin;
}
}

contract HelloWorld2 is HelloWorld {
  constructor(string memory _origin) HelloWorld(_origin) public {
      
  }  
}
```

You can inherit from multiple contracts

```solidity
pragma solidity ^0.5.3;

contract HelloWorld{

function hi() public pure returns (string memory) {
    return "Hi";
}
}

contract HelloWorld2 is HelloWorld {
function habari() public pure returns (string memory) {
    return "Habari";
}
}

contract HelloWorld3 is HelloWorld,HelloWorld2 {

}
```

Contracts are inherited from the most base like to the most derived.
You can call contracts ```explicitly``` or using ```super``` to get the parent method.

```solidity
pragma solidity ^0.5.3;

contract HelloWorld{
event Log(string message);

function hi() public {
    emit Log("A greetings function was called from contract 1");
}
function habari() public {
    emit Log("habari yako kutoka kwa kandarasi ya  ya pili");
}
}

contract HelloWorld2 is HelloWorld {
function hi() public {
        emit Log("A greetings function was called from contract 2");
        HelloWorld.hi();
        super.habari();
}
}

contract HelloWorld3 is HelloWorld,HelloWorld2 {
function hi() public {
        emit Log("A greetings function was called from contract 3");
        HelloWorld.hi();
}
}

contract HelloWorld4 is HelloWorld,HelloWorld2, HelloWorld3 {

}
```

You can inherit and call the contructor function in three ways:

```solidity
pragma solidity ^0.5.3;

contract HelloWorld{
string public name;

constructor(string memory _name) public {
    name = _name;
}

}

contract Greeting {
    string public text;
    constructor(string memory _text) public {
        text = _text;
    }
}

contract HelloWorld2 is HelloWorld("A fixed name input"), Greeting("Another fixed text Input") {

}

contract HelloWorld3 is HelloWorld, Greeting {
constructor() HelloWorld("Hard code new input") Greeting("Hard code new greeting") public {
    
}
}

contract HelloWorld4 is HelloWorld, Greeting {
constructor(string memory _name) HelloWorld(_name) Greeting(_name) public {
    
}
}
```

The order in which the contracts are called is determined by the inheritance.

```solidity
pragma solidity ^0.5.3;

contract HelloWorld{
event Log(string message);
string public name;

constructor(string memory _name) public {
    name = _name;
    
    emit Log(_name);
}

}

contract Greeting {
     event Log(string message);
    string public text;
    constructor(string memory _text) public {
        text = _text;
        
        emit Log(_text);
    }
}


contract HelloWorld3 is HelloWorld, Greeting {
constructor() HelloWorld("HelloWorld contract called") Greeting("Greetings contract called") public {
    
}
}

contract HelloWorld5 is HelloWorld, Greeting {
constructor() Greeting("Greetings contract called") HelloWorld("HelloWorld contract called") public {
    
}
}
```

You can override an inherited state variable in a contructor and not by re-assigning it outside the constructor.

```solidity
pragma solidity ^0.5.3;

contract HelloWorld{

string public name = "Davis";

}

contract Greeting is HelloWorld {
    constructor() public {
        name = "Bwake";
    }
}
```

**Private** state variables and functions are only accessible to the contract that defines it.
**Internal** state variables and functions are  accessible to the contract that defines it and the child contract.
**External** state variables and functions are  accessible to the other contracts and accounts.
**External** state variables and functions are  accessible to any contracts and accounts.

### Events

contracts can tell us that something has happened in the blockchain by firing events.
Applications can be notified when this events are fired.
Events accept 3 paramaters.
We can get access to the past events and subcribe to new ones.

```solidity
pragma solidity ^0.5.3;

contract HelloWorld{

//indexed allows you to search for events where the parameter equals to a certain value
event Log(address indexed sender, string message);
event AnotherLog();

function fireEvents() public {
    emit Log(msg.sender, "Hello World");
    emit Log(msg.sender, "Hello Again");
    emit AnotherLog();
}

}
```

Interacting with past events from Dai stable coin

```javascript
const Web3 =  require("web3");
//DAI stablecoin ABI
const abi = require("./abi.json");
const INFURA_URL = "Infura URL";

const web3 = new Web3(INFURA_URL);

//Address of Dai Stablecoin
const address = "0x89d24A6b4...";

async function main() {
const latest = await web3.eth.getBlockNumber();

console.log("Latest block is", latest);

const contract = new web3.eth.Contract(abi, address);

const logs = await contract.getPastEvents("Transfer", {fromBlock: latest - 100,
toBlock: latest
//filter by sender
//filter: {src: "0x526a.."},
//filter by receiver
///filter: {dst: "0x397553..."}
});
console.log("Logs", logs, `${logs.length logs}`)
}
```

Subscribe to new events.

```javascript
const Web3 = require("web3");

//Dai StableCoin ABI
const abi = require("./abi.json");
const INFURA_URL = "infura url";

const web3 = new Web3(new Web3.providers.WebsocketProvider(INFURA_URL));

//Adddress for Dai stablecoin
const address = "0x89d24...";

async function main() {
    const contract = new web3.eth.Contract(abi, address);
    console.log("Subscribe to transfer event");

    contract.events.Transfer({
        //filter by sender
        filter: {src: "0x397553..."}
    },
    (error, log) => {
        if(error) {
            console.log("error", error);
        }
        console.log("log", log);
    });
}
```

### Error handling

#### Assert

Should never evaluate to false.
Uses up all the gas.

#### Require

Used in validating input,preconditions and outputs.
Doesn't use up all the gas.

#### Revert

Used when checking more complex conditions.
takes in one argument

### Loops

Doing ```for``` loops in JavaScript.

```javascript
pragma solidity ^0.5.3;

contract HelloWorld{

uint public count;
address[100] public shareholders;
function loop(uint n) public {
    for (uint i = 0; i < n; i++) {
        count += 1;
    }
}

function dividendPay() public {
    for (uint i = 0; i < shareholders.length; i++) {
        //send Ether to each shareholder
    }
}
}
```

### Arrays

```javascript
pragma solidity ^0.5.3;

contract HelloWorld{

uint[] public myArray;
uint[] public myArray2 = [5,7,3];
uint[10] public newFixedArray;

function push(uint i) public {
    myArray.push(i);
}

function pop(uint i) public {
    myArray.pop();
}

function getLength() public view returns(uint) {
    return myArray.length;
}

function remove(uint index) public {
    
    // delete myArray[index];
    myArray[index] = myArray[myArray.length - 1];
    
}
}
```

### Mappings

Are like maps in JavaScript.
Are good for easy and faster access of data.
You cannot iterate or get the size of a mapping.

```javascript
pragma solidity ^0.5.3;

contract HelloWorld{

mapping(address => uint) public myMap;

function get(address _addr) public view returns (uint) {
    return myMap[_addr];
}

function set(address _addr, uint _i) public {
    myMap[_addr] = _i;
}
function remove(address _addr) public {
    delete myMap[_addr];
}
}


```

### Merkle Tree

```solidity
pragma solidity ^0.5.3;

contract HelloWorld{

    function verifyMerkleProof(bytes32[] memory proof, bytes32 root, bytes32 leaf, uint index) public pure returns (bool) {
        bytes32 hash = leaf;
        
        //recompute merkle root
        for (uint i = 0; i < proof.length; i++) {
            if (index % 2 == 0) {
                hash = keccak256(abi.encodePacked(hash, proof[i]));
            } else {
                hash = keccak256(abi.encodePacked(proof[i], hash));
            }
            
            index = index / 2;
        }
        
        return hash == root;
    }
}
```

### Enum

```solidity
pragma solidity ^0.5.3;

contract Order{

    enum Status {
        Pending,
        Shipped, 
        Accepted,
        Rejected,
        Cancelled
    }
    
    Status public status;
    
    function ship() public {
        require(status == Status.Pending);
        status = Status.Shipped;
    }
    
    function acceptDelivery() public {
        require(status == Status.Shipped);
        status = Status.Accepted;
    }
    
    function rejectDelivery() public {
        require(status == Status.Shipped);
        status = Status.Rejected;
    }
    
    function cancel() public {
        require(status == Status.Pending);
        status = Status.Cancelled;
    }
}
```

### Structs

Are user defined data types in solidity

```solidity
pragma solidity ^0.5.3;

contract Todos {
    
    struct Todo {
        string text;
        bool completed;
    }
    
    Todo[] public todos;
    
    function create(string memory _text) public {
        todos.push(Todo(_text, false));

    }
    
    function get(uint _index) public view returns (string memory, bool) {
        Todo storage todo = todos[_index];
        return (todo.text, todo.completed);
    }
    
    
}
```

### Payable functions and address

```solidity
pragma solidity ^0.5.3;

contract Wallet {
    //payable function & address
    event Deposit(address sender, uint amount, uint balance);
    event Withdraw(uint amount, uint balance);
    event Transfer(address to, uint amount, uint balance);
    
    address payable public owner;
    
    constructor() public payable {
        owner = msg.sender;
    }
    function deposit() public payable {
        emit Deposit(msg.sender, msg.value, address(this).balance);
    }
    
    function notPayable() public {
        
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }
    
    function withdraw(uint _amount) public onlyOwner {
        owner.transfer(_amount);
        emit Withdraw(_amount, address(this).balance);
    }
    
    function transfer(address payable _to, uint _amount) public onlyOwner {
        _to.transfer(_amount);
        emit Transfer(_to, _amount, address(this).balance);
    }
    
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
```

### Deployment

*Ether* is used to pay block rewards, pay transaction fee and can be transferred betwwen accounts.
*Wei* one ether equals to 10 ^ 18 wei.

*Gas* - total amount of computation used to proecess each transaction on the blockchain is measured in gas.
The purpose of gas is to limit the amount of computations that a transction can do. eg. an eternal loop.

*Gas limit* is the maximum amount of gas you're willing to use.Set by you.
*Block gas limit* is the maximum amount alowed in the blockchain set by the network.

*Gas price* - Is the amount of ether you're willing for one gas.

*Ether = Gas limit * Gas Price*

When your transaction runs out of gas it's aborted but you still pay for the gas already used.
