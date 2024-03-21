// Ques 5 Best time to buy and sell stocks
// you are given an array prices where prices [i] is the price of a given
//stock on the ith day.
// you want to maximize your profit by checking a single day to buy one stock
// and choosing a different day in the future to sell that stock.
/// return the maximum profit . If you cannot achieve any profit , return 0.
// Input : prices = [7,1,5,3,6,5]; --------->>>>>>>>> Output: 5;

const maxprofit = function (prices) {
  let minStockPurchasePrice = prices[0] || 0;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minStockPurchasePrice) {
      minStockPurchasePrice = prices[i];
    }

    profit = Math.max(profit, prices[i] - minStockPurchasePrice);
  }
  return profit;
};
