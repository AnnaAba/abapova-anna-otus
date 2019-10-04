function sum(firstNumber) {

  var total = firstNumber;

  return function sumNext(nextNumber) {

      if (typeof nextNumber === 'number') {
          total = total + nextNumber;
          return sumNext;
      } else {
          return total;
      }

  };
}

console.log(sum(1)(2)(3)(4)());