// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // prompt how many characters
  // (stores)var for characters

  // What types of characters
  // special, number, upper, lower
  // window.confirm

  // Use answers to make password
  // vars that include all possible characters
  // seperate vars for each type, arrays
  // example: var upperLetters = ["A", "B", "C"]

  // take all true arrays and concat into new array
  // choose random characters from arr based on user input
  // var push into new array 
  // var password = turn array into string .toString()

  // return password
}
