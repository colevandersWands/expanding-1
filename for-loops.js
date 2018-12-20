// original for loop
for (let i = 0; i < 10; i++) {
  // body of loop
}

// expanded into a while loop
{ // this extra block is intentional
  let i = 0;
  while (i < 10) {
    // body of loop
    i++;
  }
}