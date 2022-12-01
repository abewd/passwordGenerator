// Assignment Code
// The query selector function is used to extract from the html to link a class
// Hashtag is onbly for queryselector
// getElementbyID and queryselector links the JS to the HTML to allow it to do things, like enable a button
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var lowerCaseCheck = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCheck = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacterCheck = "!@#$%^&*()_+{}:<>?/";
var numberCheck = "0123456789";

// NaN = not a number
// When you would use and why: when you insert a string or boolean and it doesnt require one, it requires a number
//  if (numberCheck == NaN) {
//   alert("Hey, this isnt a number");
//  }

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
    "Welcome to the PW generator. \n How long do you want PW code to be? \nIt can be between 8-128 chars."
  );

  if (passwordLength < 8) {
    alert("Your PW must be greater than 8 characters");
    determineLength();
  } else if (passwordLength > 128) {
    alert("Your PW cant be greather than 128 characters");
    determineLength();
  } else {
    alert(
      "I have some more questions to ask you to help you create a new password"
    );
  }
  // a return statement is the end of a funcion, youll still need to do the brackets to close it out
  // return "this" says give me this value now
  // Assigning "demo" with "cody" through code, it is not displaying it anywhere
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
}

// Do you want the PW to have numbers in it?

function determineNumbers() {
  numberCheck = prompt("Do you want numbers in your PW \n Yes or No");
  // this makes the text all lowercase so it always inputs as "yes" instead of "Yes", but the code I have will pickup both anyways
  numberCheck = numberCheck.toLowerCase();

  if (numberCheck === "") {
    alert("Please input Yes or No");
    determineNumbers();
  } else if (numberCheck === "yes" || "Yes" || "y" || "Y") {
    numberCheck = true;
    return numberCheck;
  } else if (numberCheck === "no" || "No" || "n" || "N") {
    numberCheck = false;
    return numberCheck;
  } else {
    alert("Plese input Yes or No");
    determineNumbers();
  }
  return numberCheck;
}

//  Do you want the PW to have special characters in it?

function determineSpecial() {
  specialCharacterCheck = prompt(
    "Do you want special characters in your password? \n Yes or No"
  );
  // this makes the text all lowercase so it always inputs as "yes" instead of "Yes", but the code I have will pickup both anyways
  specialCharacterCheck = specialCharacterCheck.toLowerCase();

  if (specialCharacterCheck === "") {
    alert("Please input Yes or No");
    determineSpecial();
  } else if (specialCharacterCheck === "yes" || "Yes" || "y" || "Y") {
    specialCharacterCheck = true;
    return specialCharacterCheck;
  } else if (specialCharacterCheck === "no" || "No" || "n" || "N") {
    specialCharacterCheck = false;
    return specialCharacterCheck;
  } else {
    alert("Please input Yes or No");
    determineSpecial();
  }
  return specialCharacterCheck;
}

// Combine functions input and generate the password

function generatePassword() {
  determineLength();
  console.log(passwordLength);
  determineUpperCase();
  console.log(upperCaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCharacterCheck);

  var characters = lowerCaseCheck;
  var password = "";

  if (uppercaseCheck && numberCheck && specialCharacterCheck) {
    characters += uppercaseCheck + numberCheck + specialCharacterCheck;
  } else if (uppercaseCheck && numberCheck) {
    characters += uppercaseCheck + numberCheck;
  } else if (numberCheck && specialCharacterCheck) {
    characters += numberCheck + specialCharacterCheck;
  } else if (uppercaseCheck && specialCharacterCheck) {
    characters += uppercaseCheck + specialCharacterCheck;
  } else if (uppercaseCheck) {
    characters += uppercaseCheck;
  } else if (numberCheck) {
    characters += numberCheck;
  } else if (specialCharacterCheck) {
    characters += specialCharacterCheck;
  } else {
    characters === lowerCaseCheck;
  }

  for (var i = 0; i < passwordLength; i++) {
    // plus equals means add to w3 schools redo
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
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

// Add event listener to copy password
copyBtn.addEventListener("click", copyPassword);

// // Copying password code
// function copyPassword() {
//   var copyText = document.getElementById("password");
//   coptText.select();
//   document.execCommand("copy");
// }
