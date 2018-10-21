let givenText = process.argv[2];

const stringStrip = function(text){
  let stripedText = "";
  for(let position = 0; position < text.length ; position++){
    if(text[position] != " "){
      stripedText +=  text[position];
    }
  }
  return stripedText;
}
console.log(stringStrip(givenText));
