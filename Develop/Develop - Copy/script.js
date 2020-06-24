// get password length
// get uppercase, lowercase, number, special
// validate input
// if (ChoicesMade) {
//    generatePassword}
// else{
//    console.log ("please select char set to use")
//      }

//generate password
//  - get the characteristics
// randomly select characters to make password x legth

//display password
//var passwordLength  = prompt ("enter a length of the password");
//console.log(passwordLength);

//var useUppercase  = prompt ("do you want to use uppercase char?");
//console.log(useUppercase;

//if(useUppercase==='yes'){
 //   choices = choices + uppercaseChars;
//}// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generate Password
function generatePassword() {

  var length = Number(prompt("How many characters would you like your password to be?"));
  while (isNaN(length) || length < 8 || length > 128) 
    length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

  var c_uplets = confirm("Would you like to use uppercase letters?");
  var c_lowlets = confirm("Would you like to use lowercase letters?");
  var c_numbs = confirm("Would you like to use numbers?");
  var c_spec = confirm("Would you like to use special characters?");

  while (!c_uplets && !c_lowlets && !c_numbs && !c_spec) {
    alert("You must select at least one character type!");
    c_uplets = confirm("Would you like to use uppercase letters?");
    c_lowlets = confirm("Would you like to use lowercase letters?");
    c_numbs = confirm("Would you like to use numbers?");
    c_spec = confirm("Would you like to use special characters?");
}
  var password = "";
  var uppers = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var lowers = "qwertyuiopasdfghjklzxcvbnm";
  var numbers = "1234567890";
  var symbols = "!@#$%^&*(){}[]=<>/,.\|";


  var select_pass = "";
  var char = "";

  if (c_uplets) select_pass = select_pass + uppers;
  if (c_lowlets) select_pass = select_pass + lowers;
  if (c_numbs) select_pass = select_pass + numbers;
  if (c_spec) select_pass = select_pass + symbols;

  console.log("password length: " + length); 
  console.log("select_pass string: " + select_pass);

  for (var i = 0; i < length; i++) {
    char = Math.floor(Math.random() 
                            * select_pass.length + 1); 
                  
    password += select_pass.charAt(char) 
  }
  alert ("generated password = " + password);
  return password;
}