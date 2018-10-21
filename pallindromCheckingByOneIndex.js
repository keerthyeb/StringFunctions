let text = process.argv[2];

const checkPalindrome = function(givenText){
  let isPalindrome = true;
  let startPosition = 0;
  let limit = givenText.length - 1;
  while(startPosition < limit - startPosition){
    if( givenText[startPosition] != givenText[limit - startPosition]){
      isPalindrome = false;
    }
    startPosition++;
  }
  return isPalindrome;
}

console.log(checkPalindrome(text));
