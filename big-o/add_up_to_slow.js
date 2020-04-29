const {performance} = require('perf_hooks');

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

// Big-O simplification
// Constants don't matter
//
// O(2n)   ->     O(n)
// 500 operations every time no matter what n is(Constant runtime)
// O(500)  ->     O(1)
// O(13n2) ->     0(n2)

// Smaller terms don't matter
//
// O(n + 10)     ->  O(n)
// O(1000n + 50) ->  O(n)

// Because 5n would be so insignificant comapred to n squared that's all we count
// O(n2 + 5n + 8)->  O(n2)

// 1. Aritmithic operations are Constant
// 2. Variable assignment is also constant
// 3. Accesing elemnts in an array (by index) or object(by key) is constant
// 4. In a loop, the complexity is the length of the loop
//    times the complexity of whatever happens inide the loop
