function PlusMinus(num) {

  const digits = num.toString().split('').map(Number);

  const n = digits.length;

  // Generate all possible expressions using recursion

  function generateExpressions(i, sum, expression) {

    if (i === n) {

      // Check if the sum is zero

      if (sum === 0) {

        return expression;

      } else {

        return null;

      }

    } else {

      // Try adding and subtracting the current digit

      const plus = generateExpressions(i + 1, sum + digits[i], expression + '+');

      const minus = generateExpressions(i + 1, sum - digits[i], expression + '-');

      // Choose the expression with more minus characters

      if (plus === null) {

        return minus;

      } else if (minus === null) {

        return plus;

      } else {

        return plus.split('-').length > minus.split('-').length ? plus : minus;

      }

    }

  }

  // Start recursion with the first digit

  const expression = generateExpressions(1, digits[0], '');

  return expression === null ? 'not possible' : expression;

}
