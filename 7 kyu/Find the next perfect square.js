function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq)) == true) {
    return Math.pow((Math.sqrt(sq) + 1), 2);
  }
  return -1;
}

console.log(findNextSquare(121)); // 144, 
console.log(findNextSquare(319225)); // 320356, 
console.log(findNextSquare(114)); // -1