# Expanding

Expanding is a _refactoring_ technique (rewriting code without changing it's behavior) that "expands" code until each line has only one operation.  At first your expanded code may feel harder to read than the original code, but keep at it.  Learning to work with expanded code will help enormously understanding new code, tracking down bugs, and inferring strategies from new code. 


learning objectives
* not being intimidated by dense code
* refactor patterns that you can trust and carry out without deep thinking so you can focus on the important stuff
* flexibly 'behind-the-scenes' understanding of how code executes
* refactoring for understanding and debugging
* explaining javascript with javascript
* stepping through expressions one operation at a time


### Index
* [testing framework](#testing-framework)
* [the exercises](#the-exercises)

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



