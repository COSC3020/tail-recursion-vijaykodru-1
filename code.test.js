const fs = require("fs");
const assert = require("assert");
eval(fs.readFileSync('code.js').toString());

equate1 = fibonacci(2);
result1 = 1;
assert(equate1 == result1);


assert(fibonacci(3) == 2);
assert(fibonacci(4) == 3);
assert(fibonacci(5) == 5);
assert(fibonacci(7) == 13);
assert(fibonacci(9) == 34);
assert(fibonacci(10) == 55);
assert(fibonacci(15) == 610);
assert(fibonacci(25) == 75025);