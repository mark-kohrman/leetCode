const maxProfit = require('../2-arrays');

test('max profit on array 1 thru 5 to be 4', () => {
  expect(maxProfit([1,2,3,4,5])).toBe(4);
});

test('max profit on mixed array to be 9', () => {
  expect(maxProfit([1, 3, 6, 4, 8])).toBe(9);
});

test('max profit on descending array to be 0', () => {
  expect(maxProfit([6,5,4,3,2,1])).toBe(0);
});
