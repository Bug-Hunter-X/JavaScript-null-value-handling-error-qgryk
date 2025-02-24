function foo(a, b) {
  if (a === null && b === null) {
    return null; //This will not cause error
  }
  return a + b; //This will not cause error
}
console.log(foo(null, 5));
console.log(foo(5, 5));
console.log(foo(null, null));