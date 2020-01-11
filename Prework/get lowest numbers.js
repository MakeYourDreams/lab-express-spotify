function sumTwoSmallestNumbers(numbers) {  
  
  lowestNumber = Math.min.apply(Math, numbers)
  
  lowestNumberIndex = numbers.indexOf(lowestNumber);
  
  numbers[lowestNumberIndex] = 9999;
  
  secondLowestNumber = Math.min.apply(Math, numbers)
  
  return(lowestNumber + secondLowestNumber)
}