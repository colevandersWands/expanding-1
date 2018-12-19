// also no variables

{ // simple if
  if (3 < 5) {
    // body
  }

  // becomes
  let condition; { // 3 < 5
    const step_1 = 3 < 5;
    const step_2 = Boolean(step_1);
    condition = step_2
  }
  if (condition) {
    // body
  }
}

{ // if {} else if {}
  if (4 < true) {
    // body
  } else if (3 > 0) {
    // body
  }
  
  // becomes
  let condition_1; { // 4 < true
    const step_1 = 4 < true;
    const step_2 = Boolean(step_1);
    condition_1 = step_2;
  };
  let condition_2; { // 3 > 0
    const step_1 = 3 > 0;
    const step_2 = Boolean(step_2);
    condition_2 = step_2;
  };
  if (condition_1) {
    // body
  } else if (condition_2) {
    // body
  }
}






// this isn't quite exactly accurate, if statements actually run eval()
//  but that's more than is necessary to cover at this point