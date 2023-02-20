function isTriangle(a, b, c) {
  return (((a + b + c) - Math.max(a, b, c)) > Math.max(a, b, c));
}

  console.log(isTriangle(7, 6, 8));
   