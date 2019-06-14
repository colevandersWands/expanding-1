# Expanding

Expanding is a _refactoring_ technique (rewriting code without changing it's behavior) that "expands" code until there is only one basic operation per line.  At first your expanded code may feel harder to read than the original code, but keep at it.  Learning to work with expanded code will help enormously understanding new code, tracking down bugs, and inferring strategies from new code. 

The end goal of expanding code is to re-create the same behavior using the most elemental units of JS.  You can even expand individual operators like [```++x```](./worked-in-place-operators.md) or [```a || b```](./worked-short-circuiting.md), replicating their behavior using different language features - just like you can't define a word with itself!

> ["What I cannot create, I do not understand." - Richard Feynman](https://blog.codinghorror.com/when-understanding-means-rewriting/)

### contents 
* [learning objectives](#learning-objectives)
* worked examples
    * [expressions](./worked-expressions.md)  
    * [short-circuiting](./worked-short-circuiting.md)  
    * [in-place operators](./worked-in-place-operators.md)  
    * [conditionals](./worked-conditionals.md)  
    * [loops](./worked-loops.md) 
* Testing
    * [test cases](#test-cases)
    * [run\_tests function](#run-tests-function)
    * [incremental refactoring](#incremental-refactoring)
* Exercises
    * [operators-only](./exercises-operators-only.md)
    * [everything](./exercises-everything.md)



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

## run tests Function

To check if your function passes all of it's test cases, we'll be using this function.  It takes two arguments (the function to test, and the test cases), and console.log's a message for every test case that fails.

Study it for a minute then paste it in the console, the exercises below won't work otherwise.  If you don't understand entirely how this function works that's okay.  The main objective for this exercise is to write & use test cases, understand JS operators.  

```js
function run_tests(_target, _cases) {
  console.groupCollapsed('<- click this arrow to see the function')
  console.log(_target.toString());
  console.groupEnd();
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
      console.groupCollapsed(`%c  ${t_case.name}:`, 'color:red');
      console.log(`%cactual: ${typeof actual},`, 'color:orange', actual);
      console.log(`%cexpected: ${typeof expected},`, 'color:blue', expected);
      console.groupEnd();
    } else {
      console.groupCollapsed(`%cPassed: ${t_case.name}!`, 'color:green');
      console.log(`result: ${typeof actual},`, actual);
      console.groupEnd();
    };
  };
}
```

[TOP](#test-cases)

---

## Incremental Refactoring

It's very easy to make little mistakes when you are refactoring code.  This isn't so bad if you only made one or two changes, it's not too hard to revisit the couple lines you changed and find where you messed up.  But it's a whole different story if you're making a bunch of changes.  It can be impossible to find and fix your mistakes without returning to your original code!  and that's a lot of time wasted.

To avoid this it's good to practice _incremental refactoring_: Making one small change at a time and re-running your tests after each change.  

[TOP](#test-cases)

___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
