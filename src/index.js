module.exports = function zeros(expression) {
  // your solution
  let numOfZeros = 0;
  let multipliers = expression.split('*');
  let isContainTwo = false;
  for (let i = 0; i < multipliers.length; i++) {
    let factorialBase = parseInt(multipliers[i], 10);  
    let dec = multipliers[i].split('!').length - 1;
    if (!isContainTwo && (dec === 1 || factorialBase % 2 === 0)) {
      isContainTwo = true;
    }  

    for (let j = factorialBase; j >= 5; j -= dec) {
      if (j % 25 === 0) {
        numOfZeros++;
      }
      if (j % 5 === 0) {
        numOfZeros++; 
      }      
    }   
  }
  if (!isContainTwo) {
    numOfZeros = 0;
  }  
    
  return numOfZeros;  
}
