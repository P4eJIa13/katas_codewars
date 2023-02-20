function sumTwoSmallestNumbers(numbers) {  
  let min = numbers.sort((a, b) => a - b);
  return min[0] + min[1];
}

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));