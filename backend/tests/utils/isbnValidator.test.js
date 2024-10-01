import { expect } from 'chai';
import { validateISBN } from '../../src/utils/isbnValidator.js';

describe('ISBN Validation', () => {

  it('should validate valid ISBN-10', () => {
    const isbn = '0-306-40615-2';
    expect(validateISBN(isbn)).to.equal(true);
  });

  it('should validate valid ISBN-10 without dashes', () => {
    const isbn = '0306406152';
    expect(validateISBN(isbn)).to.equal(true);
  });

  it('should validate valid ISBN-10 with X', () => {
    const isbn = '123456789X';
    expect(validateISBN(isbn)).to.equal(true);
  });

  it('should invalidate incorrect ISBN-10', () => {
    const isbn = '1234567890'; // Invalid checksum
    expect(validateISBN(isbn)).to.equal(false);
  });

  it('should validate valid ISBN-13', () => {
    const isbn = '978-3-16-148410-0';
    expect(validateISBN(isbn)).to.equal(true);
  });

  it('should validate valid ISBN-13 without dashes', () => {
    const isbn = '9783161484100';
    expect(validateISBN(isbn)).to.equal(true);
  });

  it('should invalidate incorrect ISBN-13', () => {
    const isbn = '9793161484100'; // Invalid prefix
    expect(validateISBN(isbn)).to.equal(false);
  });

  it('should invalidate totally wrong ISBN', () => {
    const isbn = 'abcde';
    expect(validateISBN(isbn)).to.equal(false);
  });
});
