/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let i, j;
  let profit = 0;
  for (i = 0, j = 1; j < prices.length; j++, i++) {
    if (prices[j] > prices[i]) {
      profit += prices[j] - prices[i];
    }
  }
  
  return profit;
};

maxProfit([1,2,3,4,5]);