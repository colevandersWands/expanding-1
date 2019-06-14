# Short Circuiting

In JavaScript, the logical operators ```||``` and ```&&``` do a thing called "short circuiting".  This means that if the expression on the left is true (for ```||```) or false (for ```&&```), this value will be returned without evaluating the right-hand-side expression.

These examples will help you understand short-circuiting by replicating it's behavior.

### Examples
* [just ```||```](#just-or)
* [just ```&&```](#just-and)
* [resources](#resources)

---

## Just Or

Notice in these examples that the right-hand expression might never be executed!

__with a ternary__
```js
{ 
  const a = , b = ;

  const operator = (a + b) || (b < a);

  const left_evaluated = a + b;
  const left_is_truthy = Boolean(left_evaluated);
  const expanded = left_is_truthy ? left_evaluated : (b < a);

  console.assert(operator === expanded, 'js broke');
}
```
__with an if__
```js
{ 
  const a = , b = ;

  const operator = (a + b) || (b < a);

  const left_evaluated = a + b;
  const left_is_truthy = Boolean(left_evaluated);
  let expanded;
  if (left_is_truthy) {
    expanded = left_evaluated;
  } else {
    expanded = b < a;
  }

  console.assert(operator === expanded, 'js broke');
}
```

[TOP](#short-circuiting)

---

## Just And

Notice in these examples that the right-hand expression might never be executed!

__with a ternary__
```js
{ 
  const a = , b = ;

  const operator = (a + b) && (b < a);

  const left_evaluated = a + b;
  const left_is_falsey = ! Boolean( left_evaluated );
  const expanded = left_is_falsey ? left_evaluated : (b < a);

  console.assert(operator === expanded, 'js broke');
}
```
__with an if__
```js
{ 
  const a = , b = ;

  const operator = (a + b) && (b < a);

  const left_evaluated = a + b;
  const left_is_falsey = ! Boolean( left_evaluated );
  let expanded;
  if (left_is_falsey) {
    expanded = left_evaluated;
  } else {
    expanded = b < a;
  }

  console.assert(operator === expanded, 'js broke');
}
```

[TOP](#short-circuiting)

---

## Resources

* [codeburst: using || cleverly](https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c)

___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
