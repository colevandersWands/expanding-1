# Expanding

Expanding is a _refactoring_ technique (rewriting code without changing it's behavior) that "expands" code until each line has only one operation.  At first your expanded code may feel harder to read than the original code, but keep at it.  Learning to work with expanded code will help enormously understanding new code, tracking down bugs, and inferring strategies from new code. 


for each exercise you will be given
* a snippet of code for you to expand
* test cases to ensure your expansion has the same behavior as the original

it will be your task to expand the original snippet until it has one operation per line, but still passes the same tests as the original code.



### contents 
* [learning objectives](#learning-objectives)
* worked examples
    * [expressions](./1-expressions.md)  
    * [conditionals](./2-conditionals.md)  
    * [loops](./3-loops.md) 
* Testing
    * [test cases](#test-cases)
    * [testing "framework"](#testing-framework)
* Completed Examples
    * [Do While](./completed-examples.md/#do-while) 
    * [If in a For Loop](./completed-examples.md/#we-if-in-a-for-loop.md)
    * (need more of these, but they can come from your practice or live examples)
* The Exercises
    * [number 1](#1)
    * [number 2](#2)  
    * [number 3](#3)  
    * [number 4](#4)  
    * [number 5](#5)  
    * [big long challenge](#big-long-challenge)


---

## Learning Objectives

* not being intimidated by dense code
* breaking down dense code into small, understandable pices
* learning to trust yourself when manipulating code
* rewriting code without completely understanding it, in order to understand it
* flexibly 'behind-the-scenes' understanding of how code executes
* refactoring for understanding and debugging
* explaining javascript with javascript
* stepping through expressions one operation at a time

[TOP](#expanding)

---

## Test Cases

A snippet's behavior is what has changed in your program _after_ the snippet has run, implementation is the lines of code that make up the snippet.  In the last exercises on tracing, logging & asserting you saw this without the vocab.  The 'expected' variable described the snippet's _behavior_, while the logs and asserts helped to understand the snippet's _implementation_. This exercise will take a deeper look at implementation, breaking down dense snippets of code into longer pieces of code that illustrate the same implementation one operation at a time.

To make sure that you don't make any mistakes while refactoring the original snippet, we have provided test cases for each one.  With every small change you make, you will run the tests again.  If they pass you've done a correct change.  If any tests fail, revisit your last change and see what went wrong!

Practically speaking you can think of test cases as just inputs and outputs.   What values did variables have at the top of a snippet, and what values do they have after the snippet?  To use vocabulary, what are the __arguments__ and what is the __expected__ output:
```js
const test_cases = [
    {name:'meaningful name', args:['the inputs', 'for this snippet'], expected: 'what it should output'},
    {name:'another test case', args:['different', 'inputs'], expected: 'the expected output'},
    ...
  ];
```

[TOP](#expanding)

---


## Testing "Framework"


To go from the original code to the expanded code, it is best to go one small change at a time so you can catch your mistakes right away. The 'framework' below will help you by logging any changes in behavior from one change to the next.

So, to start the exercises paste this framework into the console.  Then paste the test cases and original code you want to study into the blanks, run it once to make sure everything is in order. You can test your small changes by hitting enter, and you can return to previous attempts with the up arrow. After you've fully expanded the snippet, paste it from the console into it's space on this README and move to the next exercise.

```js
expanding_framework: {
  const test_cases = /* paste in test cases */;
  for (let _case of test_cases) {
  
    let actual; { 
        // paste snippet challenge here
    };

    // framework magic happens down here
    const expected = _case.expected;
    let pass;
    if (typeof expected === 'object') {
      const _actual = JSON.stringify(actual);
      const _expected = JSON.stringify(expected);
      pass = _actual === _expected;
    } else {
      pass = actual === expected;
    };
    if (!pass) {
      console.groupCollapsed(`%c ${_case.name}: `, 'color:red');
      console.log(`%c   actual: ${typeof actual},`, 'color:red', actual);
      console.log(`%c   expected: ${typeof expected},`, 'color:blue', expected);
      console.groupEnd();
    };
  };
};
```
---
---

## The Exercises

---


### 1

test cases:
```js
const test_cases = [
      {name:'tr, tr, tr', args:[true,true,true], expected:true},
      {name:'tr, fa, tr', args:[true,false,true], expected:true},
      {name:'fa, tr, tr', args:[false,true,true], expected:true},
      {name:'fa, fa, tr', args:[false,false,true], expected:true},
      {name:'tr, tr, fa', args:[true,true,false], expected:false},
      {name:'tr, fa, fa', args:[true,false,false], expected:false},
      {name:'fa, tr, fa', args:[false,true,false], expected:false},
      {name:'fa, fa, fa', args:[false,false,false], expected:false},
   ];
```
snippet:
```js
let a = _case.args[0];
let b = _case.args[1];
let c = _case.args[2];

if (a && b) {
   actual = c && a;
} else if (a && !b) {
   actual = c && a;
} else if (!a && b) {
   actual = c && b;
} else { 
   actual = c && !a && !b;
};
```
expanded snippet:
```js
```
your notes:

[TOP](#expanding)

---

### 2

test cases:
```js
const test_cases = [
      {name:'8', args:[8], expected:'invalid input'},
      {name:'[3,2,1]', args:[[3,2,1]], expected: {0:3, 1:2, 2:1}},
      {name:'{1:3, 2:2, 3:1}', args:[{1:3, 2:2, 3:1}], expected: [3,2,1]},
   ];
```
snippet:
```js
const data_struct = _case.args[0];

if (data_struct instanceof Array) {
   actual = {};
   let key = 0;
   for (let item of data_struct) {
      actual[key] = item;
      key++;
   };
} else if (data_struct instanceof Object) {
   actual = [];
   for (let key in data_struct) {
      actual.push(data_struct[key]);
   };
} else {
   actual = 'invalid input';
};
```
expanded snippet:
```js
```
your notes:

[TOP](#expanding)

---

### 3

test cases:
```js
const test_cases = [
      {name:'10, 3', args:[10,3], expected:18},
      {name:'10, 2', args:[10,2], expected:30},
      {name:'5, 8', args:[10,3], expected:0},
      {name:'8, 5', args:[10,3], expected:5},
      {name:'1e3, 999', args:[1e3,999], expected:999},
   ];
```
snippet:
```js
actual = 0;

let upper = _case.args[0];
let modulus = _case.args[1];
let acumul = 0;

for (let i = 0; i <= upper; i++) {
   if ( !(i % modulus) ) {
      acumul = acumul + i;
   };
};

actual = acumul;
```
expanded snippet:
```js
```
your notes:

[TOP](#expanding)

---


### 4

test cases:
```js
const test_cases = [
      {name:'"demorgans", tr, tr', args:['demorgans',true,true], expected: true},
      {name:'"demorgans", tr, fa', args:['demorgans',true,false], expected: true},
      {name:'"demorgans", fa, tr', args:['demorgans',false,true], expected: true},
      {name:'"demorgans", fa, fa', args:['demorgans',false,false], expected: true},
      {name:'"poo", tr, tr', args:['poo',true,true], expected: 'invalid input'},
      {name:'"absorption", tr, tr', args:['absorption',true,true], expected: true},
      {name:'"absorption", tr, fa', args:['absorption',true,false], expected: true},
      {name:'"absorption", fa, tr', args:['absorption',false,true], expected: true},
      {name:'"absorption", fa, fa', args:['absorption',false,false], expected: true},
   ];
```
snippet:
```js
const law = _case.args[0];
const a = _case.args[1];
const b = _case.args[2];

if (law === 'absorption') {
   actual = (a || a && b) === (a && (a || b));
} else if (law === 'demorgans') {
   actual = (!a || !b) === !(a && b);
} else {
   actual = 'invalid input';
};
```
expanded snippet:
```js
```
your notes:

[TOP](#expanding)

---


### 5

test cases:
```js
const test_cases = [
      {name:'2X2 nulls', args:[2,2,null], expected: [[null,null],[null,null]] },
      {name:'2X2 []\'s', args:[2,2,[]], expected: [[[],[]],[[],[]]] },
      {name:'3X3 0s', args:[3,3,0], expected: [[0,0,0],[0,0,0],[0,0,0]] },
      {name:'1X1 undefined', args:[1,1,undefined], expected: [[undefined]] },
      {name:'2X3 6s', args:[2,3,6], expected: [[6,6,6],[6,6,6]] },
      {name:'3X2 6s', args:[3,2,6], expected: [[6,6],[6,6],[6,6]] },
   ];
```
snippet:
```js
actual = [];
let outer_size = _case.args[0];
let inner_size = _case.args[1];
let filler = _case.args[2];

for (let i = 0; i < outer_size; i++) {
   actual.push([]);
   for (let j = 0; j < inner_size; j++) {
      actual[i].push(filler);
   };
};
```
expanded snippet:
```js
```
your notes:

[TOP](#expanding)

---


### Big Long Challenge

test cases:
```js
const test_cases = [
    {name:'1,"2",null. str', args:[{a:1,b:'2',c:null},'str'], expected:{b:'2'}},
    {name:'1,"2",null. num', args:[{a:1,b:'2',c:null},'num'], expected:{a:1}},
    {name:'1,"2",null. poo', args:[{a:1,b:'2',c:null},'poo'], expected:{c:null}},
  ];
```
snippet:
```js
actual = {};

const items_obj = _case.args[0];
const filter_for = _case.args[1];

if (filter_for === 'str') {
  for (let key in items) {
    if (typeof items[key] === 'string') {
      actual[key] = items[key];
    };
  };
} else if (filter_for === 'num') {
   for (let key in items) {
    if (typeof items[key] === 'number') {
      actual[key] = items[key];
    };
  };
} else {
  for (let key in items_obj) {
    if (typeof items[key] !== 'number' && typeof items[key] !== 'string') {
      actual[key] = items[key];
    };
  };
};
```
expanded snippet:
```js
```
your notes:

[TOP](#expanding)

___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
