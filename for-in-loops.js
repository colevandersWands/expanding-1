{ // for in loop
  const obj = {a: 1, b: 2}
  for (let key in obj) {
    console.log(key)
    console.log(obj[key])
  }
}
{ // expanded to for loop
  const obj = {a: 1, b: 2}
  const keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    console.log(keys[i])
    console.log(obj[keys[i]])
  }
}
{ // expanded to while loop
  const obj = {a: 1, b: 2}
  const keys = Object.keys(obj)
  {
    let i = 0;
    while (i < keys.length) {
      console.log(obj[keys[i]])
      i++
    }
  }
}