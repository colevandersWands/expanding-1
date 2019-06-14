# Expanding

Expanding is a _refactoring_ technique (rewriting code without changing it's behavior) that "expands" code until there is only one basic operation per line.  At first your expanded code may feel harder to read than the original code, but keep at it.  Learning to work with expanded code will help enormously understanding new code, tracking down bugs, and inferring strategies from new code. 

The end goal of expanding code is to re-create the same behavior using the most elemental units of JS.  You can even expand individual operators like [```++x```](./worked-in-place-operators.md) or [```a || b```](./worked-short-circuiting.md), replicating their behavior using different language features - just like you can't define a word with itself!

> ["What I cannot create, I do not understand." - Richard Feynman](https://blog.codinghorror.com/when-understanding-means-rewriting/)

### contents 
* [learning objectives](#learning-objectives)
* [incremental refactoring](#incremental-refactoring)
* worked examples
    * [expressions](./worked-expressions.md)  
    * [short-circuiting](./worked-short-circuiting.md)  
    * [in-place operators](./worked-in-place-operators.md)  
    * [conditionals](./worked-conditionals.md)  
    * [loops](./worked-loops.md) 
* [test cases](https://github.com/janke-learning/test-cases)
* Exercises
    * [operators-only](./exercises-operators-only.md)
    * [everything](./exercises-everything.md)



---

## Learning Objectives

* not being intimidated by dense code
* breaking down dense code into small, understandable pices
* learning to trust yourself when manipulating code
* rewriting code without completely understanding it, in order to understand it
* flexibly 'behind-the-scenes' understanding of how code executes
* refactoring for understanding and debugging
* explaining javascript with javascript
* stepping through expressions one operation at a time

[TOP](#expanding)

---

## Incremental Refactoring

It's very easy to make little mistakes when you are refactoring code.  This isn't so bad if you only made one or two changes, it's not too hard to revisit the couple lines you changed and find where you messed up.  But it's a whole different story if you're making a bunch of changes.  It can be impossible to find and fix your mistakes without returning to your original code!  and that's a lot of time wasted.

To avoid this it's good to practice _incremental refactoring_: Making one small change at a time and re-running your tests after each change.  

[TOP](#test-cases)

___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
