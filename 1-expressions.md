## Expanding Expressions

following the 'order of operation' rules: [link 1](http://www.scriptingmaster.com/javascript/operator-precedence.asp), [link 2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence).

and/or using this [ast visualizer](https://astexplorer.net/) 
* select to hide everything just above the collapsible tree, makes it readable
* this tool will be very helpful figuring out order of operations when expanding expressions
    * the deepest operators are executed first, then their parents, ...
* using this for anything but just expressions will likely be more confusing than helpful
* this tool doesn't check for syntax errors and doesn't run code, so keep it simple and just copy in the expression. no need for variable declarations

and finally, using the testing framework in console will help you catch mistakes.

---

### Examples

1:
```js
{ // single-line expression
  const a = 1, b = 'e', c = true;
  const result = a || b === !c;
};

{ // expanded expression
  const a = 1, b = 'e', c = true;
  let result; { // a || b === !c;
    const op_1 = !c;
    const op_2 = b === op_1;
    const op_3 = a || op_2;
  result = op_3 }; 
};
```

2: 
```js
{ // single-line expression
  const a = 0, b = null, c = '';
  const result = a < c && a >= b;
};

{ // expanded expression
  const a = 0, b = null, c = ' ';
  let result; { // a < c && a >= b;
    const op_1 = a < c;
    const op_2 = a >= b;
    const op_3 = op_1 && op_2;
  result = op_3 }; 
};
```


3: 
```js
{ // single-line expression
  const a = 1e3, b, c = Infinity;
  const result = a < c || b < c || b < a;
};

{ // expanded expression
  const a = 0, b = null, c = ' ';
  let result; { // a < c || b < c || b < a;
    const op_1 = a < c;
    const op_2 = b < c;
    const op_3 = b < a;
    const op_4 = op_1 || op_2;
    const op_5 = op_4 || op_3;
  result = op_5 }; 
};
```

___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
