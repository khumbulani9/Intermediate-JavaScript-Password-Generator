// passwordOptions contains all necessary string data needed to generate the password
const passwordOptions = {
  num: "1234567890",
  specialChar: "!@#$%&'()*+,^-./:;<=>?[]_`{~}|",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
};

// Executes when button is clicked 
function writePassword() {
  //call generatePassword function
  var password = generatePassword(); 

    //set passwordText = to the textArea on index.html witht he ID of password
    var passwordText = document.querySelector("#password");

    //update the textArea with the new password
    passwordText.value = password;
  } 