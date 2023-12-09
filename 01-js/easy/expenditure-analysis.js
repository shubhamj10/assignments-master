/*
  Implement a function `calculatetotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculatetotalSpentByCategory(transactions) {
  
  // Create an array to store dictionaries for each category
  let categoryInfo = [];
  
  transactions.forEach(person => {
    let { price, category } = person;
  
    // Check if the category is already in the array
    let existingcategory = categoryInfo.find(info => info.category === category);
  
    if (!existingcategory) {
      // If the category is not in the array, add a new dictionary
      categoryInfo.push({ category, totalSpent: price });
    } else {
      // If the category is in the array, update the total price
      existingcategory.totalSpent += price;
    }
  });
  
  // console.log(categoryInfo);
  
  return categoryInfo;
}

module.exports = calculatetotalSpentByCategory;
