// Assignment Code
var generateBtn = document.querySelector("#generate");

input.value = writePassword();
// Write password to the #password input
function writePassword() {
const availableCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"

  var password = generatePassword();



  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
