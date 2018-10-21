let text = process.argv[2];

const digraph = function(givenText){
  let stringLength = givenText.length;
  let index = 0;
  let delimiter = "";
  let lettersOccurInGroup = "";

  while(index < stringLength){
    if(givenText[index] == givenText[index+1]){
      let repeatcharacter = givenText[index];
      lettersOccurInGroup += delimiter + repeatcharacter +repeatcharacter;
      index += 1;
      delimiter = ",";
    }
    index += 1;
  }
  return lettersOccurInGroup;
}
console.log(digraph(text));
