let text = process.argv[2];

const isVowel = function(character) {
  let vowels = "aeiouAEIOU";
  for(let index = 0; index < vowels.length; index++){
    let vowel = vowels[index];
    if(character == vowel){
      return true;
    }
  }
  return false;
}

const countVowel = function(givenString){
  let numberOfVowels = 0;
  for(let pos = 0; pos < givenString.length ; pos++){
    if(isVowel(givenString[pos])){
      numberOfVowels++;
    }
  }
  return numberOfVowels;
}
console.log(countVowel(text));
