{ // for of loop
  const arr = [1, 2, 3]
  for (let item of arr) {
    console.log(item)
  }
}
{ // expanded to for loop
  const arr = [1, 2, 3]
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}
{ // expanded to while loop
  const arr = [1, 2, 3]
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i])
    i++
  }
}