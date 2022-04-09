const rotate = require('../3-arrays');

test('rotate array [1,2, 3, 4, 5] to [4, 5, 1, 2, 3]', () => {
  expect(rotate([1,2,3,4,5], 2)).toEqual([4,5,1,2,3]);
});

test('max profit on mixed array to be 9', () => {
  expect(rotate([33,233, 1000, 9999, 10000, 11111], 4)).toEqual([1000, 9999, 10000, 11111, 33, 233]);
});