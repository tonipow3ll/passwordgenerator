// Assignment Code
// var generateBtn = document.querySelector("#generate");

// input.value = writePassword();

// Write password to the #password input
function writePassword() {
let complexity = document.getElementById("userchoicenumber").value;
let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

let password = "";

// loop to generate password
for(var i = 0; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(value.length - 1)));
}
//   add password to textbox / display area

document.getElementById(finalPassword).value = password;



  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
