const removeDuplicates = require('../1-arrays');

test('removes 1 duplicate from [1, 1, 2] array', () => {
  expect(removeDuplicates([1, 1, 2])).toBe(2);
});

test('removes duplicates from array and return 0, 1, 2, 3 , 4', () => {
  expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toBe(5);
});