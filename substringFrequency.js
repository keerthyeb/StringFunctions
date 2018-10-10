let givenText = process.argv[2];
let stringToBeSearched = process.argv[3];

const subString = function(startPosition,subStringLength,text){
  let subString = "";
  let limit = subStringLength + startPosition ;
  for(let index = startPosition; index < limit; index++){
    subString += text[index];
  }
  return subString;
}

const subStringFrequency = function(text,subStringToCount){
  let subStringCount = 0;
  for(let position = 0; position < text.length ; position++ ){
    let subStringToCheck = subString(position,subStringToCount.length,text);
    if(subStringToCheck == subStringToCount){
      subStringCount++;
    }
  }
  return subStringCount;
}
console.log(subStringFrequency(givenText,stringToBeSearched));
