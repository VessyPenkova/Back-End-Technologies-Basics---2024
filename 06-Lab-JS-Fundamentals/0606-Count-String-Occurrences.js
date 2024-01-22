function countAndPrintOccurrences(sentence, wordToFindAndCount){
let words = sentence.split(' ');
let counter = 0;

for(let word of words){
  if(word === wordToFindAndCount){
    counter++;
  }
}
console.log(counter);
}

countAndPrintOccurrences('This is a word and it also is a sentence',
'is'
);