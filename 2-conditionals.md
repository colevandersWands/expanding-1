## Expanding Conditions

(do we explicitly put in a step where you cast condition to boolean?)

### Index
* [if](#if)
* [if else](#if-else) 
* [if, else if, else](#if-else-if-else)
* [nested conditionals](#nested-conditionals)

---

### if

```js 
{ // original statement
  let a = 3, b = 5, c = 7;

  if (a > b || c) {
    console.log('if');
  };  
};

{ // refactor out condition
  let a = 3, b = 5, c = 7;
  { // the new block keeps extra variables from cluttering global
    const condition = a > b || c;

    if (condition) {
      console.log('if');
    };  
  };
};

{ // expand condition expression
  let a = 3, b = 5, c = 7;
  {
    const condition { // a > b || c;
      const op_1 = a > b;
      const op_2 = op_1 || c;
    condition = op_2; };

    if (condition) {
      console.log('if');
    };  
  };
};
```

[TOP](#expanding-conditions)

---

### if else

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
  { 
    const condition = a > b || c < a;

    if (condition) {
      console.log('if');
    } else {
      console.log('else');
    };
  };
};

{ // expand condition
  let a = 3, b = 5, c = 7;
  { 
    let condition { // a > b || c < a;
      const op_1 = a > b;
      const op_2 = c < a;
      const op_3 = op_1 || op_2;
    condition = op_3  };

    if (condition) {
      console.log('if');
    } else {
      console.log('else');
    };
  };
};
```
[TOP](#expanding-conditions)

---

### if, else if, else

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
  {
    let cond_1 { // a > b || c;
      const op_1 = a > b;
      const op_2 = op_2 || c;
    cond_1 = op_2; };

    let cond_2 { // c < a && b;
      const op_1 = c < a;
      const op_2 = op_1 && b;
    cond_2 = op_2; };

    if (cond_1) {
      console.log('if');
    } else if (cond_2) {
      console.log('else if');
    } else {
      console.log('else');
    };
  };
};
```
[TOP](#expanding-conditions)

---

### nested conditionals

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
  {
    const cond_1 = a > b || c;
    if (cond_1) {
      const cond_2 = b === c && a;
      if (cond_2) {
        console.log('if if');
      } else {
        console.log('if else');
      };
    }  else {
      const cond_3 = a <= c || !b;
      if (cond_3) {
        console.log('else if');
      } else {
        console.log('else else');
      };
    };
   };
};


{ // expand condition expressions
  let a = 3, b = 5, c = 7;
  {
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
      };
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
      };
    };
   };
};
```
[TOP](#expanding-conditions)

___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
