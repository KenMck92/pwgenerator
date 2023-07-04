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

  if (!characterNumber) {
    return;
  }
  
  if (characterNumber < 8 || characterNumber > 128) {
    window.alert("Quantity has to be at least 8 and no more than 128");
    return;
  }

  if (isNaN(characterNumber)) {
    window.alert("Has to be a number");
    return;
  }
  

  // What types of characters
  // special, number, upper, lower
  // window.confirm
  // Use answers to make password
  // vars that include all possible characters
  var specialCharacter = window.confirm("Do you want special characters?");
  console.log(specialCharacter);
  var numbers = window.confirm("Do you want numbers?");
  console.log(numbers);
  var upperCase = window.confirm("Do you want uppercase letters?");
  console.log(upperCase);
  var lowerCase = window.confirm("Do you want lowercase letters?");
  console.log(lowerCase);

  // seperate vars for each type, arrays
  // example: var upperLetters = ["A", "B", "C"]
  var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var symbols = ["!", "U+0022", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~"]
  // take all true arrays and concat into new array
  var allCharacters = [];
  if (specialCharacter) {
    allCharacters = symbols.concat(allCharacters);
  }
  if (numbers) {
    allCharacters = numeric.concat(allCharacters);
  }
  if (upperCase) {
    allCharacters = capitalLetters.concat(allCharacters);
  }
  if (lowerCase) {
    allCharacters = lowerCaseLetters.concat(allCharacters);
  };
  
  if (!specialCharacter && !numbers && !upperCase && !lowerCase) {
    window.alert("You must choose at least one type of character to create a password. Please try again.");
    return;
  }
  // choose random characters from arr based on user input
  // var push into new array 
  var newNew = [];

  for (var i = 0; i < characterNumber; i++) {
    var numRdm = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    newNew.push(numRdm);
  }
  console.log(newNew);
  // var password = turn array into string .toString()
var password = newNew.join("").toString();
  // return password
return password;
}
