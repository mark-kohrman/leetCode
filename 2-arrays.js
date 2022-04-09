/**
 * 
  You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

  On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

  Find and return the maximum profit you can achieve.
  */
 
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

module.exports = maxProfit;