## Expanding Conditions

(do we explicitly put in a step where you cast condition to boolean?)

### Index
* [if](#if)
* [if else](#if-else) 
* [if, else if, else](#if-else-if-else)
* [nested conditionals](#nested-conditionals)

---

### if

[on pytut](http://www.pythontutor.com/live.html#code=let%20a%20%3D%20,%20b%20%3D%20,%20c%20%3D%20%3B%0A%0Aconst%20condition%20%7B%20//%20a%20%3E%20b%20%7C%7C%20c%3B%0A%20%20const%20op_1%20%3D%20a%20%3E%20b%3B%0A%20%20const%20op_2%20%3D%20op_1%20%7C%7C%20c%3B%0Acondition%20%3D%20op_2%3B%20%7D%0A%0Aif%20%28condition%29%20%7B%0A%20%20console.log%28'if'%29%3B%0A%7D&cumulative=false&curInstr=6&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)  
[parsonized](https://janke-learning.github.io/parsonizer/?snippet=let%20a%20%3D%203%2C%20b%20%3D%205%2C%20c%20%3D%207%3B%0A%0Alet%20condition%20%7B%20%2F%2F%20a%20%3E%20b%20%7C%7C%20c%3B%0A%20%20const%20op_1%20%3D%20a%20%3E%20b%3B%0A%20%20const%20op_2%20%3D%20op_1%20%7C%7C%20c%3B%0Acondition%20%3D%20op_2%3B%20%7D%3B%0A%0Aif%20%28condition%29%20%7B%0A%20%20console.log%28'if'%29%3B%0A%7D)
```js 
{ // original statement
  let a = 3, b = 5, c = 7;

  if (a > b || c) {
    console.log('if');
  };  
};

{ // factor out condition
  let a = 3, b = 5, c = 7;

  const condition = a > b || c;

  if (condition) {
    console.log('if');
  }
};

{ // expand condition expression
  let a = 3, b = 5, c = 7;

  let condition { // a > b || c;
    const op_1 = a > b;
    const op_2 = op_1 || c;
  condition = op_2; };

  if (condition) {
    console.log('if');
  }
};
```

[TOP](#expanding-conditions)

---

### if else

[on pytut](http://www.pythontutor.com/live.html#code=let%20a%20%3D%20,%20b%20%3D%20,%20c%20%3D%20%3B%0A%0Alet%20condition%20%7B%20//%20a%20%3E%20b%20%7C%7C%20c%20%3C%20a%3B%0A%20%20const%20op_1%20%3D%20a%20%3E%20b%3B%0A%20%20const%20op_2%20%3D%20c%20%3C%20a%3B%0A%20%20const%20op_3%20%3D%20op_1%20%7C%7C%20op_2%3B%0Acondition%20%3D%20op_3%20%20%7D%0A%0Aif%20%28condition%29%20%7B%0A%20%20console.log%28'if'%29%3B%0A%7D%20else%20%7B%0A%20%20console.log%28'else'%29%3B%0A%7D&cumulative=false&curInstr=6&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)  
[parsonized](https://janke-learning.github.io/parsonizer/?snippet=let%20a%20%3D%203%2C%20b%20%3D%205%2C%20c%20%3D%207%3B%0A%0Alet%20condition%20%7B%20%2F%2F%20a%20%3E%20b%20%7C%7C%20c%20%3C%20a%3B%0A%20%20const%20op_1%20%3D%20a%20%3E%20b%3B%0A%20%20const%20op_2%20%3D%20c%20%3C%20a%3B%0A%20%20const%20op_3%20%3D%20op_1%20%7C%7C%20op_2%3B%0Acondition%20%3D%20op_3%20%20%7D%3B%0A%0Aif%20%28condition%29%20%7B%0A%20%20console.log%28'if'%29%3B%0A%7D%20else%20%7B%0A%20%20console.log%28'else'%29%3B%0A%7D)  
```js
{ // original statement
  let a = 3, b = 5, c = 7;

  if (a > b || c < a) {
    console.log('if');
  } else {
    console.log('else');
  };
};

{ // refactor out condition
  let a = 3, b = 5, c = 7;

  const condition = a > b || c < a;

  if (condition) {
    console.log('if');
  } else {
    console.log('else');
  }
};

{ // expand condition
  let a = 3, b = 5, c = 7;

  let condition { // a > b || c < a;
    const op_1 = a > b;
    const op_2 = c < a;
    const op_3 = op_1 || op_2;
  condition = op_3  }

  if (condition) {
    console.log('if');
  } else {
    console.log('else');
  }
};
```
[TOP](#expanding-conditions)

---

### if, else if, else

[on pytut](http://www.pythontutor.com/live.html#code=let%20a%20%3D%20,%20b%20%3D%20,%20c%20%3D%20%3B%0A%0Alet%20cond_1%20%7B%20//%20a%20%3E%20b%20%7C%7C%20c%3B%0A%20%20const%20op_1%20%3D%20a%20%3E%20b%3B%0A%20%20const%20op_2%20%3D%20op_2%20%7C%7C%20c%3B%0Acond_1%20%3D%20op_2%3B%20%7D%0A%0Alet%20cond_2%20%7B%20//%20c%20%3C%20a%20%26%26%20b%3B%0A%20%20const%20op_1%20%3D%20c%20%3C%20a%3B%0A%20%20const%20op_2%20%3D%20op_1%20%26%26%20b%3B%0Acond_2%20%3D%20op_2%3B%20%7D%0A%0Aif%20%28cond_1%29%20%7B%0A%20%20console.log%28'if'%29%3B%0A%7D%20else%20if%20%28cond_2%29%20%7B%0A%20%20console.log%28'else%20if'%29%3B%0A%7D%20else%20%7B%0A%20%20console.log%28'else'%29%3B%0A%7D&cumulative=false&curInstr=6&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)  
[parsonizer](https://janke-learning.github.io/parsonizer/?snippet=let%20cond_1%20%7B%20%2F%2F%20a%20%3E%20b%20%7C%7C%20c%3B%0A%20%20const%20op_1%20%3D%20a%20%3E%20b%3B%0A%20%20const%20op_2%20%3D%20op_2%20%7C%7C%20c%3B%0Acond_1%20%3D%20op_2%3B%20%7D%0A%0Alet%20cond_2%20%7B%20%2F%2F%20c%20%3C%20a%20%26%26%20b%3B%0A%20%20const%20op_1%20%3D%20c%20%3C%20a%3B%0A%20%20const%20op_2%20%3D%20op_1%20%26%26%20b%3B%0Acond_2%20%3D%20op_2%3B%20%7D%0A%0Aif%20%28cond_1%29%20%7B%0A%20%20console.log%28'if'%29%3B%0A%7D%20else%20if%20%28cond_2%29%20%7B%0A%20%20console.log%28'else%20if'%29%3B%0A%7D%20else%20%7B%0A%20%20console.log%28'else'%29%3B%0A%7D)
```js
{ // original statement
  let a = 3, b = 5, c = 7;
  if (a > b || c) {
    console.log('if');
  } else if (c < a && b) {
    console.log('else if');
  } else {
    console.log('else');
  };
};

{ // refactor out conditions
  let a = 3, b = 5, c = 7;
  {
    const cond_1 = a > b || c;
    const cond_2 = c < a && b;

    if (cond_1) {
      console.log('if');
    } else if (cond_2) {
      console.log('else if');
    } else {
      console.log('else');
    };
  };
};

{ // expand conditions
  let a = 3, b = 5, c = 7;

  let cond_1 { // a > b || c;
    const op_1 = a > b;
    const op_2 = op_2 || c;
  cond_1 = op_2; }

  let cond_2 { // c < a && b;
    const op_1 = c < a;
    const op_2 = op_1 && b;
  cond_2 = op_2; }

  if (cond_1) {
    console.log('if');
  } else if (cond_2) {
    console.log('else if');
  } else {
    console.log('else');
  }
};
```
[TOP](#expanding-conditions)

---

### nested conditionals

[on pytut](http://www.pythontutor.com/live.html#code=let%20a%20%3D%20,%20b%20%3D%20,%20c%20%3D%20%3B%0A%0Aconst%20cond_1%20%7B%20//%20a%20%3E%20b%20%7C%7C%20c%3B%0A%20%20const%20op_1%20%3D%20a%20%3E%20b%3B%0A%20%20const%20op_2%20%3D%20op_1%20%7C%7C%20c%3B%0Acond_1%20%3D%20op_2%3B%20%7D%3B%0A%0Aif%20%28cond_1%29%20%7B%0A%0A%20%20const%20cond_2%20%7B%20//%20b%20%3D%3D%3D%20c%20%26%26%20a%3B%0A%20%20%20%20const%20op_1%20%3D%20c%20%26%26%20a%3B%0A%20%20%20%20const%20op_2%20%3D%20b%20%3D%3D%3D%20op_1%3B%0A%20%20cond_2%20%3D%20op_2%3B%20%7D%3B%0A%0A%20%20if%20%28cond_2%29%20%7B%0A%20%20%20%20console.log%28'if%20if'%29%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20console.log%28'if%20else'%29%3B%0A%20%20%7D%0A%0A%7D%20%20else%20%7B%0A%0A%20%20const%20cond_3%20%7B%20//%20a%20%3C%3D%20c%20%7C%7C%20!b%3B%0A%20%20%20%20const%20op_1%20%3D%20a%20%3C%3D%20c%3B%0A%20%20%20%20const%20op_2%20%3D%20!b%3B%0A%20%20%20%20const%20op_3%20%3D%20op_1%20%7C%7C%20op_2%3B%0A%20%20cond_3%20%3D%20op_3%3B%20%7D%3B%0A%0A%20%20if%20%28cond_3%29%20%7B%0A%20%20%20%20console.log%28'else%20if'%29%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20console.log%28'else%20else'%29%3B%0A%20%20%7D%0A%0A%7D&cumulative=false&curInstr=6&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)  
[parsonized](https://janke-learning.github.io/parsonizer/?snippet=let%20a%20%3D%20%2C%20b%20%3D%20%2C%20c%20%3D%20%3B%0A%0Aconst%20cond_1%20%3D%20a%20%3E%20b%20%7C%7C%20c%3B%0A%0Aif%20%28cond_1%29%20%7B%0A%0A%20%20const%20cond_2%20%3D%20b%20%3D%3D%3D%20c%20%26%26%20a%3B%0A%0A%20%20if%20%28cond_2%29%20%7B%0A%20%20%20%20console.log%28'if%20if'%29%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20console.log%28'if%20else'%29%3B%0A%20%20%7D%0A%0A%7D%20%20else%20%7B%0A%0A%20%20const%20cond_3%20%3D%20a%20%3C%3D%20c%20%7C%7C%20!b%3B%0A%0A%20%20if%20%28cond_3%29%20%7B%0A%20%20%20%20console.log%28'else%20if'%29%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20console.log%28'else%20else'%29%3B%0A%20%20%7D%0A%0A%7D)
```js
{ // original statement
  let a = 3, b = 5, c = 7;
  if (a > b || c) {
    if (b === c && a) {
      console.log('if if');
    } else {
      console.log('if else');
    };
  }  else {
    if (a <= c || !b) {
      console.log('else if');
    } else {
      console.log('else else');
    };
  };
};

{ // refactor out conditions
  let a = 3, b = 5, c = 7;

  const cond_1 = a > b || c;
  if (cond_1) {

    const cond_2 = b === c && a;
    if (cond_2) {
      console.log('if if');
    } else {
      console.log('if else');
    }

  }  else {

    const cond_3 = a <= c || !b;
    if (cond_3) {
      console.log('else if');
    } else {
      console.log('else else');
    };

  }
}


{ // expand condition expressions
  let a = 3, b = 5, c = 7;

  const cond_1 { // a > b || c;
    const op_1 = a > b;
    const op_2 = op_1 || c;
  cond_1 = op_2; };

  if (cond_1) {

    const cond_2 { // b === c && a;
      const op_1 = c && a;
      const op_2 = b === op_1;
    cond_2 = op_2; };

    if (cond_2) {
      console.log('if if');
    } else {
      console.log('if else');
    }

  }  else {

    const cond_3 { // a <= c || !b;
      const op_1 = a <= c;
      const op_2 = !b;
      const op_3 = op_1 || op_2;
    cond_3 = op_3; };

    if (cond_3) {
      console.log('else if');
    } else {
      console.log('else else');
    }

  }
}
```
[TOP](#expanding-conditions)

___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
