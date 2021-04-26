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

### Send Ether

```solidity
pragma solidity ^0.5.3;

//You can send ether to another contract with:
//transfer( forwards 2300 gas, throws error)
//send(forwards 2300 gas, returns bool)
//call(forwards all gas or set gas, returns bool)

contract ReceiveEther {
    function () external payable {
        
    }
    
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

contract SendEther {
        function sendViaTransfer(address payable _to) public payable {
            _to.transfer(msg.value);
        }
        
        function sendViaSend(address payable _to) public payable {
            bool sent = _to.send(msg.value);
            require(sent, "Failed to send Ether");
        }
        
        //call can prevent re-entrancy hack
        function sendViaCall(address payable _to) public payable {
            (bool sent, bytes memory data) = _to.call.value(msg.value)("");
            require(sent, "Failed to send Ether");
        }
}
```

### Fallback Function

Receives 2300 gas from ```transfer``` and ```send``` methods.
Can receive all gas from ```call``` method.

```solidity
pragma solidity ^0.5.3;

contract Fallback {
    event Log(uint gas);
    function () external payable {
        emit Log(gasleft());
    }
    
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

contract sendToFallback {
    //fails to send ether
    function transferToFallback(address payable _to) public payable {
        _to.transfer(msg.value);
    }
    
    //sends Ether
    function callFallback(address payable _to) public payable {
        (bool sent, ) = _to.call.value(msg.value)("");
        require(sent, "Failed to send Ether");
    }
}
```

### Call Method

Is a low level method available on address type.
A Fallback function is called when the function called does not exist.
eg.

+ call existing function.
+ call non-existing functions(it triggers a callback function).

```solidity
pragma solidity ^0.5.3;


contract Receiver {
    event Received(address caller, uint amount, string message);
    
    function () external payable {
        emit Received (msg.sender, msg.value, "Fallback was called");
    }
    function foo( string memory _message, uint _x) public payable returns (uint) {
        emit Received(msg.sender, msg.value, _message);
        
        return _x + 1;
    }
}

contract Caller {
    event Response(bool success, bytes data);
    
    function testCallFoo(address payable _addr) public payable {
        (bool success, bytes memory data) = _addr.call.value(msg.value).gas(5000)(abi.encodeWithSignature("foo(string, uint256)", "call foo", 123));
         emit Response(success, data);
    }
    
    function testCallDoesNotExist( address _addr) public {
        (bool success, bytes memory data) = _addr.call(abi.encodeWithSignature("doesNotExit()"));
         emit Response(success, data);
    }
}
```

### delegatecall
Is a low level function similar to call.
When a contract A delegatecall contract B, it runs B's code inside A's context (storage, msg.sender, msg.value)
hence contract A can be upgraded without changing any code inside it.

It runs code of callee in caller's context(storage, msg.sender, msg.value).
State variables of the caller and callee should be the same.

```solidity
pragma solidity ^0.5.3;


contract B {
    uint public num;
    address public sender;
    uint public value;
    
    function setVars(uint _num) public payable {
        num = _num;
        sender = msg.sender;
        value = msg.value;
    }
}

contract A {
    uint public num;
    address public sender;
    uint public value;
    
    function setVars(address _contract, uint _num) public payable {
        _contract.delegatecall(
            abi.encodeWithSignature("setVars(uint256)", _num));
    }
}
```

### calling other functions

```solidity
pragma solidity ^0.5.3;


contract Callee{
    uint public x;
    uint public value;
    
    function setX(uint _x) public returns(uint) {
        x = _x;
        return x;
    }
    
    function setXAndSendEther(uint _x) public payable returns (uint, uint) {
        x = _x;
        value = msg.value;
        
        return (x, value);
    }
}

contract Caller {
    
    function setX(Callee _callee, uint _x) public {
        uint x = _callee.setX(_x);
    }
    
    function setXFromAddress(address _addr, uint _x) public {
        Callee callee = Callee(_addr);
        uint x = callee.setX(_x);
    }
    
    function setXAndSendEther(Callee _callee, uint _x) public payable {
        (uint x, uint value) = _callee.setXAndSendEther.value(msg.value)(_x);
    }
}
```

### Creating Contracts from a contract

Creating contracts inside a contract can be useful when:

+ passing fixed inputs to a new contract
+ you want to manage several contracts from a single contract.

```solidity

contract Car {
    string public model;
    address public owner;
    
    constructor(string memory _model, address _owner) public payable {
        model = _model;
        owner = _owner;
    }
}

contract CarFactory {
    Car [] public cars;
    function create(address _owner, string memory _model) public {
        Car car = new Car(_model, _owner);
        cars.push(car);
    }
    
    function createAndSendEther(address _owner, string memory _model) public payable {
        Car car =  (new Car).value(msg.value)(_model, _owner);
    }
}
```

### Import

```solidity
pragma solidity ^0.5.11;

import './sendmoney.sol';

contract TestImport {
    
}

import "github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    
}
```

### Library

Libraries are like contracts but they have no staorage nor ether.
They help you keep your coode DRY(Don't Repeat Yourself)
 by adding functionality types
 Can save gas.
 Embedded library have only internal functions.

 ```solidity
 pragma solidity ^0.5.11;

library SafeMath {
    function add(uint x, uint y) internal pure returns (uint) {
        uint z = x + y;
        require( z >= x, "uint overflow");
        
        return z;
    }
}

contract TestSafeMath {
    using SafeMath for uint;
    //using  A for break
    //Attach functions from library A to type B
    
    
    function testAdd( uint x, uint y) public pure returns (uint) {
        return x.add(y);
    }
}





library Array {
    function remove(uint[] storage arr, uint index) public {
        arr[index] = arr[arr.length - 1];
        arr.pop();
    }
}

contract TestArray {
    using Array for uint[];
    
    uint[] public arr;
    
    function testArrayRemove() public {
        for (uint i =0; i < 3; i++) {
            arr.push(i);
        }
        
        // [0,1,2]
        arr.remove(1);
        // [0,2]
        assert(arr.length == 2);
        assert(arr[0] == 0);
        assert(arr[1] == 2);
        
    }
}
```

### Hash Function(Keccak256)

A cryptographic hash function takes an arbitrary size input and outputs a data of fixed  size.
It is deterministic, quick to compute the hash, irreversible, small input changes the output significantly and collition resistant.

```solidity
pragma solidity ^0.5.11;

contract HashFunction {
    
    function hash(string memory _text, uint _num, address _addr) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(_text, _num, _addr));
    }
    
    function collission(string memory _text, string memory _anothertext) public pure returns (bytes32) {
        return keccak256(abi.encode(_text, _anothertext));
    }
}

contract GuessTheMagicWord {
    bytes32 public answer = "hey"
    
    function guess(string memory _word) public view returns (bool) {
        return keccak256(abi.encodePacked(_word)) == answer;
    }
}
```

### Signature Verification

Create a message to sign, hash the message, sign the hash(off chain, keep your private key secret)

```solidity
pragma solidity ^0.5.11;

contract VerifySignature {
    function getMessagehash( address _to, uint _amount, string memory _message, uint _nonce) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(_to, _amount, _message,_nonce));
    }
    
    function getEthSignedMessageHash(bytes32 _messageHash) public pure returns (bytes32) {
        return keccak256(abi.encodePacked("\x19Ethereum Signed message:\n32", _messageHash));
        
    }
    
    function verify(address _signer, address _to, uint _amount, string memory _message, uint _nonce, bytes memory _signature) public pure returns (bool) {
        bytes32 messageHash = getMessagehash(_to, _amount,_message, _nonce);
        bytes32 ethSignedMessageHash = getEthSignedMessageHash(messageHash);
        
        return recoverSigner(ethSignedMessageHash, _signature) == _signer;
        
    }
    
    function recoverSigner(bytes32 _ethSignedMessageHash, bytes memory _signature) public pure returns (address) {
        (bytes32 r, bytes32 s, uint8 v) = splitSignature(_signature);
        
        return ecrecover(_ethSignedMessageHash, v,r,s);
    }
    
    function splitSignature(bytes memory _sig) public pure returns(bytes32 r, bytes32 s, uint8 v) {
        require(_sig.length == 65, "invalid signature length");
        
        assembly {
            r := mload(add(_sig, 32))
            s := mload(add(_sig, 64))
            v := byte(0, mload(add(_sig, 96)))
        }
    }
}
```

### Interface

```solidity
pragma solidity ^0.5.11;

interface ICounter {
    function count() external view returns (uint);
    function increment() external;
}

contract MyContract {
    function incrementCounter(address _counter) external {
        ICounter(_counter).increment();
    }
    
    function getCount(address _counter) external view returns (uint) {
        return ICounter(_counter).count();
    }
}




//uniswap example
interface UniswapV2Factory {
    function getPair(address tokenA, address tokenB) external view returns (address pair);
}

interface UniswapV2Pair {
    function getReserve() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);
}

contract UniswapExample {
    address private factory = 0x5...;
    address private dai = 0x6...;
    private weth = 0xC...;
    
    function getTokenReserve() external view returns (uint, uint) {
        address pair = UniswapV2Factory(factory).getPair(dai, weth);
        (uint reserve0, uint reserve1) = UniswapV2Pair(pair).getReserve();
        return (reserve0, reserve1);
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
