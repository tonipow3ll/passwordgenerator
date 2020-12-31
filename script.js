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



// keeps the page from refreshing when 'generate' button is pressed 
const form = document.getElementById("potatoes")
form.addEventListener("submit" , function(e){
    e.preventDefault()
    writePassword();
});

let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABDEFGHIJKLMNOPQRSTUVWXYZ";
let num = "123456789";
let sym = "?<>^&*()}|]!@#$%/";

let userNum = document.getElementById("userNumber");
let lowerBox = document.getElementById("lower");
let upperBox = document.getElementById("upper");
let numBox = document.getElementById("num");
let symBox = document.getElementById("sym");
let sumbit = document.getElementById("generate");
let finalPw = document.getElementById("displayPW");



function writePassword(l, characters){

    let password = '';
    for (var i = 0; i<l; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password; 
}








// ORIGINAL Write password to the #password input
// function writePassword() {
//     let complexity = document.getElementById("userNumber").value;
//     let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890?<>^&*()}|]!@#$%/";
//     let password = "";
//     // loop to generate password
//     for(var i = 1; i <= complexity; i++){
//         password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
//     }
//     //   add password to textbox / display area 
//  document.getElementById("displayPW").value = password;
// }

// copy to clipboard function 
function copyToClipboard(){
    const copyText = document.getElementById("displayPW");
    copyText.select();
    copyText.setSelectionRange(0, 9999)
    document.execCommand("copy")
    // alert("Password has been copied to clipboard ");
}

// add dark mode?