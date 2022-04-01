// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "123";
  // TODO: add code to generate the password here
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialcharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var candidates = "";
  var length = 0;
  var includeUpper = false;
  var includeSpecial = false; 
  var includeNumber = false;
  var letter = "";
  var userInput = " ";

  // length = prompt "Enter password length:"
  length = prompt("Enter password length:");
  if (userInput < 8 && userInput > 128);
    // alert("Password should be from 8 to 128");  
 
  // IF length < 8 OR length > 128
//     alert "Password should be from 8 to 128 characters long."
//     RETURN ""
// END IF

// includeLower = prompt "Use lowercase letters?"
// IF includeLower = true
//    add lowercase to candidates
//    letter = random char from lowercase
//    password = password + letter
// END IF

// includeUpper = prompt "Use uppercase letters?"
// IF includeUpper = true
//    add uppercase to candidates
//    letter = random char from uppercase
//    password = password + letter
// END IF

// includeSpecial = prompt "Use special characters?"
// IF includeSpecial = true
//    add specialChars to candidates
//    letter = random char from special
//    password = password + letter
// END IF

// includeNumbers = prompt "Use numbers?"
// IF includeNumbers = true
//    add numbers to candidates
//    letter = random char from numbers
//    password = password + letter
// END IF

// IF candidates.length === 0
//     alert "You must choose at least one character type."
//     RETURN ""
// END IF

// WHILE password.length < length
//     letter = random char from candidates
//     add letter to password
// END WHILE

// RETURN password







 return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
