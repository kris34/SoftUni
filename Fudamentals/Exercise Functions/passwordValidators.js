function validatePassword(password) {
  if (hasTwoDigits(password) == true) {
    if (charactersInPassword(password) == true) {
      if (passwordLength(password) == true) {
        console.log("Password is valid");
      }
    }
  }
  if (charactersInPassword(password) == false) {
    console.log("Password must consist only of letters and digits");
  }
  if (passwordLength(password) == false) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (hasTwoDigits(password) == false) {
    console.log("Password must have at least 2 digits");
  }

  function charactersInPassword(password) {
    let charCode;
    for (let i = 0; i < password.length; i++) {
      charCode = password.charCodeAt(i);
      if (
        (charCode >= 48 && charCode <= 57) ||
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122)
      ) {
        if (i == password.length - 1) {
          return true;
        }
      } else {
        return false;
      }
    }
  }

  function hasTwoDigits(password) {
    let isValid = false;
    let charCode = 0;
    let numCounter = 0;
    for (let i = 0; i < password.length; i++) {
      charCode = password.charCodeAt(i);
      if (charCode >= 48 && charCode <= 57) {
        numCounter++;
      }
    }
    if (numCounter >= 2) {
      return (isValid = true);
    } else {
      return (isValid = false);
    }
  }

  function passwordLength(password) {
    let isValid = false;
    if (password.length >= 6 && password.length <= 10) {
      return (isValid = true);
    } else {
      return (isValid = false);
    }
  }
}

validatePassword("logIn");

validatePassword("MyPass123");

validatePassword("Pa$s$s");
