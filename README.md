# Expanding

Expanding is a _refactoring_ technique (rewriting code without changing it's behavior) that "expands" code until each line has only one operation.  At first your expanded code may feel harder to read than the original code, but keep at it.  Learning to work with expanded code will help enormously understanding new code, tracking down bugs, and inferring strategies from new code. 


for each exercise you will be given
* a snippet of code for you to expand
* test cases to ensure your expansion has the same behavior as the original
* a mini testing framework to help you check your work at each step

it will be your task to expand the original snippet until it has one operation per line, but still passes the same tests as the original code.

### Index
* [learning objectives](#learning-objectives)
* [Expanding code](#expanding-code)  
* [test cases](#test-cases)  
* [testing framework](#testing-framework)
* [completed examples](#completed-examples)
* [the exercises](#the-exercises)

---

## Learning Objectives

* not being intimidated by dense code
* refactor patterns that you can trust and carry out without deep thinking so you can focus on the important stuff
* flexibly 'behind-the-scenes' understanding of how code executes
* refactoring for understanding and debugging
* explaining javascript with javascript
* stepping through expressions one operation at a time

[TOP](#expanding)

---

## Expanding Code

more detailed explanation here

[expanding expressions](./1-epressions.md)  
[expanding conditionals](./1-conditionals.md)  
[expanding loops](./1-loops.md)  

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

So, to start the exercises paste this framework into the console.  Then paste the test cases and original code you want to study into the blanks, run it once to make sure everything is in order.  After you've fully expanded the snippet, paste it from the console into this README and move on to the next challenge.

```js
{
  const test_cases = ;
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
      console.groupCollapsed(`%c ${_case.name}: \n`, 'color:red');
      console.log(`%c   actual: ${typeof actual},`, 'color:red', actual);
      console.log(`%c   expected: ${typeof expected},`, 'color:blue', expected);
      console.groupEnd();
    };
  };
};
```

[TOP](#expanding)

---

## Completed Examples

**Do While**  

test cases:
```js
const test_cases = [
    {name:'0', args:[0], expected:0},
    {name:'1', args:[1], expected:0},
    {name:'2', args:[2], expected:1},
    {name:'3', args:[3], expected:3},
    {name:'4', args:[4], expected:6},
    {name:'5', args:[5], expected:10},
    {name:'6', args:[6], expected:15},
    {name:'7', args:[7], expected:21},
  ];
```
snippet:
```js
let x = _case.args[0];
let i = 0;
actual = 0;

do {
  actual += i;
  i++;
} while (i < x);

```
expanded snippet:
```js
let x = _case.args[0];
let i = 0;
actual = 0;

{ // do
  actual += i; 
  i++;
};
let condition = i < x;
while (condition){
  actual += i;
  i++;
  condition = i < x;
};
```
your notes:

---

**If in a For Loop**  

test cases: 
```js
const test_cases = [
    {name:'10,2,3', args:[10,2,3], expected:[0,6]},
    {name:'30,5,3', args:[30,5,3], expected:[0,15]},
    {name:'31,5,3', args:[31,5,3], expected:[0,15,30]},
    {name:'12,2,3', args:[12,2,3], expected:[0,6]},
    {name:'12,2,4', args:[12,2,4], expected:[0,4,8]},
    {name:'12,4,3', args:[12,4,3], expected:[0]},
    {name:'13,2,3', args:[13,2,3], expected:[0,6,12]},
    {name:'13,2,4', args:[13,2,4], expected:[0,4,8,12]},
    {name:'13,4,3', args:[13,4,3], expected:[0,12]},
  ];
```
snippet:
```js
actual = [];

const upper = _case.args[0];
const a = _case.args[1];
const b = _case.args[2];

for (let i = 0; i < upper; i++) {
  if (!(i % a) && !(i % b)) {
    actual.push(i);
  };
};
```
expanded snippet:
```js
actual = [];

const upper = _case.args[0];
const a = _case.args[1];
const b = _case.args[2];
{ // old for loop
  let i = 0; 
  let while_cond = i < upper;
  while (while_cond) {
    let if_cond; { // !(i % a) && !(i % b);
        const op_1 = i % a;
        const op_2 = !op_1;
        const op_3 = i % b;
        const op_4 = !op_3;
        const op_5 = op_2 && op_4;
    if_cond = op_5;	};
    if ( if_cond ) {
      actual.push(i);
    };
    i++;
    while_cond = i < upper;
  };
};
```



[TOP](#expanding)
___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
