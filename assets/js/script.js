// Create generateBtn variable to use with the .addEventListener method
var generateBtn = document.querySelector("#generate");

// Write password to the #password input;use generatePassword function to create the password
//based on user's preferences 
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to 'Generate Password' button
generateBtn.addEventListener("click", writePassword);

//Generate Password
function generatePassword() {

  //Prompt for the number of chars in the password
  var length = Number(prompt("How many characters would you like your password to be?"));

  //Validate the input: if something was entered and if number of characters entered is
  //between 8 and 128
  while (isNaN(length) || length < 8 || length > 128) 
    length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

  //Define the variables (boolean type for Y/N) to store the user's answers
  var c_uplets = confirm("Would you like to use uppercase letters?");
  var c_lowlets = confirm("Would you like to use lowercase letters?");
  var c_numbs = confirm("Would you like to use numbers?");
  var c_spec = confirm("Would you like to use special characters?");

  //Validate to make sure that at least one of the 4 types (Uppercase, lowercase, number or special char)
  //was selected. If not, then repeat all the prompts
  while (!c_uplets && !c_lowlets && !c_numbs && !c_spec) {
    
    c_uplets = confirm("Would you like to use uppercase letters?");
    c_lowlets = confirm("Would you like to use lowercase letters?");
    c_numbs = confirm("Would you like to use numbers?");
    c_spec = confirm("Would you like to use special characters?");
}
  //Define all the string variables
  var password = "";
  var uppers = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var lowers = "qwertyuiopasdfghjklzxcvbnm";
  var numbers = "1234567890";
  var symbols = "!@#$%^&*(){}[]=<>/,.\|";
  var select_pass = "";
  var char = "";

 //Build the select_pass string to choose the password characters from based on user's replies 
  if (c_uplets) select_pass = select_pass + uppers;
  if (c_lowlets) select_pass = select_pass + lowers;
  if (c_numbs) select_pass = select_pass + numbers;
  if (c_spec) select_pass = select_pass + symbols;

  //Randomly select one character from the select_pass string; add the character to the select_pass.
  // repeat the loop till the requested password length is reached.
  for (var i = 0; i < length; i++) {
    
    char = Math.floor(Math.random() * select_pass.length + 1); 
    password += select_pass.charAt(char) 
  }
  //Return the generated password value to the writePassword function
  return password;
}