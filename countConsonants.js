let text = process.argv[2];

const isConsonant = function(character){
  let lowerConsonants = "bcdfghjklmnpqrstvwxyz";
  let upperConsonants = "BCDFGHJKLMNPQRSTVWXYZ";
  let consonants = lowerConsonants + upperConsonants;
  for(let index = 0 ; index < consonants.length; index++){
    let consonant = consonants[index];
    if(consonant == character){
      return true;
    }
  }
  return false;
}

const countConsonant = function(givenText){
  let numberOfConsonant = 0;
  for(let pos = 0; pos < givenText.length ; pos++){
    if(isConsonant(text[pos])){
      numberOfConsonant++;
    }
  }
  return numberOfConsonant;
}

console.log(countConsonant(text));
