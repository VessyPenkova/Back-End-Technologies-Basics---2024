function replaceWordWithStars(text, word) {
    let star = '*';
    let stars = star.repeat(word.length);  
    let newText = text.replace(word, stars);
  
    console.log(newText);
  }

  //replaceWordWithStars('Find the hidden word', 'hidden');


  //function replaceWordWithStars(text, word) {
  //  const regex = new RegExp(word, 'g');  
  //  const stars = '*'.repeat(word.length);  
  //  const newText = text.replace(regex, stars);
  
  //  console.log(newText);
  //}