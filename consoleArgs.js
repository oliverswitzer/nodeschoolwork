// consoleArgs.js

var procArg = process.argv;
var total = 0;
for (i = 2; i < procArg.length; i++) {
  total += Number(procArg[i]);
}
console.log(total);


