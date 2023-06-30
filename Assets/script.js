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
  var characterNumber = window.prompt("How many characters");
  console.log(characterNumber);
  
  if (characterNumber < 8 || characterNumber > 128) {
    window.alert("Quanity has to be at least 8 and no more than 12");
    return;
  }

  // What types of characters
  // special, number, upper, lower
  var specialCharacter = window.confirm("Do you want special characters?");
  console.log(specialCharacter);
  var numbers = window.confirm("Do you want numbers?");
  console.log(numbers);
  var upperCase = window.confirm("Do you want uppercase letters?");
  console.log(upperCase);
  var lowerCase = window.confirm("Do you want lowercase letters?");
  console.log(lowerCase);
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
