// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!@#$%^&*()_+{}:<>?/";
var numberCharacters = "0123456789";

// We need to give these variables input later on in the code,
// so for now well create them so we can assign something to them later

var passwordLength;
var upperCaseCheck;
var numberCheck;
var lowerCaseCheck;
var specialCharacterCheck;

// How long do you want the PW to be? Between 8-128 characters

function determineLength() {
  passwordLength = prompt(
    "Welcome to Abewd's sketchy PW generator. How long do you want your code to be? It can be between 8-128 chars."
  );

  if (passwordLength < 8) {
    alert("Your password must be greater than 8 characters");
    determineLength();
  } else if (passwordLength > 128) {
    alert("I said, it cant be more than 128 characters you idiot");
    determineLength();
  } else {
    alert(
      "Ok, here are some additional questions so we can generate your code:"
    );
  }
  return passwordLength;
}

// Do you want the PW to have uppercase letters in it?

function determineUpperCase() {
  upperCaseCheck = prompt(
    "Do you want uppercase letters in your PW? \n Yes or No"
  );
  // .tolowercase = this makes all text lowercase
  upperCaseCheck = upperCaseCheck.toLowerCase();

  // If no input into the site, display a message
  if ("") {
    alert("Please input Yes or No");
    determineUpperCase();
  } else if (upperCaseCheck === "yes" || "Yes" || "y" || "Y") {
    upperCaseCheck = true;
    return upperCaseCheck;
  } else if (upperCaseCheck === "no" || "No" || "n" || "N") {
    upperCaseCheck = false;
    return upperCaseCheck;
  }

  // Do you want the PW to have numbers in it?

  function determineNumbers() {
    numberCheck = prompt("Do you want numbers in your PW \n Yes or No");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
