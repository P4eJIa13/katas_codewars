function longest(s1, s2) {
    return s1
    .concat(s2)
    .split('')
    .sort()
    .filter((el, i, els) => els.indexOf(el) == i)
    .join('');
  }


  console.log(longest("aretheyhere", "yestheyarehere"));