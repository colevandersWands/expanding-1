// cover it quickly here, will do functions in depth next week

{
  const sum = add(3, 4);

  function add(a, b) {
    return a + b;
  }

  // becomes

  let sum; { // = add(3, 4)
    const args = {a: 3, b: 4}

    add_frame: {
      ret_val = args.a + args.b
      break add_frame;
    }

    sum = ret_val
  }
}