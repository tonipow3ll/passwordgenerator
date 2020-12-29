// Assignment Code
// var generateBtn = document.querySelector("#generate");

// input.value = writePassword();

// Write password to the #password input
function writePassword() {
    // add slider here also, below links number input to value
    let complexity = document.getElementById("usernumber").value;

    // need to add acceptable symbols to values string
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    
    let password = "";
    
    // loop to generate password
    for(var i = 1; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
        
        return password;
    }
    console.log(writePassword)
    const area = document.getElementById("displayPW").value = password;

//   add password to textbox / display area


}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
