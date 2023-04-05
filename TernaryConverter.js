function TernaryConverter(num) {
  let result = "";
  
  while (num > 0) {
    const remainder = num % 3;
    result = remainder.toString() + result;
    num = Math.floor(num / 3);
  }
  
  return result;
}
