// links range slider / input box 
const userRange = document.getElementById ('userRange');
const userNumber = document.getElementById ('userNumber');
userRange.addEventListener('input', matchingNumbers);
userNumber.addEventListener('input', matchingNumbers);

function matchingNumbers(e){
    const value = e.target.value
    userRange.value = value
    userNumber.value = value
}

// document.getElementById("generate")

const form = document.getElementById("potatoes")
form.addEventListener("submit" , function(e){
    e.preventDefault()
    writePassword();
});

// Write password to the #password input
function writePassword() {
    let complexity = document.getElementById("userNumber").value;

    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890?<>^&*()}|]!@#$%/";
    
    let password = "";
    
    // loop to generate password
    for(var i = 1; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
        
    }

    //   add password to textbox / display area 
 document.getElementById("displayPW").value = password;
}

// copy to clipboard function 
function copyToClipboard(){
    const copyText = document.getElementById("displayPW");
    copyText.select();
    copyText.setSelectionRange(0, 9999)
    document.execCommand("copy")
    // alert("Password has been copied to clipboard ");
}

// add dark mode?