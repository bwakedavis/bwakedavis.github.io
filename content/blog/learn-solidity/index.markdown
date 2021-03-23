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


  
*Ether* is used to pay block rewards, pay transaction fee and can be transferred betwwen accounts.
*Wei* one ether equals to 10 ^ 18 wei.

*Gas* - total amount of computation used to proecess each transaction on the blockchain is measured in gas.
The purpose of gas is to limit the amount of computations that a transction can do. eg. an eternal loop.

*Gas limit* is the maximum amount of gas you're willing to use.Set by you.
*Block gas limit* is the maximum amount alowed in the blockchain set by the network.

*Gas price* - Is the amount of ether you're willing for one gas.

*Ether = Gas limit * Gas Price*

When your transaction runs out of gas it's aborted but you still pay for the gas already used.
