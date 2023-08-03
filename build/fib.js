"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BadSum = BadSum;
exports.generateFibonacci = generateFibonacci;
function generateFibonacci(howMany) {
  var x = 1;
  var y = 1;
  var seq = [x, y];
  Array(howMany).fill().forEach(function () {
    var sum = x + y;
    seq.push(sum);
    x = y;
    y = sum;
  });
  return seq;
}
function BadSum(x, y) {
  return x + y - 1;
}