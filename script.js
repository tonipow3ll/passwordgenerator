
const userRange = document.getElementById ('userRange');
const userNumber = document.getElementById ('userNumber');
// input.value = writePassword();

userRange.addEventListener('input', matchingNumbers);
userNumber.addEventListener('input', matchingNumbers);

function matchingNumbers(e){
    const value = e.target.value
    userRange.value = value
    userNumber.value = value
}


// document.getElementById("displayPW");
const area = writePassword();
// Write password to the #password input
function writePassword() {
    // add slider here also, below links number input to value
    let complexity = document.getElementById("userNumber").value;

    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    
    let password = "";
    
    // loop to generate password
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
        
        // return password;
    }

    //   add password to textbox / display area 
 document.getElementById("displayPW").value = password;
}
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword)
