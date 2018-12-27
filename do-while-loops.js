{ // while -> do while
  {
    let a = 4, b = 3, c = 2;
    while (a < b || b === c) {
      // body
    }
  }
  {
    let a = 4, b = 3, c = 2;
    let cond = a < b || b === c;
    while (cond) {
      // body
      cond = a < b || b === c;
    }
  }
  {
    let a = 4, b = 3, c = 2;
    let cond = a < b || b === c;
    if (cond) {
      do {
        // body
        cond = a < b || b === c;
      } while (cond);
    }
  }
}
{ // do while -> while
  {
    let a = 4, b = 3, c = 2;
    do {
      // body
    } while (a < b || b === c)
  }
  {
    let a = 4, b = 3, c = 2;
    let cond;
    do {
      // body
      cond = a < b || b === c;
    } while (cond)
  }
  {
    let a = 4, b = 3, c = 2;
    // body
    let cond = a < b || b === c;
    while (cond) {
      // body
      cond = a < b || b === c;
    }
  }
}



