let text = process.argv[2];

const checkPalindrome = function(givenText){
  let startPosition = 0;
  let endPosition = givenText.length - 1;
  while(startPosition < endPosition){
    if( givenText[endPosition] != givenText[startPosition]){
      return false;
    }
    startPosition++;
    endPosition--;
  }
  return true;
}

console.log(checkPalindrome(text));
