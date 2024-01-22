function substringAndPrint(inputStr, startIndex, count) {
    if (startIndex < 0 || startIndex >= inputStr.length) {
      console.log("Invalid starting index.");
      return;
    }
  
    const outPut = inputStr.substr(startIndex, count);
  
    console.log(outPut);
  }