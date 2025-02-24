# JavaScript Null Value Handling Error

This repository demonstrates a common error in JavaScript where a function does not handle null values correctly. The function `foo` should return null only when both `a` and `b` are null. However, the current implementation returns null if either `a` or `b` is null, which is not the intended behavior.

## Bug

The `bug.js` file contains the buggy code. The function `foo` returns null if either `a` or `b` is null. This is incorrect behavior and it needs to be changed to only return null if both `a` and `b` are null.

## Solution

The `bugSolution.js` file contains the corrected code. The function `foo` now only returns null if both `a` and `b` are null. This fixes the bug and ensures that the function behaves as intended.
