let givenText = process.argv[2];

const stringReverse = function(text){
  let reversedText = "";
  for(let position = text.length -1; position >= 0 ; position--){
    reversedText += text[position];
  }
  return reversedText;
}
console.log(stringReverse(givenText));
