## Expanding Loops

words
* expanding out the condition because the condition evaluation counts as an operation, and we can only have one per line
* the base of all iteration expansions is a while loop with the condition extracted

these examples all contain 1-operation conditions that do not need to be expanded for simplicity.  you will want to expand conditions just like in if's if they are multi-step, this will help a lot in real-life debugging and developing.

### Contents
* [while](#while)
* [do while](#do-while)  
* [for](#for) 
* [for of](#for-of)  
* [for in](#for-in)

---

### While loops

```js
{ // while loop
  let i = 0;
  while (i < 2) {
    console.log(i + ' (a)');
    i++;
  };              
};

{ // refactor out condition
  let i = 0;
  let condition = i < 2;
  while (condition) {
    console.log(i + ' (b)');
    i++;
    condition = i < 2;
  };
};
```

[TOP](#expanding-loops)

---

### Do-While loops

```js
{ // do while
  let i = 0;
  do {
    console.log(i + ' (a)');
    i++;
  } while (i < 2);
};

{ // refactor to while
  let i = 0;
  { // do
    console.log(i + ' (b)');
    i++;  
  };
  while (i < 2) {
    console.log(i + ' (b)');
    i++;
  };
};

{ // refactor out condition
  let i = 0;
  { // do
    console.log(i + ' (b)');
    i++;  
  };
  let condition = i < 2;
  while (condition) {
    console.log(i + ' (c)');
    i++;
    condition = i < 2;
  };
};
```
[TOP](#expanding-loops)

---

### For loops

```js
{ // original for loop
  for (let i = 0; i < 2; i++) {
    console.log(i + ' (a)');
  }
};

// refactor to while loop
{ 
  { // the extra block is to keep 'i' scoped with while
    //  but out of the global scope, like in the for loop
    let i = 0; 
    while (i < 2) {
      console.log(i + ' (b)');
      i++;
    }  
  };
}

{ // refactor out condition
  {
    let i = 0;
    let condition = i < 2;
    while (condition) {
      console.log(i + ' (c)');
      i++;
      condition = i < 2;
    };
  };
};
```
[TOP](#expanding-loops)

---

### For-Of loops

```js
{ // for of loop
  const arr = [0, 1]
  for (let item of arr) {
    console.log(item + ' (a)');
  };
};

{ // refactor to for loop
  const arr = [0, 1]
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + ' (b)');
  };
};

{ // refactor to while loop
  const arr = [0, 1]
  { let i = 0;
    while (i < arr.length) {
      console.log(arr[i] + ' (c)');
      i++;
    };
  };
};

{ // refactor out condition
  const arr = [0, 1]
  { let i = 0;
    let condition = i < arr.length;
    while (condition) {
      console.log(arr[i] + ' (d)');
      i++;
      condition = i < arr.length;
    };
  };
};
```
[TOP](#expanding-loops)

---

### For-In loops


```js
{ // for in loop
  const obj = {a: 0, b: 1};
  for (let key in obj) {
    console.log(key+': ', obj[key], ' (a)');
  };
};

{ // refactor to for loop
  const obj = {a: 0, b: 1};
  { // creating a block to keek new 'keys' variable from global
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      console.log(keys[i]+': ', obj[keys[i]], ' (b)');
    };
   };
};

{ // refactor to while loop
  const obj = {a: 0, b: 1};
  { const keys = Object.keys(obj)
    let i = 0;
    while (i < keys.length) {
      console.log(keys[i]+': ', obj[keys[i]], ' (c)');
      i++;
    };
  };
};

{ // refactor out condition
  const obj = {a: 0, b: 1};
  { const keys = Object.keys(obj)
    let i = 0;
    let condition = i < keys.length;
    while (condition) {
      console.log(keys[i]+': ', obj[keys[i]], ' (d)');
      i++;
      condition = i < keys.length;
    };
  };
};
```
[TOP](#expanding-loops)

___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
