function mySum(externalNumber) {
    return function(internalNumber) {
      return externalNumber + internalNumber;
    }
  }
  const func = mySum(20);
  let sum = func(30);
  console.log(sum);