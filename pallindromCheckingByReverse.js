let text = process.argv[2];

const reverse = function(text){
  let reversedText = "";
  for(let position = text.length -1; position >= 0 ; position--){
    reversedText += text[position];
  }
  return reversedText;
}

const checkPalindrome = function(Text){
  return reverse(text) == text;
}

console.log(checkPalindrome(text));
