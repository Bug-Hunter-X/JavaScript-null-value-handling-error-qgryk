function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will cause error
  }
  return a + b; //This will not cause error
}
console.log(foo(null, 5)); //This will cause error
console.log(foo(5, 5));