function findWord(word, text) {
    const lowercaseWord = word.toLowerCase();
    const lowercaseText = text.toLowerCase();

    if (lowercaseText.includes(lowercaseWord)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}