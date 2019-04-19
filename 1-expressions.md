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

**1:**  
[on pytut](http://www.pythontutor.com/live.html#code=const%20a%20%3D%20,%20b%20%3D%20,%20c%20%3D%20%3B%0A%0Aconst%20expression%20%3D%20a%20%7C%7C%20b%20%3D%3D%3D%20!c%3B%0A%0Alet%20expanded%3B%20%7B%20//%20a%20%7C%7C%20b%20%3D%3D%3D%20!c%3B%0A%20%20const%20op_1%20%3D%20!c%3B%0A%20%20const%20op_2%20%3D%20b%20%3D%3D%3D%20op_1%3B%0A%20%20const%20op_3%20%3D%20a%20%7C%7C%20op_2%3B%0Aexpanded%20%3D%20op_3%20%7D%3B%20%0A%0Aconsole.assert%28expression%20%3D%3D%3D%20expanded%29%3B&cumulative=false&curInstr=6&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)  
[parsonized](https://janke-learning.github.io/parsonizer/?snippet=const%20a%20%3D%201%2C%20b%20%3D%20'e'%2C%20c%20%3D%20true%3B%0Alet%20result%3B%20%7B%20%2F%2F%20a%20%7C%7C%20b%20%3D%3D%3D%20!c%3B%0A%20%20const%20op_1%20%3D%20!c%3B%0A%20%20const%20op_2%20%3D%20b%20%3D%3D%3D%20op_1%3B%0A%20%20const%20op_3%20%3D%20a%20%7C%7C%20op_2%3B%0Aresult%20%3D%20op_3%20%7D%3B%20)
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
  result = op_3 }
};
```
---

**2:**    
[on pytut](http://www.pythontutor.com/live.html#code=const%20a%20%3D%20,%20b%20%3D%20,%20c%20%3D%20%3B%0A%0Aconst%20expression%20%3D%20a%20%3C%20c%20%26%26%20a%20%3E%3D%20b%3B%0A%0Alet%20expanded%3B%20%7B%20//%20a%20%3C%20c%20%26%26%20a%20%3E%3D%20b%3B%0A%20%20const%20op_1%20%3D%20a%20%3C%20c%3B%0A%20%20const%20op_2%20%3D%20a%20%3E%3D%20b%3B%0A%20%20const%20op_3%20%3D%20op_1%20%26%26%20op_2%3B%0Aexpanded%20%3D%20op_3%20%7D%3B%20%0A%0Aconsole.assert%28expression%20%3D%3D%3D%20expanded%29%3B&cumulative=false&curInstr=6&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)  
[parsonized](https://janke-learning.github.io/parsonizer/?snippet=const%20a%20%3D%200%2C%20b%20%3D%20null%2C%20c%20%3D%20'%20'%3B%0Alet%20result%3B%20%7B%20%2F%2F%20a%20%3C%20c%20%26%26%20a%20%3E%3D%20b%3B%0A%20%20const%20op_1%20%3D%20a%20%3C%20c%3B%0A%20%20const%20op_2%20%3D%20a%20%3E%3D%20b%3B%0A%20%20const%20op_3%20%3D%20op_1%20%26%26%20op_2%3B%0Aresult%20%3D%20op_3%20%7D%3B%20)
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
  result = op_3 } 
};
```
---

**3:**  
[on pytut](http://www.pythontutor.com/live.html#code=const%20a%20%3D%20,%20b%20%3D%20,%20c%20%3D%20%3B%0A%0Aconst%20expression%20%3D%20a%20%3C%20c%20%7C%7C%20b%20%3C%20c%20%7C%7C%20b%20%3C%20a%3B%0A%0Alet%20expression%3B%20%7B%20//%20a%20%3C%20c%20%7C%7C%20b%20%3C%20c%20%7C%7C%20b%20%3C%20a%3B%0A%20%20const%20op_1%20%3D%20a%20%3C%20c%3B%0A%20%20const%20op_2%20%3D%20b%20%3C%20c%3B%0A%20%20const%20op_3%20%3D%20b%20%3C%20a%3B%0A%20%20const%20op_4%20%3D%20op_1%20%7C%7C%20op_2%3B%0A%20%20const%20op_5%20%3D%20op_4%20%7C%7C%20op_3%3B%0Aexpression%20%3D%20op_5%20%7D%3B%20%0A%0A%0Aconsole.assert%28expression%20%3D%3D%3D%20expanded%29%3B&cumulative=false&curInstr=6&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)   
[parsonized](https://janke-learning.github.io/parsonizer/?snippet=const%20a%20%3D%200%2C%20b%20%3D%20null%2C%20c%20%3D%20'%20'%3B%0Alet%20result%3B%20%7B%20%2F%2F%20a%20%3C%20c%20%7C%7C%20b%20%3C%20c%20%7C%7C%20b%20%3C%20a%3B%0A%20%20const%20op_1%20%3D%20a%20%3C%20c%3B%0A%20%20const%20op_2%20%3D%20b%20%3C%20c%3B%0A%20%20const%20op_3%20%3D%20b%20%3C%20a%3B%0A%20%20const%20op_4%20%3D%20op_1%20%7C%7C%20op_2%3B%0A%20%20const%20op_5%20%3D%20op_4%20%7C%7C%20op_3%3B%0Aresult%20%3D%20op_5%20%7D%3B%20)
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
  result = op_5 }
};
```

___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
