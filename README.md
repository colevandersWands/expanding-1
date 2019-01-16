# Expanding

Expanding is a _refactoring_ technique (rewriting code without changing it's behavior) that "expands" code until each line has only one operation.  At first your expanded code may feel harder to read than the original code, but keep at it.  Learning to work with expanded code will help enormously understanding new code, tracking down bugs, and inferring strategies from new code. 


for this series of exercises you will be given a snippet of code and test cases for that code.  Your task 


### Index
* [learning objectives](#learning-objectives)
* [Expanding](#expanding)  
* [test cases](#test-cases)  
* [testing framework](#testing-framework)
* [the exercises](#the-exercises)

---

learning objectives
* not being intimidated by dense code
* refactor patterns that you can trust and carry out without deep thinking so you can focus on the important stuff
* flexibly 'behind-the-scenes' understanding of how code executes
* refactoring for understanding and debugging
* explaining javascript with javascript
* stepping through expressions one operation at a time

---

# Test Cases

A code's behavior is what has changed _after_ it the code runs, implementation is the lines of code that make this change happen.  In the last exercises on tracing, logging & asserting you saw this difference.  The 'expected' variable described the snippet's _behavior_, while the logs and asserts helped to understand the snippet's _implementation_. This exercise will take you deeper into understanding and documenting code behavior.

Practically speaking you can think of this in terms of inputs and outputs.   What values did variables have at the top of a snippet, and what values do they have after the snippet?  To use vocabulary, what are the __arguments__ and what is the __expected__ output:
```js
const test_cases = [
    {name:'meaningful name', args:['the inputs', 'for this snippet'], expected: 'what it should output'},
    {name:'another test case', args:['different', 'inputs'], expected: 'the expected output'},
    ...
  ];
```

---


## Testing "Framework"

each exercise on this readme comes with:
* a snippet of code for you to expand
* test cases to ensure your expansion has the same behavior as the original
it will be your task to expand the original snippet until it has one operation per line, but still passes the same tests as the original code.

To go from the original code to the expanded code, it is best to go one small change at a time so you can catch your mistakes right away. The 'framework' below will help you by logging any changes in behavior from one change to the next.

So, to start the exercises paste this framework into the console.  Then paste the test cases and original code you want to study into the blanks, run it once to make sure everything is in order.  After you've fully expanded the snippet, paste it from the console into this README and move on to the next challenge.

```js
{
  const test_cases = ;
  for (let _case of test_cases) {
    const expected = _case.expected;

    paste code here

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

---



