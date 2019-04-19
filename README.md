# Expanding

Expanding is a _refactoring_ technique (rewriting code without changing it's behavior) that "expands" code until there is only one operation per line.  At first your expanded code may feel harder to read than the original code, but keep at it.  Learning to work with expanded code will help enormously understanding new code, tracking down bugs, and inferring strategies from new code. 


for each exercise you will be given
* a snippet of code for you to expand
* starter test cases to ensure your expansion has the same behavior as the original

it will be your task to write more test cases until you understand the behavior and to test your expanding, then to expand the original snippet until you understand the implementation.



### contents 
* [learning objectives](#learning-objectives)
* worked examples
    * [expressions](./1-expressions.md)  
    * [conditionals](./2-conditionals.md)  
    * [in-place operators](./3-in-place-operators.md)  
    * [loops](./4-loops.md) 
* Testing
    * [test cases](#test-cases)
    * [run\_tests function](#r)
* Completed Examples
    * [Do While](#completed-do-while) 
    * [If in a For Loop](#completed-if-in-for)
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

A snippet's behavior is what has changed in your program _after_ the snippet has run, implementation is the lines of code that make up the snippet.  The 'expected' variable described the snippet's _behavior_, while the logs and asserts helped to understand the snippet's _implementation_. This exercise will take a deeper look at implementation, breaking down dense snippets of code into longer pieces of code that illustrate the same implementation one operation at a time.

To make sure that you don't make any mistakes while refactoring the original snippet, you should write test cases before you start expanding.  With every small change you make, you will run the tests again.  If they pass you've done a correct change.  If any tests fail, revisit your last change and see what went wrong!

Practically speaking you can think of test cases as just inputs and outputs.   What values did variables have at the top of a snippet, and what values do they have after the snippet?  To use vocabulary, what are the __arguments__ and what is the __expected__ output.
```js
const test_cases = [
    {name:'meaningful name', args:['the inputs', 'for this snippet'], expected: 'what it should output'},
    {name:'another test case', args:['different', 'inputs'], expected: 'the expected output'},
    ...
  ];
```

Test cases may be relatively easy to read and use, but writing good ones can be tricky.  You have to think about all possible strange combinations and fringe cases. So don't worry about writing the perfect test cases yet, just do your best and compare with a friend to help each other understand how you thought of your test cases.


[TOP](#expanding)

---

## run\_tests Function

To check if your function passes all of it's test cases, we'll be using this function.  It takes two arguments (the function to test, and the test cases), and console.log's a message for every test case that fails.

Study it for a minute then paste it in the console, the exercises below won't work otherwise.  If you don't understand entirely how this function works that's okay.  The main objective for this exercise is to write & use test cases, understand JS operators.  

```js
function run_tests(_target, _cases) {
  for (let t_case of _cases) {
    
    // prep variables for convenience
    const expected = t_case.expected;
    const args = t_case.args;
    
    // run function with test case
    const actual = _target(...args);

    // compare
    let pass;
    if (typeof expected === 'object' && expected !== null) {
      const _actual = JSON.stringify(actual);
      const _expected = JSON.stringify(expected);
      pass = _actual === _expected;
    } else if ( typeof expected === 'number' && isNaN(expected) ) {
      pass = isNaN(actual) && typeof actual === 'number';
    } else {
      pass = actual === expected;
    };

    // communicate result to developer 
    if (!pass) {
      console.groupCollapsed(`%c  ${t_case.name}: \n`, 'color:orange');
      console.log(`%cactual: ${typeof actual},`, 'color:red', actual);
      console.log(`%cexpected: ${typeof expected},`, 'color:green', expected);
      console.groupEnd();
    };
  };
};
```

[TOP](#test-cases)

---
---

## Completed Examples

### Completed Do While

original snippet: [on pytut](http://www.pythontutor.com/live.html#code=function%20snippet%28x%29%20%7B%0A%20%20let%20i%20%3D%200%3B%0A%20%20let%20result%20%3D%200%3B%0A%0A%20%20do%20%7B%0A%20%20%20%20result%20%2B%3D%20i%3B%0A%20%20%20%20i%2B%2B%3B%0A%20%20%7D%20while%20%28i%20%3C%20x%29%3B%0A%0A%20%20return%20result%3B%0A%7D%0A%0Aconst%20actual%20%3D%20snippet%28/*%20fill%20this%20*/%29%3B%0Aconsole.assert%28actual%20%3D%3D%3D%20/*%20fill%20this%20*/%29%3B%0A/*%0A%20%20%7Bname%3A'0',%20args%3A%5B0%5D,%20expected%3A0%7D,%0A%20%20%7Bname%3A'1',%20args%3A%5B1%5D,%20expected%3A0%7D,%0A%20%20%7Bname%3A'2',%20args%3A%5B2%5D,%20expected%3A1%7D,%0A%20%20%7Bname%3A'3',%20args%3A%5B3%5D,%20expected%3A3%7D,%0A%20%20%7Bname%3A'4',%20args%3A%5B4%5D,%20expected%3A6%7D,%0A%20%20%7Bname%3A'5',%20args%3A%5B5%5D,%20expected%3A10%7D,%0A%20%20%7Bname%3A'6',%20args%3A%5B6%5D,%20expected%3A15%7D,%0A%20%20%7Bname%3A'7',%20args%3A%5B7%5D,%20expected%3A21%7D,%0A*/&cumulative=false&curInstr=10&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)
```js
{
  function snippet(x) {
    let i = 0;
    let result = 0;

    do {
      result += i;
      i++;
    } while (i < x);

    return result;
  }
}
```
finished solution: [on puytut](http://www.pythontutor.com/live.html#code=function%20expanded%28x%29%20%7B%0A%20%20let%20result%20%3D%200%3B%0A%0A%20%20let%20i%20%3D%200%3B%0A%20%20%7B%20//%20do%0A%20%20%20%20result%20%2B%3D%20i%3B%20%0A%20%20%20%20i%2B%2B%3B%0A%20%20%7D%3B%0A%20%20let%20condition%20%3D%20i%20%3C%20x%3B%0A%20%20while%20%28condition%29%7B%0A%20%20%20%20result%20%2B%3D%20i%3B%0A%20%20%20%20i%2B%2B%3B%0A%20%20%20%20condition%20%3D%20i%20%3C%20x%3B%0A%20%20%7D%0A%0A%20%20return%20result%3B%0A%7D%0A%0Aconst%20actual%20%3D%20expanded%28/*%20fill%20this%20*/%29%3B%0Aconsole.assert%28actual%20%3D%3D%3D%20/*%20fill%20this%20*/%29%3B%0A/*%0A%20%20%7Bname%3A'0',%20args%3A%5B0%5D,%20expected%3A0%7D,%0A%20%20%7Bname%3A'1',%20args%3A%5B1%5D,%20expected%3A0%7D,%0A%20%20%7Bname%3A'2',%20args%3A%5B2%5D,%20expected%3A1%7D,%0A%20%20%7Bname%3A'3',%20args%3A%5B3%5D,%20expected%3A3%7D,%0A%20%20%7Bname%3A'4',%20args%3A%5B4%5D,%20expected%3A6%7D,%0A%20%20%7Bname%3A'5',%20args%3A%5B5%5D,%20expected%3A10%7D,%0A%20%20%7Bname%3A'6',%20args%3A%5B6%5D,%20expected%3A15%7D,%0A%20%20%7Bname%3A'7',%20args%3A%5B7%5D,%20expected%3A21%7D,%0A*/&cumulative=false&curInstr=10&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)
```js
{
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

  function expanded(x) {
    let result = 0;

    let i = 0;
    { // do
      result += i; 
      i++;
    };
    let condition = i < x;
    while (condition){
      result += i;
      i++;
      condition = i < x;
    }

    return result;
  }

  run_tests(expanded, test_cases);
}
```

### Completed If in a For Loop

original snippet: [on pytut](http://www.pythontutor.com/live.html#code=function%20snippet%28upper,%20a,%20b%29%20%7B%0A%20%20let%20result%20%3D%20%5B%5D%3B%0A%0A%20%20for%20%28let%20i%20%3D%200%3B%20i%20%3C%20upper%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20if%20%28!%28i%20%25%20a%29%20%26%26%20!%28i%20%25%20b%29%29%20%7B%0A%20%20%20%20%20%20result.push%28i%29%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D%3B%0A%0A%20%20return%20result%3B%0A%7D%0A%0Aconst%20actual%20%3D%20snippet%28/*%20fill%20this%20*/%29%3B%0Aconsole.assert%28actual%20%3D%3D%3D%20/*%20fill%20this%20*/%29%3B%0A/*%0A%20%20%7Bname%3A'10,2,3',%20args%3A%5B10,2,3%5D,%20expected%3A%5B0,6%5D%7D,%0A%20%20%7Bname%3A'30,5,3',%20args%3A%5B30,5,3%5D,%20expected%3A%5B0,15%5D%7D,%0A%20%20%7Bname%3A'31,5,3',%20args%3A%5B31,5,3%5D,%20expected%3A%5B0,15,30%5D%7D,%0A%20%20%7Bname%3A'12,2,3',%20args%3A%5B12,2,3%5D,%20expected%3A%5B0,6%5D%7D,%0A%20%20%7Bname%3A'12,2,4',%20args%3A%5B12,2,4%5D,%20expected%3A%5B0,4,8%5D%7D,%0A%20%20%7Bname%3A'12,4,3',%20args%3A%5B12,4,3%5D,%20expected%3A%5B0%5D%7D,%0A%20%20%7Bname%3A'13,2,3',%20args%3A%5B13,2,3%5D,%20expected%3A%5B0,6,12%5D%7D,%0A%20%20%7Bname%3A'13,2,4',%20args%3A%5B13,2,4%5D,%20expected%3A%5B0,4,8,12%5D%7D,%0A%20%20%7Bname%3A'13,4,3',%20args%3A%5B13,4,3%5D,%20expected%3A%5B0,12%5D%7D,%0A*/&cumulative=false&curInstr=10&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)
```js
{
  function snippet(upper, a, b) {
    let result = [];

    for (let i = 0; i < upper; i++) {
      if (!(i % a) && !(i % b)) {
        result.push(i);
      };
    };

    return result;
  }
}
```

finished solution: [on pytut](http://www.pythontutor.com/live.html#code=function%20expanded%28upper,%20a,%20b%29%20%7B%0A%20%20let%20result%20%3D%20%5B%5D%3B%0A%0A%20%20let%20i%20%3D%200%3B%20%0A%20%20let%20while_cond%20%3D%20i%20%3C%20upper%3B%0A%20%20while%20%28while_cond%29%20%7B%0A%20%20%20%20let%20if_cond%3B%20%7B%20//%20!%28i%20%25%20a%29%20%26%26%20!%28i%20%25%20b%29%3B%0A%20%20%20%20%20%20%20%20const%20op_1%20%3D%20i%20%25%20a%3B%0A%20%20%20%20%20%20%20%20const%20op_2%20%3D%20!op_1%3B%0A%20%20%20%20%20%20%20%20const%20op_3%20%3D%20i%20%25%20b%3B%0A%20%20%20%20%20%20%20%20const%20op_4%20%3D%20!op_3%3B%0A%20%20%20%20%20%20%20%20const%20op_5%20%3D%20op_2%20%26%26%20op_4%3B%0A%20%20%20%20if_cond%20%3D%20op_5%3B%20%7D%3B%0A%20%20%20%20if%20%28%20if_cond%20%29%20%7B%0A%20%20%20%20%20%20actual.push%28i%29%3B%0A%20%20%20%20%7D%3B%0A%20%20%20%20i%2B%2B%3B%0A%20%20%20%20while_cond%20%3D%20i%20%3C%20upper%3B%0A%20%20%7D%0A%0A%20%20return%20result%3B%0A%7D%0A%0Aconst%20actual%20%3D%20expanded%28/*%20fill%20this%20*/%29%3B%0Aconsole.assert%28actual%20%3D%3D%3D%20/*%20fill%20this%20*/%29%3B%0A/*%0A%20%20%7Bname%3A'10,2,3',%20args%3A%5B10,2,3%5D,%20expected%3A%5B0,6%5D%7D,%0A%20%20%7Bname%3A'30,5,3',%20args%3A%5B30,5,3%5D,%20expected%3A%5B0,15%5D%7D,%0A%20%20%7Bname%3A'31,5,3',%20args%3A%5B31,5,3%5D,%20expected%3A%5B0,15,30%5D%7D,%0A%20%20%7Bname%3A'12,2,3',%20args%3A%5B12,2,3%5D,%20expected%3A%5B0,6%5D%7D,%0A%20%20%7Bname%3A'12,2,4',%20args%3A%5B12,2,4%5D,%20expected%3A%5B0,4,8%5D%7D,%0A%20%20%7Bname%3A'12,4,3',%20args%3A%5B12,4,3%5D,%20expected%3A%5B0%5D%7D,%0A%20%20%7Bname%3A'13,2,3',%20args%3A%5B13,2,3%5D,%20expected%3A%5B0,6,12%5D%7D,%0A%20%20%7Bname%3A'13,2,4',%20args%3A%5B13,2,4%5D,%20expected%3A%5B0,4,8,12%5D%7D,%0A%20%20%7Bname%3A'13,4,3',%20args%3A%5B13,4,3%5D,%20expected%3A%5B0,12%5D%7D,%0A*/&cumulative=false&curInstr=10&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)
```js
{ 
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
  function expanded(upper, a, b) {
    let result = [];

    let i = 0; 
    let while_cond = i < upper;
    while (while_cond) {
      let if_cond; { // !(i % a) && !(i % b);
          const op_1 = i % a;
          const op_2 = !op_1;
          const op_3 = i % b;
          const op_4 = !op_3;
          const op_5 = op_2 && op_4;
      if_cond = op_5; };
      if ( if_cond ) {
        actual.push(i);
      };
      i++;
      while_cond = i < upper;
    };

    return result;
  }
  run_tests(expanded, test_cases)
}
```


---

## The Exercises


### 1

```js
{
  const test_cases = [
        {name:'tr, tr, tr', args:[true,true,true], expected:true},
        {name:'tr, fa, tr', args:[true,false,true], expected:true},
        {name:'fa, tr, tr', args:[false,true,true], expected:true},
        {name:'fa, fa, tr', args:[false,false,true], expected:true},
        {name:'tr, tr, fa', args:[true,true,false], expected:false},
        {name:'tr, fa, fa', args:[true,false,false], expected:false},
        {name:'fa, tr, fa', args:[false,true,false], expected:false},
        {name:'fa, fa, fa', args:[false,false,false], expected:false},
        /* write at least 6 more test cases */
     ];

  function snippet(a, b, c) {
    let result; 
    
    if (a && b) {
       result = c && a;
    } else if (a && !b) {
       result = c && a;
    } else if (!a && b) {
       result = c && b;
    } else { 
       result = c && !a && !b;
    }

    return result;
  }

  run_tests(snippet, test_cases);
}
```

your notes:

[TOP](#expanding)

---

### 2


```js
{
  const test_cases = [
        {name:'"demorgans", tr, tr', args:['demorgans',true,true], expected: true},
        /* write 2 more demorgan's test cases */
        {name:'"demorgans", fa, fa', args:['demorgans',false,false], expected: true},
        {name:'"poo", tr, tr', args:['poo',true,true], expected: 'invalid input'},
        /* write 2 more absorption test cases */
        {name:'"absorption", fa, tr', args:['absorption',false,true], expected: true},
        {name:'"absorption", fa, fa', args:['absorption',false,false], expected: true},
        /* write 3 more test cases */
     ];

  function snippet(law, a, b) {
    let result;

    if (law === 'absorption') {
       result = (a || a && b) === (a && (a || b));
    } else if (law === 'demorgans') {
       result = (!a || !b) === !(a && b);
    } else {
       result = 'invalid input';
    };

    return result;
  }

  run_tests(snippet, test_cases);
}
```

your notes:

[TOP](#expanding)

---


### 3

```js
{
  const test_cases = [
        {name:'10, 3', args:[10,3], expected:18},
        {name:'10, 2', args:[10,2], expected:30},
        {name:'5, 8', args:[10,3], expected:0},
        {name:'8, 5', args:[10,3], expected:5},
        {name:'1e3, 999', args:[1e3,999], expected:999},
        /* write at least 5 more test cases */
     ];

  function snippet(upper, modulus) {
    let accumulate = 0;

    for (let i = 0; i <= upper; i++) {
       if ( !(i % modulus) ) {
          accumulate = accumulate + i;
       };
    };

    return accumulate;
  }

  run_tests(snippet, test_cases);
}
```

your notes:

[TOP](#expanding)

---

### 4

```js
{
  const test_cases = [
        {name:'2X2 nulls', args:[2,2,null], expected: [[null,null],[null,null]] },
        {name:'2X2 []\'s', args:[2,2,[]], expected: [[[],[]],[[],[]]] },
        {name:'3X3 0s', args:[3,3,0], expected: [[0,0,0],[0,0,0],[0,0,0]] },
        {name:'1X1 undefined', args:[1,1,undefined], expected: [[undefined]] },
        {name:'2X3 6s', args:[2,3,6], expected: [[6,6,6],[6,6,6]] },
        {name:'3X2 6s', args:[3,2,6], expected: [[6,6],[6,6],[6,6]] },
        /* write at least  5 more test cases */
      ];

  function snippet(outer_size, inner_size, filler) {
    const result = [];

    for (let i = 0; i < outer_size; i++) {
       result.push([]);
       for (let j = 0; j < inner_size; j++) {
          result[i].push(filler);
       };
    }

    return result;
  }

  run_tests(snippet, test_cases);
}
```
your notes:

[TOP](#expanding)

---

### 5

```js
{
  const test_cases = [
        {name:'8', args:[8], expected:'invalid input'},
        {name:'[3,2,1]', args:[[3,2,1]], expected: {0:3, 1:2, 2:1}},
        {name:'{1:3, 2:2, 3:1}', args:[{1:3, 2:2, 3:1}], expected: [3,2,1]},
        /* write at least 5 more test cases before expanding */
     ];

  function snippet(data_struct) {
    let result;

    if (data_struct instanceof Array) {
       result = {};
       let key = 0;
       for (let item of data_struct) {
          result[key] = item;
          key++;
       };
    } else if (data_struct instanceof Object) {
       result = [];
       for (let key in data_struct) {
          result.push(data_struct[key]);
       };
    } else {
       result = 'invalid input';
    }

    return result;
  }

  run_tests(snippet, run_tests);
}
```

your notes:

[TOP](#expanding)

--- 



### Big Long Challenge


```js
{
  const test_cases = [
      {name:'1,"2",null. str', args:[{a:1,b:'2',c:null},'str'], expected:{b:'2'}},
      {name:'1,"2",null. num', args:[{a:1,b:'2',c:null},'num'], expected:{a:1}},
      {name:'1,"2",null. poo', args:[{a:1,b:'2',c:null},'poo'], expected:{c:null}},
      /* write at least 5 more test cases */
    ];

  function snippet(items, filter_for) {
    const result = {};

    if (filter_for === 'str') {
      for (let key in items) {
        if (typeof items[key] === 'string') {
          result[key] = items[key];
        };
      };
    } else if (filter_for === 'num') {
       for (let key in items) {
        if (typeof items[key] === 'number') {
          result[key] = items[key];
        };
      };
    } else {
      for (let key in items_obj) {
        if (typeof items[key] !== 'number' && typeof items[key] !== 'string') {
          result[key] = items[key];
        };
      };
    }

    return result;
  }
  run_tests(snippet, test_cases);
}
```

your notes:

[TOP](#expanding)

___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
