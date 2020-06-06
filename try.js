var outerSpace = "Saturn";

function forgetAssigningAName() {
  console.log(outerSpace); // Saturn
  var outerSpace = "Mars";
  console.log(outerSpace); // Mars
  return outerSpace;
}

console.log(outerSpace);

function sum1(a, b) {
  return a + b;
}

function sum2(a) {
  return function(b) {
    return a + b;
  };
}

var a = sum1(3 + 2);

var b = sum2(3)(2);
