let text = process.argv[2];
let character = process.argv[3];

const strikeOut = function(givenText,letterToBeStruck){
  let struckOutString = "";
  for(let index = 0; index < givenText.length; index++){
    let currentCharacter = givenText[index];
    if(givenText[index] == letterToBeStruck){
      currentCharacter="-"
    }
    struckOutString += currentCharacter;
  }
  return struckOutString;
}

console.log(strikeOut(text,character));
