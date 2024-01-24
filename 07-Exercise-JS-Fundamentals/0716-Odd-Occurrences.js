function extractOddOccurrences(input) {
    const words = input.toLowerCase().split(' ');
    const wordCount = {};
  
    for (const word of words) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  
    const oddOccurrences = Object.entries(wordCount)
      .filter(([_, count]) => count % 2 !== 0)
      .map(([word]) => word);
  
    console.log(oddOccurrences.join(' '));
  }