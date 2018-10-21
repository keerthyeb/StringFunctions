let givenText = process.argv[2];

const intersperse = function(text){
  let interspersedText = "";
  let delimiter = "";
  for(let position = 0; position < text.length ; position++){
    interspersedText += delimiter + text[position]; 
    delimiter = ","; 
  }
  return interspersedText;
}

console.log(intersperse(givenText));
