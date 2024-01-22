function printObjProperties(cityObject) {
    for (let key in cityObject) {
      console.log(`${key} -> ${cityObject[key]}`);
    }
  }