// following order of operations
// no variables, only primitives here
// and no longer than 4 operations
// no built-in methods yet either

{ // example 1
  const evaluated = 3 + 4 || true;

  let expanded; { // = 3 + 4 || true;
    const step_1 = 3 + 4;
    const step_2 = step_1 || true;
    expanded = step_2
  }

  console.assert(evaluated === expanded, 'example 1')
}

// then make more examples
// and come up with some more for exercises

