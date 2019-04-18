## In-Place Operators

[Increment & Decrement operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment).  these tricky operators actually do two operations in one statement: they read the value from the variable, and they change the value.  It's just a question of which happens first.

---

### Examples

**a++**  
```js
let a = 0;
let b; { // b = a++;
  const val_1 = a;    
  a = a + 1;          // a -> 1
b = val_1; }          // b -> 0
```
---

**++a**  
```js
let a = 0;
let b; { // b = ++a;
  a = a + 1;          // a -> 1
  const val_1 = a;    
b = val_1; }          // b -> 1
```
---

**a--**  
```js
let a = 0;
let b; { // b = a--;
  const val_1 = a;    
  a = a - 1;          // a -> -1
b = val_1; }          // b -> 0
```
---

**--a**  
```js
let a = 0;
let b; { // b = --a;
  a = a - 1;          // a -> -1
  const val_1 = a;    
b = val_1; }          // b -> -1
```
---

___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
