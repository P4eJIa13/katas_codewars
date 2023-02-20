function openOrSenior(data){
    function member(members) {
    return (members[0] >= 55 && members[1] > 7) ? 'Senior' : 'Open';
  }
  return data.map(member);
}

  console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));