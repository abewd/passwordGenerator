// Assign variables for the contents to be used in this code 

// Assign code for the generate button and the copy button 
var generateButton = document.querySelector("#generate");
var copyButton = document.querySelector("#Copy");

// Assign code for the symbols to be used in the password generator
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Link for special characters is available here: 
// https://owasp.org/www-community/password-special-characters
var specialCharacters = "!@#$%^&*()_+";

var numberCharacters = "0123456789";

// Undefined variables to be used later in the code
var passwordLength;
var upperCaseCheck;
var numberCheck;
var specialCheck;

// How long do you want the password to be? 
function lengthOfPassword() {
passwordLength = prompt (
  "Bro, how long do you want your fucking password to be? It has to be 8-128 characters though"
);

// Create if function which doesnt allow the password to be below 8 or 128 characters 

// if (passwordLength < 8) {
//   alert("What the fuck did I say up there about your password being more than 8 chars you stupid fuck");
// lengthOfPassword();
// } else if (passwordLength > 128);
// {
//   alert("Relax, bro. No one is going to hack you. You're not that important");
//   lengthOfPassword();}
//   else if (isNaN(passwordLength)){
//   alert("Bro, please put a password dont be a retard");
//   lengthOfPassword();
// }
// else { alert ("Alright, choose some shit so I can write you a password")}
// return lengthOfPassword;

// }

if (passwordLength<8){
  alert("Password length must be a number between 8-128 characters");
  determineLength();
}else if (passwordLength>128){
  alert("Password length must be a number between 8-128 characters");
  determineLength();
}else if (isNaN(passwordLength)){
  alert("Password length must be a number between 8-128 characters");
  determineLength();
}else{
alert("Great! You will now be asked a series of questions on how you would like us to generate your password.");
}
return passwordLength;

// Determine if the user wants uppercase in their pw 

function determineUpperCase () {
  upperCaseCheck = prompt(
    "Would you like to include uppercase letters, bro? Reply with Y or N"
  );
  upperCaseCheck = upperCaseCheck.toLowerCase();

  // start if commands to determine if they want upper case or not 

  if 
  (uppercaseCheck == "Y") {
    uppercaseCheck = true;
    return uppercaseCheck;
  } else if (uppercaseCheck == "N") {
    uppercaseCheck = false; 
    return uppercaseCheck;
  // This is for if someone doesnt answer or type in Y or N 

  } else {
    alert ("Y or N?");
    determineUpperCase();
  }
  return uppercaseCheck;
  }

  //  Determine if the user wants numbers in their pw

  function determineNumbers() {
    numberCheck = prompt(
      "You want numbers in yo' pw or nah bro \n Y or N"
    );
    if (numberCheck == "Y") {
      numberCheck = true;
      return numberCheck;
    } else if (numberCheck == "N") {
      numberCheck = false;
      return numberCheck;
      // This is for if someone doesnt answer or type in Y or N 
    } else {
      alert ("Y or N?");
      determineNumbers ();
    }
    return numberCheck;
  }

  // Determine if the user wants special characters in their pw 

  function determineSpecialCharacters ();
  specialCheck = prompt ("You want special characters cu'h? \n Y or N");
  if (specialCheck == "Y") {
    specialCheck = true; 
    return specialCheck;
  } else if (specialCheck == "N") {
    specialCheck = false; 
    return specialCheck;
  } else {
    alert ("Y or N");
    determineSpecialCharacters();
  }
  return specialCheck;

  // Combine all the functions input and generate a pw using a for-loop now 

  function generatePassword() {
    lengthOfPassword();
    console.log(passwordLength);
    determineUpperCase();
    console.log(uppercaseCheck);
    determineNumbers();
    console.log(numberCheck);
    determineSpecialCharacters();
    console.log(specialCheck);

  // Generating the password using a for loop and if functions 
  var characters = lowercaseChar;
var password = "";
if (uppercaseCheck && numberCheck && specialCheck){
  characters += uppercaseChar + numberChar + specialChar;

}else if (uppercaseCheck && numberCheck){
  characters += uppercaseChar + numberChar;

}else if (numberCheck && specialCheck){
  characters += numberChar + specialChar;

}else if (uppercaseCheck && specialCheck){
  characters += uppercaseChar + specialChar;

}else if (uppercaseCheck){
  characters += uppercaseChar;

}else if(numberCheck){
  characters += numberChar;

}else if (specialCheck){
  characters += specialChar;

}else{
  characters === lowercaseChar;
}

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// EL to generate PW
generateButton.addEventListener("Click", writePassword);

// EL to copy PW
copyButton.addEventListener("Click", copyPassword);

// Input the password to the writePassword variable 

password1 = generatePassword()
{
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// Copy password to clipboard 

function copyPassword(){
  var copyText = document.getElementById("password");
  copyText.ariaSelected();
  document.execCommand("copy");
}}