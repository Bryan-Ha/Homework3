// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var password = document.getElementById("#password");
  var result = "";
  //declare a length condition for the password
  for (var i = 0; i < 10; i++) {
      var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqresuvwxyz1234567890~!@#$%^&*()";
      var random = Math.floor(Math.random()*letters.length);
      console.log(random);
      result += letters.charAt(random);
      var passwordLength = result;
      console.log(result);
      if (passwordLength < 10) {
        alert("Need to add more character");
      }
      else (password > 10) {
        alert("Do you want special character on your plassword?");
      }
  }

  function populatePassword() {
    document.password.value = WritePassword(passwordLength);
  }
  alert(result);
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// I have no idea what I am doing for get this password working. Can you post up some solution so i can redo it for my understanding. thank you.


