function AlphabetRunEncryption(str) {

  let decoded = '';

  let i = 0;

  while (i < str.length) {

    // Check if there are two or more characters left

    if (i + 1 < str.length) {

      let currChar = str[i];

      let nextChar = str[i + 1];

      // Check for rule 2

      if (currChar === nextChar) {

        decoded += currChar;

        i += 2;

        continue;

      }

      // Determine the direction to search for characters

      let dir = (nextChar > currChar) ? 1 : -1;

      // Check for rule 1

      if (Math.abs(nextChar.charCodeAt(0) - currChar.charCodeAt(0)) === 1) {

        decoded += String.fromCharCode(currChar.charCodeAt(0) + dir);

        i += 1;

        continue;

      }

      // Find the range of characters between currChar and nextChar

      let startChar = currChar.charCodeAt(0) + dir;

      let endChar = nextChar.charCodeAt(0) - dir;

      for (let j = startChar; dir === 1 ? j <= endChar : j >= endChar; j += dir) {

        decoded += String.fromCharCode(j);

      }

      // Move to the next pair of characters

      i += 2;

    } else {

      // Add the last character to the decoded string

      decoded += str[i];

      i += 1;

    }

  }

  // Remove any 'S' or 'N' characters from the decoded string

  decoded = decoded.replace(/[SN]/g, '');

  return decoded;

}
