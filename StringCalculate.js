function StringCalculate(str) {

  // Replace all occurrences of ** with the JavaScript exponentiation operator

  str = str.replace(/\*\*/g, '**');

  // Evaluate the string as a JavaScript expression

  return eval(str);

}
