const fs = require("fs");
const assert = require("assert");
eval(fs.readFileSync('code.js').toString());

equate1 = tailrecursiveFIB(2);
result1 = 1;
assert(equate1 == result1);


assert(tailrecursiveFIB(3) == 2);
assert(tailrecursiveFIB(4) == 3);
assert(tailrecursiveFIB(5) == 5);
assert(tailrecursiveFIB(7) == 13);
assert(tailrecursiveFIB(9) == 34);
assert(tailrecursiveFIB(10) == 55);
assert(tailrecursiveFIB(15) == 610);
assert(tailrecursiveFIB(25) == 75025);