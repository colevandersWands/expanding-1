# Completed Examples

some fully completed examples to study.

### Index
* [do while](#do-while)
* [If in a For Loop](#if-in-a-for-loop)

---

## Do While

snippet:
```js
let x = _case.args[0];
let i = 0;
actual = 0;

do {
  actual += i;
  i++;
} while (i < x);
```
test cases:
```js
const test_cases = [
    {name:'0', args:[0], expected:0},
    {name:'1', args:[1], expected:0},
    {name:'2', args:[2], expected:1},
    {name:'3', args:[3], expected:3},
    {name:'4', args:[4], expected:6},
    {name:'5', args:[5], expected:10},
    {name:'6', args:[6], expected:15},
    {name:'7', args:[7], expected:21},
  ];
```
expanded snippet:
```js
let x = _case.args[0];
let i = 0;
actual = 0;

{ // do
  actual += i; 
  i++;
};
let condition = i < x;
while (condition){
  actual += i;
  i++;
  condition = i < x;
};
```
your notes:


[TOP](#completed-examples)

---

## If in a For Loop


snippet:
```js
actual = [];

const upper = _case.args[0];
const a = _case.args[1];
const b = _case.args[2];

for (let i = 0; i < upper; i++) {
  if (!(i % a) && !(i % b)) {
    actual.push(i);
  };
};
```
test cases: 
```js
const test_cases = [
    {name:'10,2,3', args:[10,2,3], expected:[0,6]},
    {name:'30,5,3', args:[30,5,3], expected:[0,15]},
    {name:'31,5,3', args:[31,5,3], expected:[0,15,30]},
    {name:'12,2,3', args:[12,2,3], expected:[0,6]},
    {name:'12,2,4', args:[12,2,4], expected:[0,4,8]},
    {name:'12,4,3', args:[12,4,3], expected:[0]},
    {name:'13,2,3', args:[13,2,3], expected:[0,6,12]},
    {name:'13,2,4', args:[13,2,4], expected:[0,4,8,12]},
    {name:'13,4,3', args:[13,4,3], expected:[0,12]},
  ];
```
expanded snippet:
```js
actual = [];

const upper = _case.args[0];
const a = _case.args[1];
const b = _case.args[2];
{ // was a for loop
  let i = 0; 
  let while_cond = i < upper;
  while (while_cond) {
    let if_cond; { // !(i % a) && !(i % b);
        const op_1 = i % a;
        const op_2 = !op_1;
        const op_3 = i % b;
        const op_4 = !op_3;
        const op_5 = op_2 && op_4;
    if_cond = op_5; };
    if ( if_cond ) {
      actual.push(i);
    };
    i++;
    while_cond = i < upper;
  };
};
```
[TOP](#completed-examples)

---

### 



___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>