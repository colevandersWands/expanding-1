Expanding

Expanding is a refactoring* technique that "expands" code until each line of code only has one operation.Learning to xpand code will help enormously understanding new code, tracking down bugs, and inferring strategies from new code.


learning objectives
- not being intimidated by dense code
- refactor patterns that you can trust and carry out without deep thinking
- refactoring for understanding and debugging
- explaining javascript with javascript
- stepping through expressions in devtools for order of operations

* Refactoring: rewriting code without changing it's behavior

### Index
* [testing framework](#testing-framework)
* [the exercises](#the-exercises)

---


## Testing "Framework"

each exercise on this readme comes with:
* a snippet of code for you to expand
* test cases to ensure your expansion has the same behavior
it will be your task to expand the original snippet until there is one operation per line, but still passes the same tests as the original code.

To go from the original code to the expanded code, it is best to go one small change at a time so you can catch your mistakes right away. The 'framework' below will help you by letting you know when you have made a change that alters your code's behavior.

So start the exercises by pasting this into the console.  Then paste the test cases and original code you want to study into the blanks, run it once to make sure everything is in order.  Once you think you've fully expanded the snippet, paste it from the console into this README and move on to the next challenge.

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

