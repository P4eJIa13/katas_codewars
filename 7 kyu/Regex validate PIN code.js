function validatePIN (pin) {
            
    if (pin.match(/^(\d{4}|\d{6})$/) == null) {
        return false;
    }
    return true;
  }
  
  console.log(validatePIN("1234")); //true
  console.log(validatePIN("1")); // false, "Wrong output for '1'")
  console.log(validatePIN("-1234")); //false, "Wrong output for '12'")
  console.log(validatePIN("-1.234")); //false, "Wrong output for '123'")
  console.log(validatePIN("a1.234")); //false, "Wrong output for '12345'")
  
    