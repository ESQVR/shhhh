const trollCoin = "LUZ WHY U IMPRESSED WITH URSLF? ITS ADMINPASS - YOU SHOULD HAVE BEEN ABLE TO GUESS THAT, SMARTIE";

function encrypt(input) {

  var crypArray = [];
  var inputString = input;
  for (i = 0; i < inputString.length; i++) {
    var result = inputString.charCodeAt(i);
    var xxx = result * 5 + 5 * 5 - 5;
    crypArray.push(xxx);
  }
  var cryptString = crypArray.toString();

  return cryptString;
  

  
}

const output = encrypt(trollCoin);

function reveal (){
  document.getElementById("display").innerHTML = output;
  console.log(output);
}

function laugh(){
  console.log("Soon my dear, Soon");
}
