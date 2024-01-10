function sumCubedOddNumbers(element) {
    if (!element.every(value => typeof value === 'number' && !isNaN(value) && typeof value !== 'boolean')) {
      return undefined; 
    }
  
    const result = element
      .map(num => Math.pow(num, 3))
      .filter(cubedNum => cubedNum % 2 !== 0)
      .reduce((sum, cubedOddNum) => sum + cubedOddNum, 0);
  
    return result;
  }
  
//Példa
  const inputArray = [1, 2, 3, 4, 5];
  const result = sumCubedOddNumbers(inputArray);
  console.log(result);
  