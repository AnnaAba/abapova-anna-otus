function sum(firstNumber) {

  var total = firstNumber;

  return function(nextNumber) {

      if (typeof nextNumber === 'number') {
          total = total + nextNumber;
          return arguments.callee;
      } else {
          return total;
      }

  };
}

console.log(sum(1)(2)(3)());