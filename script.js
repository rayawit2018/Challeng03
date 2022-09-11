const numericCharacters =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharacters =['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}', '{',']','[','~','-','_','.',];
const lowerCaseCharacters= ['a','b','c','d','e','f', 'g','h', 'i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
const upperCaseCharacters =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];


// Function to prompt user for password options
function getRandomChar() {
  const length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  if (length < 8||length > 128) {
    alert('Password length must be between  8 characters and 129 characters');
    return null;
  }


  const hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );
  const hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.'
  );
  const hasLowerCaseCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );
  const hasUpperCaseCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );

 
  // store passwordOptions
  const passwordOptions = {
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    length: length,
  };

  return passwordOptions;
}

//Get  random element from an array
function getRandom(arr) {
  const randIndex = Math.floor(Math.random() * arr.length);
  const randElement = arr[randIndex];

  return randElement;
}

// generate password 
function generatePassword() {
  const options = getRandomChar();
  
  var storedPassword = [];

  var typesCharacters = [];

  var chosenCharacters = [];

  if (!options) 
  return null;

  if (options.hasSpecialCharacters) {
    typesCharacters = typesCharacters.concat(specialCharacters);
    chosenCharacters.push(getRandom(specialCharacters));
  }

 
  if (options.hasNumericCharacters) {
    typesCharacters = typesCharacters.concat(numericCharacters);
    chosenCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasLowerCasedCharacters) {
    typesCharacters = typesCharacters.concat(lowerCaseCharacters);
    chosenCharacters.push(getRandom(lowerCaseCharacters));
  }

  if (options.hasUpperCasedCharacters) {
    typesCharacters = typesCharacters.concat(upperCaseCharacters);
    chosenCharacters.push(getRandom(upperCaseCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    var randomCharacter = getRandom(typesCharacters);

    storedPassword.push(randomCharacter);
  }

  for (var i = 0; i < chosenCharacters.length; i++) {
    storedPassword[i] = chosenCharacters[i];
  }

  return storedPassword.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

