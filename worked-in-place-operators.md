## In-Place Operators

[Increment & Decrement operators](https://codeburst.io/javascript-increment-and-decrement-8c223858d5ed).  these tricky operators actually do two operations in one statement: they read the value from the variable, and they change the value.  It's just a question of which happens first.

---

### Examples

**a++**   

[on pytut](http://www.pythontutor.com/live.html#code=let%20a%20%3D%200%3B%0Aconst%20operator%20%3D%20a%2B%2B%3B%0A%0Aa%20%3D%200%3B%0Alet%20expanded%3B%20%7B%20%0A%20%20const%20return_val%20%3D%20a%3B%20%20%20%20%0A%20%20a%20%3D%20a%20%2B%201%3B%20%20%20%20%20%20%20%20%20%0Aexpanded%20%3D%20return_val%3B%20%7D%20%20%20%20%0A%0Aconsole.assert%28expanded%20%3D%3D%3D%20operator%29%3B&cumulative=false&curInstr=8&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)   
[parsonized](https://janke-learning.github.io/parsonizer/?snippet=let%20a%20%3D%200%3B%0Alet%20b%3B%20%7B%20%2F%2F%20%20%3D%20a%2B%2B%3B%0A%20%20const%20new_b%20%3D%20a%3B%20%20%20%20%0A%20%20a%20%3D%20a%20%2B%201%3B%20%20%20%20%0Ab%20%3D%20new_b%3B%20%7D%20%20%20%20)
```js
{
  let a = 0;
  let b; { //  = a++;
    const new_b = a;    
    a = a + 1;          // a -> 1
  b = new_b; }          // b -> 0
}
```
---

**++a**  

[on pytut](http://www.pythontutor.com/live.html#code=let%20a%20%3D%200%3B%0Aconst%20operator%20%3D%20%2B%2Ba%3B%0A%0Aa%20%3D%200%3B%0Alet%20expanded%3B%20%7B%20%0A%20%20a%20%3D%20a%20%2B%201%3B%20%20%20%20%20%20%20%20%20%0A%20%20const%20return_val%20%3D%20a%3B%20%20%20%20%0Aexpanded%20%3D%20return_val%3B%20%7D%20%20%20%20%20%0A%0Aconsole.assert%28expanded%20%3D%3D%3D%20operator%29%3B&cumulative=false&curInstr=8&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)  
[parsonized](https://janke-learning.github.io/parsonizer/?snippet=let%20a%20%3D%200%3B%0Alet%20b%3B%20%7B%20%2F%2F%20%20%3D%20%2B%2Ba%3B%0A%20%20a%20%3D%20a%20%2B%201%3B%0A%20%20const%20new_b%20%3D%20a%3B%20%20%20%20%0Ab%20%3D%20new_b%3B%20%7D)  
```js
{
  let a = 0;
  let b; { //  = ++a;
    a = a + 1;          // a -> 1
    const new_b = a;    
  b = new_b; }          // b -> 1
}
```
---

**a--**  

[on pytut](http://www.pythontutor.com/live.html#code=let%20a%20%3D%200%3B%0Aconst%20operator%20%3D%20a--%3B%0A%0Aa%20%3D%200%3B%0Alet%20expanded%3B%20%7B%20%0A%20%20const%20return_val%20%3D%20a%3B%20%20%20%20%0A%20%20a%20%3D%20a%20-%201%3B%20%20%20%20%20%20%20%20%20%0Aexpanded%20%3D%20return_val%3B%20%7D%20%20%20%20%0A%0Aconsole.assert%28expanded%20%3D%3D%3D%20operator%29%3B&cumulative=false&curInstr=8&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)  
[parsonized](https://janke-learning.github.io/parsonizer/?snippet=let%20a%20%3D%200%3B%0Alet%20b%3B%20%7B%20%2F%2F%20%20%3D%20a--%3B%0A%20%20const%20new_b%20%3D%20a%3B%20%20%20%20%0A%20%20a%20%3D%20a%20-%201%3B%20%20%20%20%20%20%20%20%20%20%0Ab%20%3D%20new_b%3B%20%7D%20%20%20%20%20%20%20%20%20%20)
```js
{
  let a = 0;
  let b; { //  = a--;
    const new_b = a;    
    a = a - 1;          // a -> -1
  b = new_b; }          // b -> 0
}
```
---

**--a**  

[on pytut](http://www.pythontutor.com/live.html#code=let%20a%20%3D%200%3B%0Aconst%20operator%20%3D%20--a%3B%0A%0Aa%20%3D%200%3B%0Alet%20expanded%3B%20%7B%20%0A%20%20a%20%3D%20a%20-%201%3B%20%20%20%20%20%20%20%20%20%0A%20%20const%20return_val%20%3D%20a%3B%20%20%20%20%0Aexpanded%20%3D%20return_val%3B%20%7D%20%20%20%20%20%0A%0Aconsole.assert%28expanded%20%3D%3D%3D%20operator%29%3B&cumulative=false&curInstr=8&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)  
[parsonized](https://janke-learning.github.io/parsonizer/?snippet=let%20a%20%3D%200%3B%0Alet%20b%3B%20%7B%20%2F%2F%20%20%3D%20--a%3B%0A%20%20a%20%3D%20a%20-%201%3B%20%20%20%20%20%20%20%20%0A%20%20const%20new_b%20%3D%20a%3B%20%20%20%20%0Ab%20%3D%20new_b%3B%20%7D%20%20%20%20%20%20%20%20)
```js
{
  let a = 0;
  let b; { //  = --a;
    a = a - 1;          // a -> -1
    const new_b = a;    
  b = new_b; }          // b -> -1
}
```
---

___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
