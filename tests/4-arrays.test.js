const containsDuplicate = require('../4-arrays');

test('return true as array contains duplicate 1s', () => {
  expect(containsDuplicate([1,2,3,1])).toBeTruthy();
});

test('return false on as array contains no duplicate numbers', () => {
  expect(containsDuplicate([1,2,3,4])).toBeFalsy();
});

test('return true as array contains multiple duplcate numbers', () => {
  expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBeTruthy();
});