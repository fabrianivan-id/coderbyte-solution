function SimplePassword(str) {

  // Check length

  if (str.length < 8 || str.length > 30) {

    return "false";

  }

  // Check for capital letter

  if (!/[A-Z]/.test(str)) {

    return "false";

  }

  // Check for number

  if (!/\d/.test(str)) {

    return "false";

  }

  // Check for punctuation or mathematical symbol

  if (!/[^\w\s]/.test(str)) {

    return "false";

  }

  // Check for the word "password"

  if (/password/i.test(str)) {

    return "false";

  }

  return "true";

}
