// ISBN-10 regex
const isbn10Regex = /^(?:\d{9}X|\d{10})$/;

// ISBN-13 regex
const isbn13Regex = /^(?:978|979)\d{10}$/;

export const validateISBN = (isbn) => {
  // Suppress dashes
  const cleanIsbn = isbn.replace(/-/g, '');

  // Check ISBN 10
  if (isbn10Regex.test(cleanIsbn)) {
    const sum = cleanIsbn
      .split('')
      .map((char, index) => (char === 'X' ? 10 : parseInt(char)) * (10 - index))
      .reduce((a, b) => a + b, 0);

    return sum % 11 === 0; // Checksum ISBN 10
  }

  // Valid ISBN 13
  if (isbn13Regex.test(cleanIsbn)) {
    const sum = cleanIsbn
      .split('')
      .map((char, index) => parseInt(char) * (index % 2 === 0 ? 1 : 3))
      .reduce((a, b) => a + b, 0);

    return sum % 10 === 0; // Checksum ISBN 13
  }

  return false;
};
