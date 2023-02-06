	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		cheap: true,
		price: 1.99,
		category: "Vegetables"
	},
	{
		name: "Broccoli (Organic)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		cheap: false,
		price: 3.99,
		category: "Vegetables"
	},
		
	{
		name: "Bread",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		cheap: true,
		price: 2.35,
		category: "Bakery"
	},
	{
		name: "Gluten-Free Bread (Organic)",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		cheap: false,
		price: 4.35,
		category: "Bakery"
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		cheap: false,
		price: 10.00,
		category: "Meat/seafood"
	},
	{
		name: "Salmon (Organic)",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		cheap: false,
		price: 15.00,
		category: "Meat/seafood"
	},
	{
		name: "Banana",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		cheap: true,
		price: 0.99,
		category: "Fruits"
	},
	{
		name: "Milk",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		cheap: true,
		price: 2.50,
		category: "Dairy"
	},
	{
		name: "Almond Milk",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		cheap: true,
		price: 3.47,
		category: "Dairy"
	},
	{
		name: "Mozzarella Cheese",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		cheap: true,
		price: 2.50,
		category: "Dairy"
	},
	{
		name: "Avocado (Organic)",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		cheap: false,
		price: 6.47,
		category: "Fruits"
	},
	{
		name: "Tofu",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		cheap: true,
		price: 1.67,
		category: "Meat/seafood"
	},
	{
		name: "Ground Beef",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		cheap: true,
		price: 6.97,
		category: "Meat/seafood"
	},
	{
		name: "Boneless Chicken Breast (Organic)",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		cheap: false,
		price: 22.00,
		category: "Meat/seafood"
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name + ', $' + prods[i].price + ', $' + prods[i].category);
		}
		else if ((restriction == "Gluten-free") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name + ', $' + prods[i].price + ', $' + prods[i].category);
		}
		else if (restriction == "All"){
			product_names.push(prods[i].name + ', $' + prods[i].price + ', $' + prods[i].category);
		}
		else if ((restriction == "Cheap") && (prods[i].cheap == true)){
			product_names.push(prods[i].name + ', $' + prods[i].price + ', $' + prods[i].category);
		}
		else if ((restriction == "Health_Freak") && (prods[i].organic == true)) {
			product_names.push(prods[i].name + ', $' + prods[i].price+ ', $' + prods[i].category);
		}
	}
	for (let i = 0; i < product_names.length; i++) {
		for (let j = 0; j < product_names.length - i - 1; j++) {
		  let price1 = parseFloat(product_names[j].split(', $')[1]);
		  let price2 = parseFloat(product_names[j + 1].split(', $')[1]);
		  if (price1 > price2) {
			// swap elements
			let temp = product_names[j];
			product_names[j] = product_names[j + 1];
			product_names[j + 1] = temp;
			  }
			}
		  }
	return product_names;
}


// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	let totalPrice = 0;
	for (let i=0; i<chosenProducts.length; i+=1) {
		totalPrice += parseFloat(chosenProducts[i].split(', $')[1]);
	}
	return totalPrice;
}
