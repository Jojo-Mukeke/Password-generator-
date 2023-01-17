// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



  //These two pieces of code generate a a password of ten characters, using the math.random formular.
  //I found this code on stackoverflow
 
  
  
 
  let upperCasedCharacters = 
  let lowerCasedCharacters = ['a, b, c, d, e, f, g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'];
  let specialCharacters = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';


  function password_generator( len ) {
      let length = (len)?(len):(10);
      let string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
      let numeric = '0123456789';
      let punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
      let password = "";
      let character = "";
      
      while( password.length<length ) {
          entity1 = Math.ceil(string.length * Math.random())
          entity2 = Math.ceil(numeric.length * Math.random())
          entity3 = Math.ceil(punctuation.length * Math.random())
          hold = string.charAt( entity1 );
          hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
          character += hold;
          character += numeric.charAt( entity2 );
          character += punctuation.charAt( entity3 );
          password = character;
      }
      password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
      return password.substr(0,len);
  }
  
  console.log( password_generator() );



//Function to prompt user for password options
function getPasswordOptions() {
  let getPasswordOptions = prompt("How many characters");
  getPasswordOptions = getPasswordOptions.toLowerCase();
  

  }

// Function for getting a random element from an array
function getRandom(arr) {

}
//change this code
// Function to generate password with user input
 {

  function generatePassword() {
    getPasswordOptions();
    getSelectedCharacter();
    
  
  
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