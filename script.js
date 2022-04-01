// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // TODO: add code to generate the password here
  // function returns a password string consisting of variaous characters based on user prompts
  
  // create some variables
  // let password = ""
  var password = (" ");
  let lowercase = ("abcdefghijklmnopqrstuvwxyz");
 let uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  let numbers = ("0123456789");
  // let specialChars = (" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~" ");
  let length = 0
  let includeLower = false
  let includeUpper = false
  let includeSpecial = false
  let includeNumber = false
  let letter = ("");
  
  
  // length = prompt "Enter password length:"
  // IF length < 8 OR length > 128
  length = prompt("Enter password length");
    if (length) < 8 || length > 128; 
      alert(password should be from 8 to 128);
      
  
  //     alert "Password should be from 8 to 128 characters long."
  //     RETURN ""
  // END IF
  includeLower = prompt("Use lowercase letters?");
    if (includeLower) === true;
      else return password
    var letter = password + lowercase;
      
  // includeLower = prompt "Use lowercase letters?"
  // IF includeLower = true
  //    add lowercase to candidates
  //    letter = random char from lowercase
  //    password = password + letter
  // END IF
  
  // includeUpper = prompt "Use uppercase letters?"
  includeUpper = prompt("Use uppercase letters?");
    if includeUpper === true;
      var letter = password + lowercase + uppercase;
        else return letter

  
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
  
  includeNumber = prompt("Use numbers?");
  if includeNumber === true;
    var letter = password + lowercase + uppercase + numbers;
      else return letter


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
  while password.length < length
    letter = random 
  // RETURN password
  return password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var letters = "abcdefghijklmnopqrstuvwxyz";

function generateWord() {
  var length = prompt("Enter the length");
  var word = "";
  for (var i = 0; i < length; i++) {
    word = word + letters[Math.floor(Math.random() * letters.length)];
  }
  document.querySelector("#output").textContent = word;
}

generateWord();