let text = process.argv[2];
let subString = process.argv[3];
let count = 0;
let pos = 0;
let temp = "";

while(pos < text.length){
  let index = 0;
  let temp = pos-1;
  let isMatch = 0;
  while(index < subString.length && (text[temp++] == subString[index])){
    isMatch++;
    index++;
  }
  if(isMatch == subString.length){
    count++;
    pos += subString.length -1;
  }
  pos++;
}
console.log(count);
