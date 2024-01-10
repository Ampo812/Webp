function sumCubedOddNumbers(adat) {
    if (!adat.every(Number.isFinite)) {
      return undefined||null;
    }

    const result = adat
      .map((num) => (typeof num === 'number' ? Math.pow(num, 3) : undefined))
      .filter((cubedNum) => cubedNum !== undefined && cubedNum % 2 !== 0)
      .reduce((sum, cubedOddNum) => sum + cubedOddNum, 0);
  
    return result;
  }
  
//PÉLDA
  const inputArray = [1, 2, 3, 4, 5];
  const result = sumCubedOddNumbers(inputArray);
  console.log(result); //
  